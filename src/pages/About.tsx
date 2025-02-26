import { Title } from "@/components"
import pictureSpace from "../assets/images/pexels-felixmittermeier.jpg"

function About() {
  return (
    <div className="bg-slate-200 ">
    <section className="section m-2 pt-5 lg:m-auto md:m-2 sm:m-2 p-3">
      <Title text="Welcome to deltaSpace"></Title>
        <p className="m-1">Welcome to this website dedicated to space news. Find information from NASA, Curiosity, the European Space Agency, and more.</p>
        <p className="m-1">The data comes from various public sources that you can find at the bottom of the page.</p>
        <p className="m-1 mb-2 pb-3">Find me on social media : 
          <a href="https://www.linkedin.com/in/violaine-ernotte/" className="font-bold hover:text-cyan-800" target="_blank" rel="noopener noreferrer"> Linkedin </a>
          and <a href="https://github.com/vio9" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-cyan-800">Github</a></p>
         <div className="m-1 flex justify-center">
          <img src={pictureSpace} alt="sky photo" className="w-[70%]"/>
         </div>
    </section>
    </div>
 
  )
}

export default About