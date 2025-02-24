import { Link } from "react-router-dom"

function CuriosityLauncher() {
  return (
    <article className="w-full h-[40vh] curiosity">
        <div className="align-element text-white p-2 mt-20 ">
            <p className="font-bold text-4xl capitalize"> Last pictures of Curiosity on Mars</p>
            <button type="button" className="mt-4 slider-button">
                <Link to="/nasa">Explore</Link>
            </button>
        </div>
    </article>
  )
}

export default CuriosityLauncher