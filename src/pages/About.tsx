import { Title } from "@/components"
import pictureSpace from "../assets/images/pexels-felixmittermeier.jpg"
import { Code, MessageCircle, Sparkles } from "lucide-react"

function About() {
  return (
    <div className="bg-slate-200 ">
    <section className="section m-2 pt-5 w-full lg:w-[70rem] lg:m-auto p-2">
      <Title text="Welcome to deltaSpace"></Title>
        <p className="m-1"><Sparkles size={25} className="inline bg-white p-1 rounded-md shadow-md" /> Welcome to this website dedicated to space news. Find information from NASA,
         Curiosity the European Space Agency, and more. The data comes from various public sources that you can find at the bottom of the page.</p>
        <div className="mt-3">
        <p className="m-1"><MessageCircle size={25} className="inline bg-white p-1 rounded-md shadow-md"/> Find me on social media : 
          <a href="https://www.linkedin.com/in/violaine-ernotte/" className="font-bold hover:text-cyan-800" target="_blank" rel="noopener noreferrer"> Linkedin </a>
          and <a href="https://github.com/vio9" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-cyan-800">Github</a></p>
          </div>
          <div className="mt-3">
        <p className="m-1"> <Code size={25} className="inline bg-white p-1 rounded-md shadow-md" strokeWidth={1.75} /> You can find the code of the project here : 
          <a href="https://github.com/vio9/delta-space" className="font-bold hover:text-cyan-800" target="_blank" rel="noopener noreferrer"> Github repository</a></p>
          </div>
         <div className="m-1 mt-10 flex justify-center ">
          <img src={pictureSpace} alt="sky photo" className="w-[70%]"/>
         </div>
    </section>
    </div>
 
  )
}

export default About