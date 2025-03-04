import { News } from "@/utils/types"
import NewsCard from "./NewsCard"

function NewsLauncherSquaredCards({news} : {news: News[]}) {
  return (
    <div className="mt-6 grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
       <NewsCard news={news[0]}/>
       <NewsCard news={news[1]}/>
       <NewsCard news={news[2]}/>
    </div>
  )
}

export default NewsLauncherSquaredCards