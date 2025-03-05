
import { CardsGrid, Title } from "@/components";
import { roverNasaCustomFetch } from "@/utils/customFetch";
import { RoversNasaImage } from "@/utils/types"
import {PlaneLanding, PlaneTakeoff, Image} from "lucide-react";
import { LoaderFunction, useLoaderData } from "react-router-dom"


export const nasaRoverPageLoader: LoaderFunction = async (): Promise<RoversNasaImage[] | null> => {
  try {
    const response = await roverNasaCustomFetch.get<{ latest_photos: RoversNasaImage[] }>("");
    return response.data.latest_photos;
  } catch (error) {
    console.error(error)
    return null;
  }
};


const Nasa = () => {
const roversData = useLoaderData() as RoversNasaImage[];
const {earth_date, rover} = roversData[0];

  return (
    <div className="bg-gradient-to-b from-slate-200 to-slate-400">
    <section className="section m-3 lg:m-auto md:m-2 sm:m-2 ">
      <Title text="Nasa Curiosity rover"/>
      <p className="pb-3 font-semibold ">Here are the latest photos received by NASA from the Curiosity rover.</p>
      <p className="pb-3 font-semibold flex flex-row"><PlaneTakeoff size={25} className="pr-1  bg-white p-1 mr-1 rounded-md shadow-md"/>Earth launch date: {rover.launch_date}</p>
      <p className="pb-3 font-semibold flex flex-row"> <PlaneLanding size={25} className="pr-1  bg-white p-1 mr-1 rounded-md shadow-md"/>Mars landing date: {rover.landing_date}</p>
      <p className="pb-5 font-semibold flex flex-row"> <Image size={2} className="pr-1 mr-1 bg-white p-1 rounded-md shadow-md"/> date of photo capture : {earth_date}</p>

      {
        roversData && <CardsGrid mode="rover" objects={roversData}/>
      }
    </section>
    </div>
  )
}

export default Nasa
