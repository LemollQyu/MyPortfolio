import React from 'react';

const LayoutPapper =({children}) =>{
    return(
        <>
        <div>
            <h1>Navigasi Papper</h1>
			
			<a href="/papper/1">satu</a>
			<a href="/papper/2">dua</a>
			
        </div>
        <main>{children}</main>
        </>
    )
}

export default LayoutPapper;