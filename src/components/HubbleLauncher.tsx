import { LandingPageNewsApodHubbles } from "@/utils/types"
import { Link, useLoaderData } from "react-router-dom"
import Title from "./Title";
import { CirclePlay } from "lucide-react";
import Cardsgrid from "./Cardsgrid";


function HubbleLauncher() {
  const {hubbles} = useLoaderData() as LandingPageNewsApodHubbles;
 
  if(!hubbles){
    return <>Problem while fetching data</>;
  }

  return (
    <article className="">
      <div>
        <Title text="Hubble photos" />
        <div className="">
          <p></p>
          <Link to="/hubble">
            <CirclePlay color="" className="" />
          </Link>
        </div>
      </div>
      <Cardsgrid mode="hubble" objects={hubbles}/>
    </article>
  )
}

export default HubbleLauncher