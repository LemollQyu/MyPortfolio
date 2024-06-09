import React from 'react';

const LayoutHome =({children}) =>{
    return(
        <>
        <div className="fixed top-0 z-10 w-full flex justify-between items-center md:px-10 px-5 lg:mt-6 mt-0 py-2">
			<a href="/" className="mb-3 font-bold">
			 <img  src="/logo.svg" alt="Lemoll Qyu"/>
			</a>
			<div className="gap-3 flex">
				<a className="font-[FontHome] text-lg" href="/about">About</a>
				<a className="font-[FontHome] text-lg" href="/news">Work</a>
			</div>
        </div>
        <main className="h-screen" >{children}</main>
        </>
    )
}

export default LayoutHome;