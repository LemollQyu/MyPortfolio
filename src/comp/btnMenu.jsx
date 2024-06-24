import '../App.css'
import {useState} from "react"
import menuSvg from "/menu-bar.svg";



const Menu = () => {
	const [tinggi, setTinggi] = useState("h-10")
	const [lebar, setLebar] = useState("w-10")
	
	const [display, setDisplay ] = useState("hidden")
	
	const [border, setBorder] = useState("border-0")
	
	const [displaySpan, setDisplaySpan ] = useState("inline-block")
	
	function handleClick () {
		if(tinggi == "h-10"){
			setTinggi("h-40")
		} else {
			setTinggi("h-10")
		}
		
		if(display == "hidden") {
			setDisplay("block")
			setBorder("border")
		} else {
			setDisplay("hidden")
			setBorder("border-0")
		}
		
		if( lebar == "w-10") {
			setLebar("w-40")
		} else {
			setLebar("w-10")
		}
		
		if( displaySpan == "hidden" ){
			setDisplaySpan("inline-block")
			
			
		} else {
			setDisplaySpan("hidden")
			
			
		}
		
	
		
		
		
	}
	
	const cssMenu = `fixed bottom-2 left-1/2 translate-x-[-50%] rounded-md transition-all border-2 ${lebar}  ${tinggi}  transition-[height] duration-700 bg-black py-2 px-2`
	const cssListMenu = `${display} flex flex-col justify-center gap-3`
	
	const cssSpanTop = `bg-white w-full h-[2px] inline-block translate-y-1.5 rotate-45`
	const cssSpanCenter = `transition-all duration-1000 bg-white w-full h-[2px] ${displaySpan}`
	const cssSpanBottom = `bg-white w-full h-[2px] inline-block -translate-y-1.5 -rotate-45`
	
	return (
	<>
		
		
		
		<div className={cssMenu}>
			<div className={cssListMenu}>
				<a className="text-white font-[FontHome]" href="/">Home</a>
				<a className="text-white font-[FontHome]" href="/papper">Papper</a>
				<a className="text-white font-[FontHome]" href="/potograph">Potograph</a>
			</div>
		</div>
		<button onClick={handleClick} className="fixed w-[28px] z-40 h-[28px] translate-x-[-50%] bottom-[14px] left-1/2 flex flex-col justify-around">
			<span className={cssSpanTop}></span>
			<span className={cssSpanCenter}></span>
			<span className={cssSpanBottom}></span>
		</button>
    </>
  )
}

export default Menu;
