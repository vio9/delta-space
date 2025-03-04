import { Link } from "react-router-dom"

function CuriosityLauncher() {
  return (
    <article className="w-full h-[50vh] curiosity pt-24">
        <div className="align-element text-white flex flex-col lg:p-2">
            <p className="font-bold text-4xl capitalize lg:max-w-[40%] lg:place-self-start md:max-w-[60%]"> Last pictures of Curiosity on Mars</p>
            <button type="button" className="slider-button mt-4 place-self-start text-center lg:text-left">
                <Link to="/nasa">Explore</Link>
            </button>
        </div>
    </article>
  )
}

export default CuriosityLauncher