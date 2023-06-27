import Animation from "./animation";
import Link from "next/link";
export default function Hero(){
    return(
      <div className="Myhero">
       <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center  ">
      <h1 className=" sm:text-4xl text-3xl mb-4 font-medium dark:text-white  ">
        Hello Everyone! I&apos;m JaeYong
        <br className=" lg:inline-block dark:text-white "/>
        Welcome to my Portfolio Website!
      </h1>
      <p className="mb-8 leading-relaxed dark:text-white ">
        Hello, everyone. Thanks for watching my Portfolio. I&apos;m currently studying in La Roche University. I&apos;m majoring Computer Scienece, and my goal is to become full stack developer! I hope you like my projects and if you want to take a look more details about my projects, please visit my github! Thank you so much.
        </p>
      <div className="flex justify-center">
        <Link href = "/Projects" legacyBehavior>
        <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Check out some of my projects</a>
        </Link>
      </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation/>
      </div>
      </div>
    );
}