import {HubbleImage, News, RoversNasaImage, WebbImage } from "@/utils/types"
import { ReactNode } from "react";
import NewsPageCard from "./NewsPageCard";
import HubbleCard from "./HubbleCard";
import ImageCard from "./ImageCard";
import RoverCard from "./RoverCard";

const Cardsgrid = ({objects, mode}: { objects : News[] | HubbleImage[] | WebbImage[] | (RoversNasaImage | null)[] ; 
    mode: string}): ReactNode => {

    if(mode === "hubble"){
        return <div className="mb-16 grid gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {(objects as HubbleImage[]).map((item,index) => (
                <HubbleCard image={item} key={index}/>
            ))}
        </div>
    } else if(mode==="rover"){
        return <div className="mb-16 grid gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {(objects as RoversNasaImage[]).map((item, index) => (
            <RoverCard key={index} image={item}/>
          ))}
        </div>

    } else if(mode==="imagery"){
        return <div className="grid gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {(objects as WebbImage[]).map((item, index) => <ImageCard image={item} key={index}/>)}
        </div>
    } else if(mode==="news-page"){
        return (
            <div className="grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px] mb-9">
                {(objects as News[]).map((item, index) => (
                    <NewsPageCard news={item as News} key={index}/>
                ))}
            </div>
          )
    }
  
}

export default Cardsgrid