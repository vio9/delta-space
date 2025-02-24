import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {HomeLayout, Landing, Nasa, News, Webb, Apod, Hubble, SingleHubble} from "./pages"
import { newsPageLoader } from './pages/News'
import { ErrorElement } from './components'
import { hubblePageLoader } from './pages/Hubble'
import { apodPageLoader } from './pages/Apod'
import { webbpageLoader } from './pages/Webb'
import { nasaRoverPageLoader } from './pages/Nasa'
import { LandingPageLoader } from './pages/Landing'
import { singleHubblePageLoader } from './pages/SingleHubble'

const router = createBrowserRouter([
  {   path:'/', 
      element: <HomeLayout/>, 
      children:[
        {index: true, element: <Landing/>, loader: LandingPageLoader,errorElement:<ErrorElement/>}, // page home
        {path:"news", element:<News />, loader: newsPageLoader, errorElement:<ErrorElement/> }, // on passe par le loader av le comp => succès => comp
        {path:"webb", element:<Webb />, loader: webbpageLoader, errorElement: <ErrorElement/> },
        {path:"nasa", element:<Nasa />, loader: nasaRoverPageLoader, errorElement: <ErrorElement/>},
        {path:"apod", element:<Apod />, loader: apodPageLoader, errorElement:<ErrorElement/>},
        {path:"hubble", element:<Hubble/>, loader: hubblePageLoader, errorElement:<ErrorElement/>},
        {path:"hubble/:id", element:<SingleHubble/>, loader: singleHubblePageLoader, errorElement:<ErrorElement/>},
  ]}
])
createRoot(document.getElementById('root')!).render(
  
   <RouterProvider router={router}/>
  
)
