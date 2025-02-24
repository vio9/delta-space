import { LandingPageNewsApodHubbles } from "@/utils/types"
import { CircleArrowRight } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom"

function ApodLauncher() {
  const { apod }= useLoaderData() as LandingPageNewsApodHubbles
  
  if(!apod){
    return <p>Problem while fetching datas </p>
  }

  const { copyright, date, media_type, title, url } = apod;

  return (
    <article className="w-full py-12 bg-slate-800">
      <div className="align-element h-full grid gap-4 lg:grid-cols-2">
        <div className="text-white">
          <p className="capitalize text-xl">Today</p>
          <p className="capitalize my-4 text-4xl font-bold">
            NASA'S picture of the day
          </p>
          <p className="capitalize text-2xl">{title}</p>
          <p className="capitalize mt-4">{copyright}</p>
          <p className="capitalize">{date}</p>
          <p className="capitalize mt-8 flex gap-2">Browse archives
            <Link to="apod">
            <CircleArrowRight color="#152ebd" className="transition-all hover:scale-125"/>
            </Link>
          </p>
        </div>
      {media_type === "video" ? 
      (<iframe className="min-h=[400px]" height={"100%"} width={"100%"} src={url}></iframe>) 
      :
      (<img src={url} alt="apod-img"></img>) 
      }
      </div>
    </article>
  )
}

export default ApodLauncher