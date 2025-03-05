import { News } from "@/utils/types"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { complicatedToNormalDate } from "@/utils/functions";

function NewsCard({news} : {news : News}) {
    const { image_url, title, news_site, url, updated_at } = news;

    const newDate = complicatedToNormalDate(updated_at)

    return (
           <Card className="m-1 rounded-none border-stone-100 bg-slate-50">
           <a href={url} target="_blank" rel="noopener noreferrer">
               <CardHeader className=" p-3">Info from : {news_site}</CardHeader>
                    <CardContent className="px-3">
                    <img className=" max-h-[20em] w-full object-cover " src={image_url} alt="card img"/>
                    </CardContent>
                    <CardFooter className="flex-col p-1 text-center">
                        <h6 className="p-1 m-1 text-slate-800 font-bold">{title}</h6>
                        <p className="text-slate-400 font-thin mt-1">{newDate}</p>
                    </CardFooter>
           </a>
       </Card>
  )
}

export default NewsCard