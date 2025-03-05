import { CircleArrowRight } from "lucide-react"
import Title from "./Title"
import { Link } from "react-router-dom"

function NewsLauncherHeader() {
  return (
    <div className="flex justify-between items-center">
        <Title text="Recent news"/>
        <div className=" bg-slate-200 rounded-md p-3 flex">
        <p className="pr-2 text-slate-700 flex md:text-1xl lg:text-1xl">More news</p>
        <Link to="news">
        <CircleArrowRight size={25} className="text-slate-700 ml-2"/>
        </Link>
        </div>
    </div>
  )
}

export default NewsLauncherHeader