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
    console.log(error);
    return null;
  }
}

const Apod = () => {
 const defaultApod =  useLoaderData() as ApodType;
 const [data, setData] = useState<ApodType>(defaultApod); // obj apod
 const [day, setDay] = useState<number>(0); // jour + action en av ou arr


 const fetchApod = async (day:number):Promise<ApodType | null> => {
  try {
      const params = {date: numberToDate(day)}; 
      const response = await nasaCustomFetch.get<ApodType>("", {params});
      return response.data
  } catch (error) {
    console.log(error);
    return null
    
  }
 }

 useEffect(() => {
  fetchApod(day)
 }, [day])
  return (
    <section className="section">
      <Title text="picture of the day"/>
        <ApodPlayer apod={defaultApod}/>
    </section>
  )
}

export default Apod