import { News } from "@/utils/types"
import { CircleArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const NewsPageCard = ({news}: {news:News}) => {
    const {url, image_url, title, published_at, news_site, summary} = news;
  return (
    <div className="">
        <Link to={url} target="_blank">
            <img className="max-w-80" src={image_url} alt="main img" />
        </Link>
        <div className="">
            <p>{title}</p>
            <p>{published_at.split("T")[0]}</p>
            <p>
                <span>{news_site}</span>
                <span>|</span>
                <span>Read from source</span>
                <Link to={url} target="_blank">
                    <CircleArrowRight
                        color="var(--clr-violet)"
                        className="hover:scale-125 transition-all"
                    />
                </Link>
            </p>
            <p>{summary}</p>
        </div>
        <div className=""></div>
    </div>
  )
}

export default NewsPageCard