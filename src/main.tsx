import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {HomeLayout, Landing, Nasa, News, Webb, Apod, Hubble} from "./pages"
import { NewsPageLoader } from './pages/News'
import { ErrorElement } from './components'

const router = createBrowserRouter([
  {   path:'/', 
      element: <HomeLayout/>, 
      children:[
        {index: true, element: <Landing/>}, // page home
        {path:"news", element:<News />, loader: NewsPageLoader, errorElement:<ErrorElement/> }, // on passe par le loader av le comp => succès => comp
        {path:"webb", element:<Webb />},
        {path:"nasa", element:<Nasa />},
        {path:"apod", element:<Apod />},
        {path:"hubble", element:<Hubble/>},
  ]}
])
createRoot(document.getElementById('root')!).render(
  
   <RouterProvider router={router}/>
  
)
