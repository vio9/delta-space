import { News } from "@/utils/types"
import NewsCard from "./NewsCard"

const RelatedNews = ({news}: { news:News[] }) => {
  return (
    <div>
        <h1 className="capitalize my-4 text-1xl">Related news</h1>
        <div className="grid gap-2 auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2">
        {
            news.map(newItem => 
               <NewsCard key={newItem.id} news={newItem}/>
            )
        }
        </div>
    </div>
  )
}

export default RelatedNews