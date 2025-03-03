
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
    <section className="section m-3 lg:m-auto md:m-2 sm:m-2 ">
      <Title text="Nasa Curiosity rover"/>
      <p className="pb-3 font-semibold ">Here are the latest photos received by NASA from the Curiosity rover.</p>
      <p className="pb-3 font-semibold flex flex-row"><PlaneTakeoff size={22} className="pr-1"/>Earth launch date: {rover.launch_date}</p>
      <p className="pb-3 font-semibold flex flex-row"> <PlaneLanding size={22} className="pr-1"/>Mars landing date: {rover.landing_date}</p>
      <p className="pb-5 font-semibold flex flex-row"> <Image size={22} className="pr-1"/> date of photo capture : {earth_date}</p>

      {
        roversData && <CardsGrid mode="rover" objects={roversData}/>
      }
    </section>
  )
}

export default Nasa
