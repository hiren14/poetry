// import { groq } from "next-sanity";
// import Image from "next/image";
// import { client } from "../../../lib/sanity.client";
// import urlFor from "../../../lib/urlFor";
// import { PortableText } from "@portabletext/react";
// import { RichTextComponents } from "../../../components/RichTextComponents";
// import TeamCard from '../../../components/teams/TeamCard';
// import teamstyle from '../../../components/teams/Team.module.css';
// import Team  from '../../../components/Team';
"use client";
import React, { useEffect, useState } from "react";

import { poems } from '../../../lib/db';

export default  function About() {
  const [num, setNum] = useState(1);
 
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };
 
    const handleClick = () => {
        setNum(randomNumberInRange(1, 4754));
    };
let num1 = String(num); 
    
  return (
    <article className="px-10 pb-28  text-black dark:text-white">
      <a href="/" className="relative inline-block text-lg group mb-10 mt-10">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white ">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50 dark:bg-white"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#222] dark:bg-[#8F00FF] group-hover:-rotate-180 ease"></span>
          <span className="relative">
            <svg
              aria-hidden="true"
              className="w-5 h-5 mr-2 inline-flex"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
            Go back
          </span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#222]  dark:bg-[#8F00FF] rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </a> 

      <div className="max-w-full rounded overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">

 
<div className="w-full h-full  text-black dark:text-white">
                
<div className="max-w-full rounded overflow-hidden shadow-lg">
{/* <div className="px-6 py-4"> */}
  {poems.filter(poems=>poems.id==num1).map(poems=>{ 
            
            
            return (

                <div className="flex flex-col justify-center  p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
			
      <h2 style={{whiteSpace: 'pre-line'}} className="text-center text-xl font-semibold sm:text-2xl">{poems.Title}</h2><br /><hr />
			
      <h2 style={{whiteSpace: 'pre-line'}} className="pt-10 pb-5 text-xl font-semibold sm:text-2xl">{poems.Content}</h2><br />
			<p className="px-5 text-xs sm:text-base dark:text-gray-400">{poems.Author}</p>
    
		</div>
	
	
          
          )})}    
</div>
<h2>poem no  is: {num}</h2>
<p className="dark:bg-black bg-white text-white dark:text-black">
num1=num;</p>
            <button
            
            className=" dark:bg-[#8F00FF] hover:bg-blue-700 dark:text-black text-white font-bold py-2 px-4 rounded-full"
            onClick={handleClick}>
                Click Me Generate random poem 
            </button>
</div>
</div>
        {/* </div> */}
     </article>
   
  );
}
