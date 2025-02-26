import { buildPrevAndNextUrls } from "@/utils/pagination";
import { HubbleImagesResponseWithParams, NewsResponseWithParams } from "@/utils/types"
import { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom"
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "./ui/pagination";

function PaginationContainer() {
    // on récup les données du useloaderData qui sont de type hubbleresp ou newsresp et on les destructure en prenant response qui est présent dans les deux types
    const {response } = useLoaderData() as HubbleImagesResponseWithParams | NewsResponseWithParams;
   // on destructure le contenu de l'obj location pour récup pathname et search
    const { pathname, search } = useLocation();
    // on crée une instance urlsearch params qui contient notre search
    const searchParams = new URLSearchParams(search);
    // on récup la page qui est inclu dans searchParams
    const pageFromUrl : string | null = searchParams.get("page");
    // on determine combien d'elements on a par page 
    const objectsPerPage = 24;
    // on crée la variable firstpage qui est 1
    const firstPage = 1;

   let activePage : number;
    if(!pageFromUrl){
        activePage = 1
    } else{
        activePage = parseFloat(pageFromUrl)
    }

    let objectsInTotal : number;
    if("total_count" in response){
        objectsInTotal = response.total_count;
    } else {
        objectsInTotal = response.count;
    }

    let lastPage : number ;
    if(objectsInTotal === 0){
        lastPage = 0
    } else if(objectsInTotal % objectsPerPage === 0){
        lastPage = objectsInTotal / objectsPerPage
    } else {
        lastPage = Math.floor(objectsInTotal / objectsPerPage) + 1
    }
    
    const {prevUrl, nextUrl} = buildPrevAndNextUrls({page : activePage, pathname, search, lastPage})

    useEffect(() => {
        console.log("prevURL",prevUrl)
        console.log("active page", activePage)
        console.log("nexturl", nextUrl)
    }, [activePage, nextUrl, prevUrl])

    return (
    <Pagination>
        <PaginationContent>
            <PaginationItem>
                <PaginationPrevious to={prevUrl} size={"default"}></PaginationPrevious>
            </PaginationItem>
            <PaginationItem>
                <PaginationNext to={nextUrl} size={"default"}></PaginationNext>
            </PaginationItem>
        </PaginationContent>
    </Pagination>
  )
}

export default PaginationContainer