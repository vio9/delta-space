import { LandingPageNewsApodHubbles } from "@/utils/types"
import { Link, useLoaderData } from "react-router-dom"
import Title from "./Title";
import { CircleArrowRight} from "lucide-react";
import Cardsgrid from "./Cardsgrid";


function HubbleLauncher() {
  const {hubbles} = useLoaderData() as LandingPageNewsApodHubbles;
 
  if(!hubbles){
    return <div>Problem while fetching data</div>;
  }

  return (
    <article className="align-element w-full my-6">
      <div className="flex justify-between items-center">
        <Title text="Hubble photos" />
        <div className="flex">
          <p className="pr-2">More photos</p>
          <Link to="/hubble">
            <CircleArrowRight color="#152ebd" className="transition-all hover:scale-125" />
          </Link>
        </div>
      </div>
      <Cardsgrid mode="hubble" objects={hubbles} />
    </article>
  )
}

export default HubbleLauncher