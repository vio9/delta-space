import { News } from "@/utils/types"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Link } from "react-router-dom";

function NewsCard({news} : {news : News}) {
    const {image_url, title, news_site, url} = news;
  
    return (
           <Card className="m-1 bg-gradient-to-b from-blue-100 to-white">
           <Link to={url}>
               <CardHeader className="text-whitep-0">Info from : {news_site}</CardHeader>
               <CardContent>
                   <img className="h-full w-full object-cover" src={image_url} alt="card img"/>
               </CardContent>
               <CardFooter className="font-extrabold text-l p-3">{title}</CardFooter>
           </Link>
       </Card>
  )
}

export default NewsCard