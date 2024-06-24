import React from 'react';

const LayoutHome =({children}) =>{
    return(
        <>
        <div className="   fixed top-0 z-30 w-full flex justify-between items-center md:px-10 px-5  mt-0 py-2">
			<a href="/" className="mb-3 font-bold">
			 <img  src="/logo.svg" alt="Lemoll Qyu"/>
			</a>
			<div className="gap-2 md:gap-4 items-center flex">
				<a className="font-[FontHome] text-l md:text-lg" href="/about">About</a>
				<a className="font-[FontHome] text-l md:text-lg" href="/work">Work</a>
				<a className="font-[FontHome] text-l md:text-lg" href="/profile">Profile</a>
			</div>
        </div>
        <main className="" >{children}</main>
        </>
    )
}

export default LayoutHome;