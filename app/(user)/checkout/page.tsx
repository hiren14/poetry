import 'react'
import Link from 'next/link';
function Checkouy() {
return(  


<div className="container">

  <div className="card text-center shadow-2xl" >
  <span className="underline underline-offset-2 decoration-4 decoration-[#8F00FF]">
    The Book is Live on the Following Countries <br /><br />
    </span><br />
 <ul>
 <li><Link href='https://www.amazon.in/dp/B0CV4HLK98'> India 
  </Link></li>
<br />
    <li><Link href='https://www.amazon.com/dp/B0CV4HLK98'> USA  </Link></li>
    <br />
    <li><Link href='https://www.amazon.co.uk/dp/B0CV4HLK98'> UK  </Link></li>
    <br /><li><Link href='https://www.amazon.de/dp/B0CV4HLK98'> Germany  </Link></li>
    <br /><li><Link href='https://www.amazon.fr/dp/B0CV4HLK98'> France
  </Link></li><br />
  <li><Link href='https://www.amazon.es/dp/B0CV4HLK98'> Spain
  </Link></li><br />
  <li><Link href='https://www.amazon.co.jp/dp/B0CV4HLK98'> Japan
  </Link></li><br />
  <li><Link href='https://www.amazon.co.jp/dp/B0CV4HLK98'> Brazil

  </Link></li><br />
  <li><Link href='https://www.amazon.ca/dp/B0CV4HLK98'> Canada
  </Link></li><br />
  <li><Link href='https://www.amazon.it/dp/B0CV4HLK98'> Italy  </Link></li>
<br />
  <li><Link href='https://www.amazon.com.mx/dp/B0CV4HLK98'> Mexico
  </Link></li><br />
  <li><Link href='https://www.amazon.com.au/dp/B0CV4HLK98'> Australia

  </Link></li><br />
   </ul>
</div>
</div>
)}
export  default Checkouy;