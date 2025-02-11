import { snapiCustomFetch, webbCustomFetch } from "@/utils/customFetch"
import { News, NewsResponse, WebbImage, WebbImagesResponse, WebbNewsAndImagery } from "@/utils/types";

const newsParams = {
  news_site_exclude : "SpacePolicyOnline.com", 
  limit:10,
  ordering: "published_at",
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
  console.log(error);
  return null;
  
}
}

export const imageryFetch = async ():Promise<WebbImage[] | null> => {
  try {
    const response = await webbCustomFetch.get<WebbImagesResponse>("", { params: imagesParams });
    return response.data.body;
  } catch (error) {
    console.log(error);
    return null;
  }
  }

export const webbpageLoader = async (): Promise<WebbNewsAndImagery | null> => {
try {
  const [news, imagery] = await Promise.all([newsFetch(), imageryFetch()]);
  return {news, imagery}
} catch (error) {
  console.log(error)
  return null
}
}


const Webb = () => {
  return (
    <div>Webb</div>
  )
}

export default Webb;