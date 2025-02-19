import { datastroCustomFetch, nasaCustomFetch, snapiCustomFetch } from "@/utils/customFetch";
import { LoaderFunction } from "react-router-dom";

const newsParams = {ordering : "published_at"};
const hubblesParams = { 
  order_by : "photo_date_taken desc",
  limit : 12,
}

export const newsFetch = async () => {
try {
  const response = await snapiCustomFetch.get("", {params : newsParams});
  return response.data;
} catch (error) {
  console.log(error)
}
}

export const apodFetch = async () => {
  try {
    const response = await nasaCustomFetch.get("");
    return response.data;
  } catch (error) {
    console.log(error)
  }
  }

  export const hubblesFetch = async () => {
    try {
      const response = await datastroCustomFetch.get("", {params : hubblesParams});
      return response.data;
    } catch (error) {
      console.log(error)
    }
    }

export const LandingPageLoader : LoaderFunction = async() => {
  try {
    const [news, apod, hubbles] = await Promise.all([newsFetch(), apodFetch(), hubblesFetch()]);
    console.log(news, apod, hubbles)
    return {news, apod, hubbles}
  } catch (error) {
    console.log("error:",error);
    return null;
  }
}

const Landing = () => {
  return (
    <div>Landing</div>
  )
}

export default Landing

