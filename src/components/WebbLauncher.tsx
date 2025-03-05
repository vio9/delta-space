import { Link } from "react-router-dom"


function WebbLauncher() {
  return (
   <article className="w-full h-[50vh] webb pt-24">
    <div className="align-element text-white flex flex-col">
      <p className="font-bold text-4xl capitalize lg:place-self-end lg:max-w-[40%] md:max-w-[64%] md:place-self-end">
        The most recent photos taken by the James Webb Telescope</p>
        <Link to="/webb" className=" text-left md:text-right lg:text-right">
          <button type="button" className="slider-button mt-4 text-left place-self-start lg:text-right lg:place-self-end md:text-right md:place-self-end ">
           Explore
          </button>
      </Link>
    </div>
   </article>
  )
}

export default WebbLauncher