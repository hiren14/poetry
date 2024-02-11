import React from "react";
import "./style_book.css";

const Book = ()=>{
return(  
<>
<div className="card">

<div className="img-container">
  <img className="phone"  src="/300_Days_of_spring.png" alt="" />
</div><br /><br />

<div className="container">
  <a href="/checkout" className="buy">Buy Now</a>
</div>

</div><br /><br />
<div className="card">

<div className="img-container">
  <img className="phone"  src="/p1.jpg" alt="" />
</div>
</div><br /><br />


</>

)
}
export default Book;