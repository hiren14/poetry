import { mypoems } from '../../../../lib/mypoems';
function poem1() {
return(  


<div className="container">

  <div className="card">
 
{/* <div className="w-full h-full  text-black dark:text-white"> */}
                
{/* <div className="px-6 py-4"> */}
  {mypoems.filter(poems=>poems.id=='6').map(poems=>{ 
            
            
            return (

                <div className=" justify-center   dark:text-gray-100">
			  
      <p style={{whiteSpace: 'pre-line'}} className="text-center text-xl font-semibold sm:text-2xl">{poems.Title}  </p>
			<br />
      <p style={{whiteSpace: 'pre-line'}} className="text-center text-xl font-semibold sm:text-2xl">{poems.Book}  </p><hr  className="bg-[#8F00FF]" />
			<br />
      <p style={{whiteSpace: 'pre-line'}} className=" sm:text-xl">{poems.Content}</p><br /><br />
			<p className=" dark:text-gray-400">{poems.Author}</p>
     
           
		</div>
	
	
          
          )})}    

<br />
          <br />
</div>
    </div>
  
    
)
}
export default poem1;