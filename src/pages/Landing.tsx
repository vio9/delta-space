import { NewsLauncher, CuriosityLauncher, ApodLauncher, WebbLauncher, HubbleLauncher } from "@/components";
import { datastroCustomFetch, nasaCustomFetch, snapiCustomFetch } from "@/utils/customFetch";
import { ApodType, HubbleImage, HubbleImagesResponse, LandingPageNewsApodHubbles, News, NewsResponse } from "@/utils/types";
import { LoaderFunction } from "react-router-dom";

const newsParams = {ordering : "published_at",  news_site_exclude : "teslarati"};
const hubblesParams = { 
  order_by : "photo_date_taken desc",
  limit : 12,
}

export const newsFetch = async (): Promise<News[] | null> => {
try {
  const response = await snapiCustomFetch.get<NewsResponse>("", {params : newsParams});
  return response.data.results;
} catch (error) {
  console.log(error)
  return null
}
}

export const apodFetch = async ():Promise<ApodType | null> => {
  try {
    const response = await nasaCustomFetch.get<ApodType>("");
    return response.data;
  } catch (error) {
    console.log(error)
    return null
  }
  }

  export const hubblesFetch = async (): Promise<HubbleImage[] | null> => {
    try {
      const response = await datastroCustomFetch.get<HubbleImagesResponse>("", {params : hubblesParams});
      return response.data.results;
    } catch (error) {
      console.log(error)
      return null
    }
    }



export const LandingPageLoader : LoaderFunction = async(): Promise<LandingPageNewsApodHubbles | null> => {
  try {
    const [news, apod, hubbles] = await Promise.all([newsFetch(), apodFetch(), hubblesFetch()]);
    return {news, apod, hubbles}
  } catch (error) {
    console.log("error:",error);
    return null;
  }
}

const Landing = () => {

  return (
    <section>
      <CuriosityLauncher />
      <WebbLauncher />
      <HubbleLauncher/>
      <NewsLauncher />
      <ApodLauncher />
    </section>
  )
}

export default Landing

