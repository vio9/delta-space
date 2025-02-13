import { CardsGrid, Filters, Overview, Title } from "@/components";
import { snapiCustomFetch } from "@/utils/customFetch";
import { FiltersParams, NewsResponse, NewsResponseWithParams } from "@/utils/types"; // types ts
import { LoaderFunction, useLoaderData } from "react-router-dom";

const newsParams = {
  news_site_exclude : "SpacePolicyOnline.com", // site exclu photos moches
  limit:20,
  ordering: "published_at" // on ordonne les datas par date
}

export const newsPageLoader : LoaderFunction = async ({request}): Promise<NewsResponseWithParams  | null> => {
  try {
   const params:FiltersParams = Object.fromEntries([...new URL(request.url).searchParams.entries()])
   
   const formattedParams = {
    search: params.term ? params.term : "", 
      ...newsParams, // on recup le contenu de newsparams
   };
   const response = await snapiCustomFetch.get<NewsResponse>("", {
      params: formattedParams,
   });
   return {response : response.data, params} ;//  avec axios le contenu est dans data
  } catch (error) {
    console.log(error);
    return null;
  }
}
const News = () => {
const data = useLoaderData() as NewsResponseWithParams;
const { response, params } = data;


  return (
    <section className="section">
       <Title text="All news"/> 
       <Filters term={params.term} mode="news" key={params.term}/>
       <Overview objects={data}/>
       <CardsGrid objects={response.results} mode="news-page" />
    </section>
   
  )
}

export default News;