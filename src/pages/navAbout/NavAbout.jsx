import {useState, useRef} from "react"

const NavAbout = () => {
	
	const ref = useRef(null)

	const [css, setCss] = useState("")
	const [selected, setSelected] = useState(null)
	
	function handleToggle(index){
		setSelected(index)
		console.log(index)
	}
	
	const portfolio = "left-0 w-[80px] h-full"
	const skills =  "left-[80px] w-[60px] h-full"
	const social = "left-[140px] w-[90px] h-full"
	const experience = "left-[230px] w-[98px] h-full"
	
	const activeTextCss = `hover:underline focus:underline focus:underline-offset-4  font-[FontPhotograph] rounded-md px-2 py-1`
	
	function clickEffect (e){
		if(e.target.id == "1"){
			setCss(portfolio)
			
			
		} else if ( e.target.id == "2" ){
			setCss(skills)
			
		} else if ( e.target.id == "3" ){
			setCss(social)

		} else if ( e.target.id == "4" ){
			setCss(experience)
			
		}
		
		
	}
	

	

	

	const activeCss = `rounded-md transition-all duration-1000 bg-black  absolute z-[-10] ${css}`
	
	
	
	
	return (
		<>
		
	
			<div onClick={clickEffect} className="w-[330px]  border rounded-md h-10 mx-auto flex items-center justify-around relative">
				<div className={activeCss}></div>
		
				<div id="1" onClick={() => handleToggle(0) }  className={`${activeTextCss} ${selected === 0 ? 'active text-white' : ''}`} >
					Portfolio
				</div>
				<div  id="2" onClick={() => handleToggle(1)} className={`${activeTextCss} ${selected === 1 ? 'active text-white' : ''}`} >
					Skills
				</div>
				<div  id="3" onClick={() => handleToggle(2)} className={`${activeTextCss} ${selected === 2 ? 'active text-white' : ''}`} >Social Me</div>
				<div  id="4" onClick={() => handleToggle(3)} className={`${activeTextCss} ${selected === 3 ? 'active text-white' : ''}`} >Experience</div>
				
			
			</div>
			
			<div className={`w-full border ${selected === 0 ? "active block" : "hidden" }`} > satu </div>
			<div className={`w-full border ${selected === 1 ? "active block" : "hidden" }`} > dua </div>
			<div className={`w-full border ${selected === 2 ? "active block" : "hidden" }`} > tiga </div>
			<div className={`w-full border ${selected === 3 ? "active block" : "hidden" }`} > Empat	</div>
			
			
			
		</>
	)
}

export default NavAbout;