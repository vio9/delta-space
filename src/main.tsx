import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {HomeLayout, Landing, Nasa, News, Webb, Apod, Hubble} from "./pages"
import { newsPageLoader } from './pages/News'
import { ErrorElement } from './components'
import { hubblePageLoader } from './pages/Hubble'

const router = createBrowserRouter([
  {   path:'/', 
      element: <HomeLayout/>, 
      children:[
        {index: true, element: <Landing/>}, // page home
        {path:"news", element:<News />, loader: newsPageLoader, errorElement:<ErrorElement/> }, // on passe par le loader av le comp => succès => comp
        {path:"webb", element:<Webb />},
        {path:"nasa", element:<Nasa />},
        {path:"apod", element:<Apod />},
        {path:"hubble", element:<Hubble/>, loader: hubblePageLoader, errorElement:<ErrorElement/>},
  ]}
])
createRoot(document.getElementById('root')!).render(
  
   <RouterProvider router={router}/>
  
)
