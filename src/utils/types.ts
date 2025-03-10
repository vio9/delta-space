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

export type RelatedNewsProps = {
    news: News[];
    isLoading : boolean;
}

export type FiltersParams = {
    term? : string;
    page? : string;
}


// super type formé à partir de newsresponse auquel on ajoute les params
export type NewsResponseWithParams = { response : NewsResponse, params : FiltersParams}

export type HubbleImage = {
    photo_id: number;
    photo_title: string;
    photo_description : string;
    photo_url_m:{
        thumbnail: boolean;
        filename: string;
        format: string;
        width: number;
        mimetype: string;
        id: string;
        last_synchronized: string;
        height: number;
        url: string;
    };
    photo_date_taken: string;
    photo_height: number;
    photo_width: number;
    photo_license : string;
    album_id: number;
    album_name_tags: string;
    url: string;
    tags: null;

};

export type HubbleImagesResponse = {
    total_count : number;
    results : HubbleImage[];
}

// supertype pour add les params
export type HubbleImagesResponseWithParams = {
    response: HubbleImagesResponse, 
    params: FiltersParams
}

export type ApodType = {
        copyright: string;
        date: string;
        explanation: string;
        hdurl: string;
        media_type: string;
        service_version: string;
        title: string;
        url: string;
}

export type WebbImage = {
    id: string;
    observation_id : string;
    program: number;
    details : {
        mission: string;
        instruments: [
            {
                instrument: string;
            }, 
            {
                instrument: string;
            }, 
            {
                instrument: string;
            }, 
            {
                instrument: string;
            }, 
            {
                instrument: string;
            }, 
        ];
        suffix: string;
        description: string;
    };
    file_type: string;
    thumbnail: string;
    location:string;
}

export type WebbImagesResponse = {
        statusCode: number;
        body: WebbImage[];
        error: string;
}       

export type WebbNewsAndImagery = {
    news: News[] | null;
    imagery: WebbImage[] | null;
}

export type RoversNasaImage = {
        id: number;
        sol: number;
        camera: {
  
              id: number;
              name: string;
              rover_id: number;
              full_name: string;
  
        },
        img_src: string;
        earth_date: string;
        rover: {
  
              id: number;
              name: string;
              landing_date: string;
              launch_date: string;
              status: string;
  
        }
    }

    export type LandingPageNewsApodHubbles = {
        news : News[] | null;
        apod : ApodType | null;
        hubbles : HubbleImage[] | null;
      }