import { RoversNasaImage } from "@/utils/types"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"

function RoverCard({image}: {image: RoversNasaImage}) {
    const {img_src, id, earth_date} = image
  return (
    <Card className="bg-gradient-to-l from-gray-100 to-white">
    <CardHeader>photo number : {id}</CardHeader>
    <CardContent><img src={img_src} alt = "rover curiosity" className="w-full" /></CardContent>
    <CardFooter>photo date : {earth_date}</CardFooter>
</Card>
  )
}

export default RoverCard