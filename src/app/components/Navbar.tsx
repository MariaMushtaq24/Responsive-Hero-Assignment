import Link from "next/link"
export default function Navbar(){
return(
   <div className="flex flex-row">    
    <div className="w-full flex flex-row items-center bg-yellow-800 text-white h-20 ">
<Link href="/Home" className="font-bold mx-4"> Home </Link>
<Link href="/About" className="font-bold mx-4"> About </Link>
<Link href="/Services" className="font-bold mx-4"> Services </Link>
<Link href="/Revisions" className="font-bold mx-4"> Revisions </Link>
<Link href="/ContactUs" className="font-bold mx-4"> Contact Us </Link>
<Link href="/Testimonials" className="font-bold mx-4"> Testimonials </Link>
    </div>
</div>
)};