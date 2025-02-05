import { NewsResponse } from "@/utils/types"
import { ReactNode } from "react";
import NewsPageCard from "./NewsPageCard";

const Cardsgrid = ({objects, mode}: { objects : NewsResponse; mode: string}): ReactNode => {

    return (
    <div className="grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px]">
        {objects.results.map((item, index) => (
            <NewsPageCard news={item} key={index}/>
        ))}
    </div>
  )
}

export default Cardsgrid