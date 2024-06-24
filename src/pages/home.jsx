import '../App.css'
import LayoutHome from "../layout/layout-home.jsx"
import videoBg from "../assets/anime-home.mp4"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import circle from "/dot-circle.png"

const Home = () => {

	
  return (
    <>
	<LayoutHome>
		<div className="w-full h-full flex justify-center items-center flex-col gap-3">
			
		<div className='absolute top-1/2 -translate-y-1/2 lg:-translate-y-[70%] h-screen lg:h-3/4 w-3/4 '>
			
			<video className="w-full h-full " src={videoBg} autoPlay loop muted />
	
		</div>	 
		
		
	
      <h1 className="text-2xl w-full text-center md:text-4xl absolute left-1/2 bottom-16 translate-x-[-50%] ">
        Life is simple {' '}
        <span className="text-gray-600 font-bold">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Experience', 'Love', 'Code', 'Money' , 'Repeat!']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={300}
            deleteSpeed={100}
            delaySpeed={1000}
            
          />
        </span>
      </h1>
	
		<div className="absolute top-1/2 -translate-y-[50%] p-5 border rounded-full">
			<div className="p-5 border rounded-full">
				<img src={circle} className="border rounded-full"/>
			</div>
		</div>
		
		
		
	
   
			
			
			
			
		 </div>
	 </LayoutHome>
    </>
  )
}

export default Home
