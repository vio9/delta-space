import { RoversNasaImage } from "@/utils/types"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Video } from "lucide-react"

function RoverCard({image}: {image: RoversNasaImage}) {
    const {img_src, camera} = image
  return (
    <Card className="rounded-none">
    <CardHeader className="flex-row"><Video size={26} className="pr-1"/> Camera name : {camera.name}</CardHeader>
    <CardContent><img src={img_src} alt = "rover curiosity" className="w-full" /></CardContent>
    <CardFooter></CardFooter>
</Card>
  )
}

export default RoverCard

