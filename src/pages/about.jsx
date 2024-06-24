import '../App.css'
import LayoutHome from "../layout/layout-home.jsx"
import {useState} from "react"
import NavAbout from "./navAbout/NavAbout.jsx"

const About = ({children}) => {
	
	const [ada, setAda] = useState("hidden")
	
	function handle() {
		if( ada == "hidden" ) {
			setAda("block")
			
		} else {
			setAda("hidden")
		}
		
	}
	
  return (
    <>
	<LayoutHome>
		<div className="w-full p-5 mt-16 relative z-20">
			<div className="w-full px-10 md:px-20 lg:px-80 mt-20  ">
			<p className="text-xl font-[FontPhotograph] md:text-center">Hello, this is Yi. I am a multidisciplinary designer with a strong focus on brand identity, design system, 3D design, and prototype. My work interweaves conceptual and storytelling processes. Currently at BUCK, and open to collaboration.</p>
			</div>
			<div onClick={handle} className="mx-auto border flex gap-[2px] justify-center items-center w-7 h-5 rounded-lg mt-10">
				<span className="inline-block w-1 h-1 rounded-full bg-gray-900"></span>
				<span className="inline-block w-1 h-1 rounded-full bg-gray-900"></span>
				<span className="inline-block w-1 h-1 rounded-full bg-gray-900"></span>
			</div>
			
		</div>
		
		<div className={`${ada}`}>
		<NavAbout />
		</div>

	</LayoutHome>
     
    </>
  )
}

export default About
