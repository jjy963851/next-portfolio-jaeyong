import Link from "next/link";


export default function Header(){
return(

<>
<header className="">

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
        <a className="mr-5 text-sub  hover:scale-110 duration-300 ease-in ">Linked In</a>
      </Link>
      <Link href = "/Projects" legacyBehavior>
        <a className="mr-5 text-sub   hover:scale-110 duration-300 ease-in">Projects</a>
      </Link>
      <Link href = "https://github.com/jjy963851" legacyBehavior>
        <a className="mr-5 text-sub  hover:scale-110 duration-300 ease-in ">Github</a>
      </Link>
    </nav>
  
  </div>
</header>
</>



);


}