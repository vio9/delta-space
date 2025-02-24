import { Link } from "react-router-dom"


function WebbLauncher() {
  return (
   <article className="w-full  h-[40vh] webb pt-24">
    <div className="align-element text-white p-2 flex flex-col">
      <p className="font-bold text-4xl capitalize max-w-[40%] place-self-end">
        The most recent photos taken by the James Webb Telescope</p>
      <button type="button" className="slider-button mt-4 place-self-end text-right">
        <Link to="/webb">Explore</Link>
      </button>
    </div>
   </article>
  )
}

export default WebbLauncher