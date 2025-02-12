import { News } from "@/utils/types"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Link } from "react-router-dom";

function NewsCard({news} : {news : News}) {
    const {image_url, title, news_site, url} = news;
  
    return (
        <Card className="relative text-white border-0 hover:text-gray-200">
            <Link to={url}>
                <CardHeader className=" text-white absolute top-1 left-1 p-0"><span className="text-blue-500 font-extrabold">Info from : {news_site}</span></CardHeader>
                <CardContent className="h-full w-full p-0">
                    <img className="h-full w-full object-cover" src={image_url} alt="card img"/>
                    <div className="absolute inset-0 bg-gray-600 opacity-60 transition-opacity duration-50 hover:opacity-20"></div>
                </CardContent>
                <CardFooter className="absolute bottom-0 p-2 font-extrabold text-xl">{title}</CardFooter>
            </Link>
        </Card>
  )
}

export default NewsCard