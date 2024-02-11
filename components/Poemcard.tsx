'use client'


import React from "react";
import { mypoems } from '../lib/mypoems';
import Link from "next/link";

function Poemcard() {
  const str1 = "mypoem/"

  return(  


<div className="container">

<div className="w-full h-full shadow-xl text-black dark:text-white">
<h1 className="text-center">Poem Written by Hiren Lalani</h1> <hr /><br />
<div className="px-6 py-4">
 
{mypoems.map((item, index) => {            
            
            return (
                <div className=" justify-center   dark:text-gray-100">
<Link href={"mypoem/"+item.id}>
     <p style={{whiteSpace: 'pre-line'}} className="text-center text-xl font-semibold sm:text-2xl">{item.Title}</p><br /><hr  className="bg-[#8F00FF]" />
     </Link>
		</div>
	
	
          
          )})}    

<br />
          <br />
</div>
  
  </div>
</div>
)
}
export default Poemcard;

