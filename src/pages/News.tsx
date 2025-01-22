import { CardsGrid } from "@/components";
import { snapiCustomFetch } from "@/utils/customFetch";
import { NewsResponse } from "@/utils/types";
import { LoaderFunction, useLoaderData } from "react-router-dom";

const newsParams = {
  news_site_exclude : "SpacePolicyOnline.com", // site exclu photos moches
  limit:20,
  ordering: "published_at" // on ordonne les datas par date
}

export const NewsPageLoader : LoaderFunction = async (): Promise<NewsResponse | null> => {
  try {
   const formattedParams = {
      ...newsParams, // on recup le contenu de newsparams
   };
   const response = await snapiCustomFetch.get<NewsResponse>("", {
      params: formattedParams,
   });
   return response.data //  avec axios le contenu est dans data
  } catch (error) {
    console.log(error);
    return null;
  }
}
const News = () => {
  const { results } = useLoaderData(); 
  console.log("results=",results)

  return (
    <section className="section">
       <CardsGrid objects={results} mode="news-page" />
    </section>
   
  )
}

export default News;