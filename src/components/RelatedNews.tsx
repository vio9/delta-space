import { RelatedNewsProps } from "@/utils/types"
import NewsCard from "./NewsCard"
import { Progress } from "./ui/progress"
import { useEffect, useState } from "react"

const RelatedNews = ({news, isLoading } : RelatedNewsProps ) => {
  const [progress, setProgress] = useState<number>(10)
 
  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 1600)
    return () => clearTimeout(timer)
  }, [])
  console.log(news)
  
  return (
    <div>
        <h1 className="capitalize my-4 text-2xl">Related news</h1>
        <p className="text-1xl mb-2">Click for the full article in its natural habitat</p>
        {
          !isLoading ? 
          (  <div className="grid gap-2 auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-4 pt-1">
            {
                news.map(newItem => 
                   <NewsCard key={newItem.id} news={newItem}/>
                )
            }
            </div>)
            :
            (  <div className="flex flex-col bg-slate-100 p-4 rounded-sm lg:w-[42rem]">
              <p className="mb-6">The news are loading....</p>
              <Progress 
              value={progress} className="lg:w-[40rem] w-[60%] [&>div]:bg-cyan-600" />
                </div>
              )
        }
      
    </div>
  )
}

export default RelatedNews