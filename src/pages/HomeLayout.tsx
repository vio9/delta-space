import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer, Navbar } from "@/components";
import { useEffect } from "react";

const HomeLayout = () => {
 const location = useLocation();
 
// scroll to top when change page 
 useEffect(() => {
    window.scrollTo(0, 0);
 }, [location])

    return <>
        <Header/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
}

export default HomeLayout