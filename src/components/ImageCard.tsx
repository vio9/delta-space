import { WebbImage } from "@/utils/types"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

function ImageCard({ image } : {image : WebbImage}) {

    const { details, location } = image ;
    const {description, mission} = details
  return (
    <Card className="bg-gradient-to-b from-blue-100 to-white">
        <CardHeader>{mission}</CardHeader>
        <CardContent><img src={location} alt = "james webb " className="w-full" /></CardContent>
        <CardFooter>{description}</CardFooter>
    </Card>
  )
}

export default ImageCard