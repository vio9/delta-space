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
        <div className=" bg-slate-200 rounded-md p-3 flex">
          <p className="pr-2 text-slate-700 md:text-1xl lg:text-1xl ">More photos</p>
          <Link to="/hubble">
            <CircleArrowRight size={25} className="text-slate-700 ml-2" />
          </Link>
          </div>
        </div>
      </div>
      <Cardsgrid mode="hubble" objects={hubbles} />
    </article>
  )
}

export default HubbleLauncher