import { WebbImage } from "@/utils/types"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

function ImageCard({ image } : {image : WebbImage}) {

    const { details, location } = image ;
    const {description, mission} = details
  return (
    <Card className="m-1 rounded-none border-stone-100 bg-slate-50">
        <CardHeader className="p-2">{mission}</CardHeader>
        <CardContent className="p-3"><img src={location} alt = "james webb " className="w-full" /></CardContent>
        <CardFooter  className="p-2">{description}</CardFooter>
    </Card>
  )
}

export default ImageCard