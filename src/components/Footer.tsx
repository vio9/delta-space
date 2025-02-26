const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="align-element min-h-[15vh] flex flex-col justify-center items-center">
        <p className="my-2">-2025-</p>
        <p className="text-2-xl my-4 text-center">deltaSpace, <a className="hover:underline hover:font-bold" href="https://github.com/vio9" rel="noopener noreferrer">by Vio</a></p>
        <p className="underline">Resources:</p>
        <p className="text-center">
          <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer"
          > Nasa </a>| 
          <a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer"> Nasa API </a>| 
          <a href="https://www.youtube.com/@NASA" target="_blank" rel="noopener noreferrer"> Nasa youtube </a>|   
        </p>
        <p>
          <a href="https://webbtelescope.org/home" target="_blank" rel="noopener noreferrer"> JWST </a>|   
          <a href="https://jwstapi.com/" target="_blank" rel="noopener noreferrer"> JWST API </a>
        </p>
        <p>
          <a href="https://www.esa.int/" target="_blank" rel="noopener noreferrer">ESA</a>
        </p>
        <p>
          <a href="https://www.datastro.eu/api/explore/v2.1/console?flg=fr-fr" target="_blank" rel="noopener noreferrer">Datastro API</a>
        </p>
        <p className="mb-8">
          <a href="https://www.spaceflightnewsapi.net/" target="_blank" rel="noopener noreferrer">SNAPI API</a>
        </p>
      </div>
      </footer>
  )
}
export default Footer
