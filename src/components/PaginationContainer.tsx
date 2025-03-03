import { buildPrevAndNextUrls, buildURL } from "@/utils/pagination";
import { HubbleImagesResponseWithParams, NewsResponseWithParams } from "@/utils/types"
import {ReactNode} from "react";
import { useLoaderData, useLocation } from "react-router-dom"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { objectsPerPage } from "@/utils/constants";

function PaginationContainer() {
    // on récup les données du useloaderData qui sont de type hubbleresp ou newsresp et on les destructure en prenant response qui est présent dans les deux types
    const {response } = useLoaderData() as HubbleImagesResponseWithParams | NewsResponseWithParams;
   // on destructure le contenu de l'obj location pour récup pathname et search
    const { pathname, search } = useLocation();
    // on crée une instance urlsearch params qui contient notre search
    const searchParams = new URLSearchParams(search);
    // on récup la page qui est inclu dans searchParams
    const pageFromUrl : string | null = searchParams.get("page");
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
        lastPage = 0;
    } else if(objectsInTotal % objectsPerPage === 0){
        lastPage = objectsInTotal / objectsPerPage;
    } else {
        lastPage = Math.floor(objectsInTotal / objectsPerPage) + 1
    }
    
    const {prevUrl, nextUrl} = buildPrevAndNextUrls({page : activePage, pathname, search, lastPage});


    const buildButton = ({page, isActive}: {page:number, isActive : boolean}):ReactNode => {
      const url = buildURL({page, pathname, search})
        return (
        <PaginationItem key={page}>
            <PaginationLink to={url} isActive={isActive} size={"default"}>
            {page}
            </PaginationLink>
        </PaginationItem>
        )
    }

    const buildDots = (key:string): ReactNode => {
        return (
            <PaginationItem>
                <PaginationEllipsis key={key}></PaginationEllipsis>
             </PaginationItem>
        )
    }

    const buildContent = (): ReactNode[] => {
       const pages : ReactNode[] = [];
        // first page
        pages.push(buildButton({ page : firstPage, isActive : activePage === firstPage }));
        //ellips
        if(activePage > 2){
            pages.push(buildDots("dots-1"));
        }
        // active page
        if(activePage !== firstPage && activePage !== lastPage){
            pages.push(buildButton({ page:activePage, isActive: activePage === activePage }));
        } 
        //ellips
        if(activePage < lastPage -1){
            pages.push(buildDots("dots+1"));
        }
        //last page
        pages.push(buildButton({ page:lastPage, isActive: activePage === lastPage }));
        return pages;
    }

    if(lastPage < 2){
        return null;
    }
    
    return (
    <Pagination>
        <PaginationContent>
            <PaginationItem>
                <PaginationPrevious to={prevUrl} size={"default"}></PaginationPrevious>
            </PaginationItem>
            {buildContent()}
            <PaginationItem>
                <PaginationNext to={nextUrl} size={"default"}></PaginationNext>
            </PaginationItem>
        </PaginationContent>
    </Pagination>
  )
}

export default PaginationContainer