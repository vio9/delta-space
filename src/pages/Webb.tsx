import { CardsGrid, Title, WebbTelescopeSummary } from "@/components";
import RelatedNews from "@/components/RelatedNews";
import { snapiCustomFetch, webbCustomFetch } from "@/utils/customFetch"
import { News, NewsResponse, WebbImage, WebbImagesResponse, WebbNewsAndImagery } from "@/utils/types";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import imgDefaultWebb from "../assets/images/pexels-miriamespacio.jpg";

const newsParams = {
  news_site_exclude : "SpacePolicyOnline.com,teslarati", 
  limit:10,
  ordering: "published_at",
  summary_contains:"webb",
}

const imagesParams = {
  page: 1,
  perPage:4,
}

const IsValidImageUrl = (url:string):boolean => {
  const img = new Image();
  img.src = url;
  return img.complete && img.naturalWidth !== 0;
}

export const newsFetch = async (): Promise<News[] | null> => {
try {
  const response = await snapiCustomFetch.get<NewsResponse>("", { params:newsParams });
   response.data.results.map((newsItem) => {
    if(!newsItem.image_url || !IsValidImageUrl(newsItem.image_url)){
      newsItem.image_url = imgDefaultWebb;
    }
  })
  return response.data.results;

} catch (error) {
  console.log(error);
  return null;
  
}
}

export const imageryFetch = async ():Promise<WebbImage[] | null> => {
  try {
    const response = await webbCustomFetch.get<WebbImagesResponse>("", { params: imagesParams });
    console.log("imagery:",response.data.body);
    return response.data.body;
  } catch (error) {
    console.log(error);
    return null;
  }
  }

 // double loader résolu avec promise all 
export const webbpageLoader:LoaderFunction = async (): Promise<WebbNewsAndImagery | null> => {
try {
  const [news, imagery] = await Promise.all([newsFetch(), imageryFetch()]);
  return {news, imagery}
} catch (error) {
  console.log(error)
  return null
}
}


const Webb = () => {
 const {news, imagery} =  useLoaderData() as WebbNewsAndImagery
 
 return (

    <section className="section">
      <Title text="James Webb space telescope"/>
      { news && <RelatedNews news={news} />}
      <Title text="Videos in brief"/>
      <WebbTelescopeSummary />
      <Title text="Recent images"/>
      { imagery && <CardsGrid objects={imagery} mode="imagery" />}
    </section>

  )
}

export default Webb;