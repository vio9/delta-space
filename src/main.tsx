import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {HomeLayout, Landing, Nasa, News, Webb, Apod, Hubble} from "./pages"

const router = createBrowserRouter([
  {   path:'/', 
      element: <HomeLayout/>, 
      children:[
        {index: true, element: <Landing/>}, // page home
        {path:"news", element:<News />},
        {path:"webb", element:<Webb />},
        {path:"nasa", element:<Nasa />},
        {path:"apod", element:<Apod />},
        {path:"hubble", element:<Hubble/>},
  ]}
])
createRoot(document.getElementById('root')!).render(
  
   <RouterProvider router={router}/>
  
)
