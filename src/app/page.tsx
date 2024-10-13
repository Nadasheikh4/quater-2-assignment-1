
import Link from "next/link";

export default function Home() {
  return (
    <div>

      <h1>Country List</h1>

      
      <Link href ="/Country/Pakistan"style={{margin:"10px", borderRadius : "10 px", border:"2px solid black",padding :"10px"}}>Pakistan</Link>
      <Link href = "/Country/India"style={{margin:"10px", borderRadius : "10 px", border:"2px solid black",padding :"10px"}}>India</Link>
      <Link href ="/Country/Palestine"style={{margin:"10px", borderRadius : "10 px", border:"2px solid black",padding :"10px"}}>Palestine</Link>
      
      <Link href ="/Country/China"style={{margin:"10px", borderRadius : "10 px", border:"2px solid black",padding :"10px"}}>China</Link>
      <Link href= "/Country/Turkey" style={{margin:"10px", borderRadius : "10 px", border:"2px solid black",padding :"10px"}}>Turkey</Link>
    </div>
  );
}
