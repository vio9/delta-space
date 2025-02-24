import { News } from "@/utils/types"
import NewsBubble from "./NewsBubble"

function NewsLauncherBubbledCards({news} : {news : News[]}) {
  return (
    <div className="grid auto rows-fr grid-cols1 md:grid-cols-2 lg:grid-cols-3">
       <NewsBubble news={news[3]} />
       <NewsBubble news={news[4]} />
       <NewsBubble news={news[5]} />
    </div>
  )
}

export default NewsLauncherBubbledCards