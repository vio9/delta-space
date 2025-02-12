const nasaWebbYoutubeVideo = "https://www.youtube-nocookie.com/embed/1C_zuHf6lP4?si=4-NvY_tGby4b-LKt"

function WebbTelescopeSummary() {
  return (
    <div>
      <iframe width="560" height="315" 
      src={nasaWebbYoutubeVideo} 
      title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media;
       gyroscope; picture-in-picture; web-share" 
       referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen></iframe>
    </div>
  )
}

export default WebbTelescopeSummary