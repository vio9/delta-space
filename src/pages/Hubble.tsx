import { datastroCustomFetch } from "@/utils/customFetch"
import { HubbleImagesResponse } from "@/utils/types";
import { LoaderFunction, useLoaderData } from "react-router-dom";

const hubbleParams = {
  order_by: "photo_date_taken desc",
  limit: 24,
}
export const hubblePageLoader : LoaderFunction = async(): Promise<HubbleImagesResponse | null> => {
  try {
    const formattedParams = {
      ...hubbleParams,
    }
    const response = await datastroCustomFetch.get<HubbleImagesResponse>("", {params: formattedParams});
    return response.data;
  } catch (error) {
    console.log(error)
    return null
  }
}

const Hubble = () => {
  const data = useLoaderData() as HubbleImagesResponse;
  console.log(data)
  return (
    <div>Hubble</div>
  )
}

export default Hubble;