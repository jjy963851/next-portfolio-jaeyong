import Link from "next/link";


export default function Header(){
return(

<>
<header className=" ring-1 ring-slate-500 shadow-lg mb-5">

  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
   <Link href ="/" legacyBehavior>
        <a className="flex  font-medium items-center  mb-4 md:mb-0">
        <span className="text-sub ml-3 text-xl dark:text-white  transition  group">
        <span className="group-hover:hidden ">JaeYong&apos;s Portfolio</span>
        <span className="group-hover:block hidden ">Web Developer</span>
      </span>
        </a>
   </Link>
   
    
    <nav className="md:ml-auto flex flex-wrap items-center text-base ">
      <Link href = "https://www.linkedin.com/in/jaeyong963851/" legacyBehavior>
        <a className="mr-5 text-sub  hover:underline ">Linked In</a>
      </Link>
      <Link href = "/Projects" legacyBehavior>
        <a className="mr-5 text-sub   hover:underline">Projects</a>
      </Link>
      <Link href = "https://github.com/jjy963851" legacyBehavior>
        <a className="mr-5 text-sub  hover:underline ">Github</a>
      </Link>
    </nav>
  
  </div>
</header>
</>



);


}