import { Link } from "react-router-dom"


function WebbLauncher() {
  return (
   <article className="w-full h-[50vh] webb pt-24">
    <div className="align-element text-white flex flex-col">
      <p className="font-bold text-4xl capitalize lg:place-self-end lg:max-w-[40%] md:max-w-[64%] md:place-self-end">
        The most recent photos taken by the James Webb Telescope</p>
      <button type="button" className="slider-button mt-4 text-left place-self-start lg:text-right md:text-right md:place-self-end lg:place-self-end">
        <Link to="/webb">Explore</Link>
      </button>
    </div>
   </article>
  )
}

export default WebbLauncher