import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="align-element min-h-[15vh] flex flex-col justify-center items-center">
        <p className="my-2">-2025-</p>
        <p className="text-2-xl my-4 text-center">deltaSpace, by Vio</p>
        <p className="underline">Resources:</p>
        <p className="text-center">
          <Link to="https://www.nasa.gov/" target="_blank"
          > Nasa </Link>| 
          <Link to="https://api.nasa.gov/" target="_blank"> Nasa API </Link>| 
          <Link to="https://www.youtube.com/@NASA" target="_blank"> Nasa youtube </Link>|   
        </p>
        <p>
          <Link to="https://webbtelescope.org/home" target="_blank"> JWST </Link>|   
          <Link to="https://jwstapi.com/" target="_blank"> JWST API </Link>
        </p>
        <p>
          <Link to="https://www.esa.int/" target="_blank">ESA</Link>
        </p>
        <p>
          <Link to="https://www.datastro.eu/api/explore/v2.1/console?flg=fr-fr">Datastro API</Link>
        </p>
        <p className="mb-8">
          <Link to="https://www.spaceflightnewsapi.net/" target="_blank">SNAPI API</Link>
        </p>
      </div>
      </footer>
  )
}
export default Footer
