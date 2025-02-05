export type News = {
    "id" : number,
    "title" : string,
    "url" : string,
    "image_url" : string,
    "news_site" : string,
    "summary" : string,
    "published_at" : string,
    "updated_at" : string,
    "featured" : boolean,
    "launches" : string[],
    "events": string[], 
}

export type NewsResponse = {
    count: number;
    next: string;
    previous:string;
    results : News[];
}

export type FiltersParams = {
    term? : string;
}

// super type formé à partir de newsresponse auquel on ajoute les params
export type NewsResponseWithParams = { response : NewsResponse, params : FiltersParams}
