import { News } from "@/utils/types"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Link } from "react-router-dom";

function NewsCard({news} : {news : News}) {
    const {image_url, title, news_site, url} = news;
  
    return (
           <Card className="m-1 rounded-none border-stone-100 bg-slate-50">
           <Link to={url}>
               <CardHeader className="text-whitep-0 p-3">Info from : {news_site}</CardHeader>
               <CardContent className="p-3">
                   <img className="h-full w-full object-cover" src={image_url} alt="card img"/>
               </CardContent>
               <CardFooter className="font-extrabold text-l p-3">{title}</CardFooter>
           </Link>
       </Card>
  )
}

export default NewsCard