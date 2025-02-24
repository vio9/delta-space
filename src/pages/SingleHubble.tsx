import { Title } from "@/components"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { datastroCustomFetch } from "@/utils/customFetch"
import { HubbleImage, HubbleImagesResponse } from "@/utils/types"
import { LoaderFunction, useLoaderData, useNavigate } from "react-router-dom"

export const singleHubblePageLoader:LoaderFunction = async ({params}): Promise <HubbleImage | null> => { // on recupere la route dynamique avec params react router dom
    try {
        const formattedParams = {where:params.id ? `photo_id like "${params.id}"` : ``} 
        const response = await datastroCustomFetch.get<HubbleImagesResponse>("", {params: formattedParams})
        return response.data.results[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

function SingleHubble() {
   const {photo_date_taken, album_name_tags, photo_description, photo_title, photo_url_m, photo_license} =  useLoaderData() as HubbleImage;
   const navigate = useNavigate() ;
   return (
    <section className="section">
        <Button onClick={()=> navigate(-1)} type="button">Back</Button>
        <Title text="hubble telescope picture" />
        <Card>
            <CardHeader>
                <CardTitle className="flex justify-between text-1xl">
                    <div>{photo_title} | {album_name_tags}</div>
                    <div>
                        <p>Taken : {photo_date_taken}</p>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <img className="w-full h-full"src={photo_url_m.url} alt={photo_title} />
                <p className="mt-4">{photo_description}</p>
            </CardContent>
            <CardFooter>{photo_license}</CardFooter>
        </Card>

    </section>
  )
}

export default SingleHubble