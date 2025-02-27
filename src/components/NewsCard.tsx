import { News } from "@/utils/types"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { complicatedToNormalDate } from "@/utils/functions";

function NewsCard({news} : {news : News}) {
    const {image_url, title, news_site, url, updated_at} = news;

    const newDate = complicatedToNormalDate(updated_at)
    console.log(newDate) 

    return (
           <Card className="m-1 rounded-none border-stone-100 bg-slate-50">
           <a href={url} target="_blank" rel="noopener noreferrer">
               <CardHeader className="text-whitep-0 p-3">Info from : {news_site}</CardHeader>
               <CardContent className="p-3">
                   <img className="h-full w-full object-cover" src={image_url} alt="card img"/>
               </CardContent>
               <CardFooter className="flex-col p-1 text-center">
                <p>{title}</p>
                <p className="text-slate-400 font-thin mt-1">{newDate}</p>
                </CardFooter>
           </a>
       </Card>
  )
}

export default NewsCard