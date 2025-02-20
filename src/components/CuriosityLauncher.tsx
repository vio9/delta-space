import { Link } from "react-router-dom"

function CuriosityLauncher() {
  return (
    <article className="test w-full h-[40vh] curiosity">
        <div className="align-element text-white p-2 mt-20">
            <p className="font-bold text-4xl capitalize"> More pictures of Curiosity on Mars</p>
            <button type="button" className="mt-4">
                <Link to="/nasa">Explore</Link>
            </button>
        </div>
    </article>
  )
}

export default CuriosityLauncher