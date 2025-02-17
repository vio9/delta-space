import { RoversNasaImage } from "@/utils/types"

function RoverCard({image}: {image: RoversNasaImage}) {
    const {img_src, id} = image
  return (
    <>
    <div>RoverCard</div>
    <p>{id}</p>
    <img src={img_src}/>
    </>
  )
}

export default RoverCard