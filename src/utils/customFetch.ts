import axios from "axios"

const snapiAPI = "https://api.spaceflightnewsapi.net/v4/articles/";
const datastroAPI = "https://www.datastro.eu/api/explore/v2.1/catalog/datasets/nasahubble/records";
const nasaAPI = "https://api.nasa.gov/planetary/apod";
const webbAPI = "https://api.jwstapi.com/all/type/jpg";
const roverNasaAPI = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos";

export const snapiCustomFetch = axios.create({
    baseURL: snapiAPI,
});

export const datastroCustomFetch = axios.create({
    baseURL: datastroAPI,
});

export const nasaCustomFetch = axios.create({
    baseURL: nasaAPI,
    params: { api_key: import.meta.env.VITE_API_KEY_NASA },
});

export const webbCustomFetch = axios.create({
    baseURL: webbAPI,
    headers: { "X-API-KEY":import.meta.env.VITE_API_KEY_JWST },
});

export const roverNasaCustomFetch = axios.create({
    baseURL: roverNasaAPI,
    params: { 
        // earth_date: "2016-1-3",
        // page: 1,
        // sol:1000,
        api_key: import.meta.env.VITE_API_KEY_NASA,
     
    },
});

