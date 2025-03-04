import { ApodType } from "@/utils/types"
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { Progress } from "./ui/progress";
import { useEffect, useState } from "react";

type ApodPlayerProps = {
  apod: ApodType,
  day: number,
  setDay: React.Dispatch<React.SetStateAction<number>>
  isLoading:boolean,
}

function ApodPlayer({apod, day, setDay, isLoading} : ApodPlayerProps) {
    const { copyright, date, explanation, media_type, title, url } = apod;
    const [progress, setProgress] = useState<number>(10)

    const previousHandler = () => {
        setDay((state) => {
          return state + 1;
        })
    }

    const nextHandler = () => {
      setDay((state) => {
        if(state < 1){
          return 0;
        }
        return state + 1;
      })
  }

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
        <>
            <div className="w-full mx-auto flex justify-between">
              <button className="mx-4" disabled={day === 0} onClick={nextHandler}>
                <CircleChevronLeft size={36} 
                className={`transition-all text-slate-500 ${day !== 0 ? "hover:scale-110 hover:text-slate-100" : ""}`}/>
              </button>

              {
                !isLoading ? (
                  <div className="lg:h-[42rem] w-full">
                  {media_type === "video " ? <iframe height="100%" width="100%" src={url}></iframe>
                  :
                  <img 
                    src={url}  
                    alt="apod-img" 
                    className="h-full w-full object-cover">
                      </img>}
                </div>
                ) 
                :
                (
                <div className="h-[400px] w-full grid place-content-center">
                   <p className="mb-6">Photo is loading....</p>
                    <Progress 
                    value={progress} className="lg:w-[40rem] w-[60%] [&>div]:bg-cyan-600" />
                
                </div>
              )
              }
                <button className="mx-4" onClick={previousHandler}>
                  <CircleChevronRight size={36} className="transition-all text-slate-500  hover:scale-110 hover:text-slate-100"/>
                </button>
            </div>
            <div className="capitalize text-center text-1xl p-2 text-slate-500">{date}</div>
            <div className="mx-auto w-full my-8">
              <p className="capitalize text-2xl mb-2">{title}</p>
              <p className="text-justify m-1 lg:text-left">{explanation}</p>
              <p className="capitalize mt-4 text-right">{copyright}</p>
              <p className="capitalize text-right">{date}</p>
            </div>
        </>
  )
}

export default ApodPlayer;