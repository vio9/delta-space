import { CirclePlay } from "lucide-react"
import Title from "./Title"
import { Link } from "react-router-dom"

function NewsLauncherHeader() {
  return (
    <div className="flex justify-between items-center">
        <Title text="Recent news"/>
        <p className="font-bold ml-auto mr-2">More news</p>
        <Link className="mt-1"to="news">
        <CirclePlay color="#152ebd" className="transition-all hover:scale-125"/>
        </Link>
    </div>
  )
}

export default NewsLauncherHeader