
import { CardsGrid, Title } from "@/components";
import { roverNasaCustomFetch } from "@/utils/customFetch";
import { RoversNasaImage } from "@/utils/types"
import { LoaderFunction, useLoaderData } from "react-router-dom"


export const nasaRoverPageLoader: LoaderFunction = async (): Promise<RoversNasaImage[] | null> => {
  try {
    const response = await roverNasaCustomFetch.get<{ photos: RoversNasaImage[] }>("");
    console.log(response.data.photos);
    return response.data.photos;
  } catch (error) {
    console.log(error);
    return null;
  }
};


const Nasa = () => {
const roversData = useLoaderData() as RoversNasaImage[];


  return (
    <section className="section">
      <Title text="Nasa Curiosity rover"/>
      {
        roversData && <CardsGrid mode="rover" objects={roversData}/>
      }
    </section>
  )
}

export default Nasa
