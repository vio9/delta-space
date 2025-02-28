import { NavLink } from "react-router-dom"
import {links, Link} from '@/utils/links';

const LinksDesktop = () => {
  return (
   <div className=" hidden text-white w-full lg:flex gap-x-[5rem] justify-center items-center">
    {links.map((link, index) => {
        const {ref, label} = link as Link;
        return <NavLink key={index} to={ref} className={({isActive}) => 
            `capitalize tracking-wide ${
                isActive ? "underline font-bold" : ""
                }`
            }
            >
            {label}</NavLink>
    })}
   </div>
  )
}

export default LinksDesktop