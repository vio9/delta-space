
import { roverNasaCustomFetch } from "@/utils/customFetch";
import { RoversNasaImage } from "@/utils/types"
import { LoaderFunction } from "react-router-dom"


export const nasaRoverFetch = async ():Promise <RoversNasaImage[] | null> => {
  try {
    const response = await roverNasaCustomFetch.get<RoversNasaImage>("",);
    console.log("response",response.data.photos)
    return response.data.photos;
  } catch (error) {
    console.log(error)
    return null
  }
} 

nasaRoverFetch()

const Nasa = () => {

  return (
    <div>Nasa</div>
  )
}

export default Nasa