import { Title } from "@/components";
import ApodPlayer from "@/components/ApodPlayer";
import { nasaCustomFetch } from "@/utils/customFetch"
import { numberToDate } from "@/utils/functions";
import { ApodType } from "@/utils/types";
import { useEffect, useState } from "react";

import { LoaderFunction, useLoaderData } from "react-router-dom";

export const apodPageLoader: LoaderFunction = async () : Promise< ApodType | null > => {
  try {
    const response = await nasaCustomFetch.get<ApodType>("");
    return response.data
  } catch (error) {
    console.error(error);
    return null;
  }
}

const Apod = () => {
 const defaultApod =  useLoaderData() as ApodType;
 const [data, setData] = useState<ApodType>(defaultApod); 
 const [day, setDay] = useState<number>(0); 
 const [isLoading, setIsLoading] = useState<boolean>(false); 

 const fetchApod = async (day:number):Promise<void | null> => {
    setIsLoading(true);
    try {
        const params = {date: numberToDate(day)}; 
        const response = await nasaCustomFetch.get<ApodType>("", {params : params});
        setData(response.data);
        setIsLoading(false);
    } catch (error) {
        console.error(error);
        setIsLoading(false);
        return null;
    }
 }

 useEffect(() => {
  fetchApod(day)
 }, [day]);

  return (
    <div className="bg-slate-300">
    <section className="section sm:m-2 md:m-2 lg:m-auto">
      <Title text="picture of the day"/>
        <ApodPlayer 
          apod={data} 
          day={day} 
          setDay={setDay}
          isLoading={isLoading}

        />
    </section>
    </div>
  )
}

export default Apod