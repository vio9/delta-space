import { CardsGrid, Title, WebbTelescopeSummary } from "@/components";
import RelatedNews from "@/components/RelatedNews";
import { snapiCustomFetch, webbCustomFetch } from "@/utils/customFetch"
import { News, NewsResponse, WebbImage, WebbImagesResponse, WebbNewsAndImagery } from "@/utils/types";
import { useEffect, useState } from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";

const newsParams = {
  news_site_exclude : "SpacePolicyOnline.com,teslarati", 
  limit:10,
  ordering: "-updated_at",
  summary_contains:"webb",
}

const imagesParams = {
  page: 1,
  perPage:4,
}

export const newsFetch = async (): Promise<News[] | null> => {
try {
  const response = await snapiCustomFetch.get<NewsResponse>("", { params:newsParams });

  return response.data.results;
} catch (error) {
  console.error(error);
  return null;
}
}

export const imageryFetch = async ():Promise<WebbImage[] | null> => {
  try {
    const response = await webbCustomFetch.get<WebbImagesResponse>("", { params: imagesParams });
    return response.data.body;
  } catch (error) {
    console.error(error);
    return null;
  }
  }

 // double loader résolu avec promise all 
export const webbpageLoader:LoaderFunction = async (): Promise<WebbNewsAndImagery | null> => {
  try {
    const [news, imagery] = await Promise.all([newsFetch(), imageryFetch()]);
    return {news, imagery};
  } catch (error) {
    console.error(error);
    return null;
  }
}

const Webb = () => {
 const {news, imagery} =  useLoaderData() as WebbNewsAndImagery
 const [isLoading, setIsLoading] = useState<boolean>(true);

 useEffect(() => {
  if (news && imagery) {
    setIsLoading(false)
  }
 }, [news, imagery])

 return (

    <section className="section max-w-[90rem]">
      <Title text="James Webb space telescope"/>
      { news && <RelatedNews news={news} isLoading={isLoading}/>}
      <Title text="Videos in brief"/>
      <WebbTelescopeSummary />
      <Title text="Recent images"/>
      { imagery && <CardsGrid objects={imagery} mode="imagery" />}
    </section>

  )
}

export default Webb;