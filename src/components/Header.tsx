import { Link } from "react-router-dom";
import spaceImg from "../assets/images/delta-white.svg";
import { ReactNode } from "react";

const Header = (): ReactNode => {
    return <header className="bg-black">
            <div className=" align-element grid grid-cols-2 md:grid-cols-3 p-2">
                <Link to="/" className="justify-self-start self-center">
                    <h1 className="alkia text-lg pt-2 tracking[0.8rem] text-white">deltaSpace</h1>
                </Link>
                <Link to="/" className="justify-self-end self-center md:justify-self-center">
                <img src={spaceImg} alt="logo-top" className="h-12 w-12 object-cover"></img></Link>
            </div>
        </header>
};
export default Header;