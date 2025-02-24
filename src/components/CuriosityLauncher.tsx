import { Link } from "react-router-dom"

function CuriosityLauncher() {
  return (
    <article className="w-full h-[50vh] curiosity pt-24">
        <div className="align-element text-white p-2 flex flex-col">
            <p className="font-bold text-4xl capitalize max-w-[40%] place-self-start"> Last pictures of Curiosity on Mars</p>
            <button type="button" className="slider-button mt-4 place-self-start text-left">
                <Link to="/nasa">Explore</Link>
            </button>
        </div>
    </article>
  )
}

export default CuriosityLauncher