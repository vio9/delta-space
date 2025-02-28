import { Footer, Header, Navbar } from "@/components";
import { Button } from "@/components/ui/button";
import { Link, useRouteError } from "react-router-dom";

function ErrorMain() {
    const error = useRouteError()
    console.log(error)

    return(
        <>
        <Header/>
        <Navbar/>
        <div className="bg-error h-[33rem] flex items-center  justify-center flex-col p-4 text-white" >
            <h1 className="text-5xl p-7">Error</h1>
            <p className="font-bold mb-9 p-2">An error has occurred or the page doesn't exist.</p>
            <div className="p"><Button asChild size={"lg"} variant={"default"}>
                <Link to="/">Back to home page</Link>
            </Button>
            </div>
        </div>
            <Footer/>
        </>
    )
}

export default ErrorMain