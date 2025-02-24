import { News } from "@/utils/types"
import { Link } from "react-router-dom";

function NewsBubble({news} : {news:News}) {
 const {image_url, title, news_site, url} = news;
    return (
    <Link to={url}>
        <div className="grid grid-cols-3 p-1 h-full mt-5">
            <div className="col-span-1 justify-self-center">
                <img src={image_url} alt="news image" className="h-[100px] w-[100px] rounded-full object-cover p-0"/>
            </div>
            <div className="col-span-2 justify-self-start self-center">
                <p className="leading-4 font-bold text-sm">{title}</p>
                <p className="mt-2">{news_site}</p>
            </div>
        </div>
    </Link>    

  )
}

export default NewsBubble