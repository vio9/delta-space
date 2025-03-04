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
  return (
    <div>
        <h1 className="capitalize my-4 text-1xl">Related news</h1>
        {
          !isLoading ? 
          (  <div className="grid gap-2 auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2">
            {
                news.map(newItem => 
                   <NewsCard key={newItem.id} news={newItem}/>
                )
            }
            </div>)
            :
            (  <div className="flex flex-col bg-slate-100 p-4 rounded-sm lg:w-[50rem]">
              <p className="mb-6">News are Loading</p>
              <Progress className=" lg:w-[40rem]" value={progress} />
                </div>
              )
        }
      
    </div>
  )
}

export default RelatedNews