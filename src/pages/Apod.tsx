import { Title } from "@/components";
import ApodPlayer from "@/components/ApodPlayer";
import { nasaCustomFetch } from "@/utils/customFetch"
import { ApodType } from "@/utils/types";

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
 console.log(defaultApod)
  return (
    <section className="section">
      <Title text="picture of the day"/>
        <ApodPlayer apod={defaultApod}/>
    </section>
  )
}

export default Apod