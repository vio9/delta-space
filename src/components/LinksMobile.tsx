import { Link, links } from "@/utils/links";
import { NavLink } from "react-router-dom";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem , DropdownMenuContent } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { AlignLeft } from "lucide-react";

const LinksMobile = () => {
  return (
   <DropdownMenu>
        <DropdownMenuTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon">
            <AlignLeft />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="lg:hidden" align="start"
        sideOffset={10}
        >
        {links.map((link) => {
        const {ref, label} = link as Link;
        return (
        <DropdownMenuItem key={label}>  
            <NavLink to={ref} className={({isActive}) => 
                `capitalize tracking-wide font-light ${
                    isActive ? "text-primary" : ""
                    }`
                }
                >
                {label}
            </NavLink>
            </DropdownMenuItem>)
    })}
        </DropdownMenuContent>
   </DropdownMenu>
  )
}

export default LinksMobile