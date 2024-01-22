import Image from "next/image";
import Link from "next/link";

export default function Blossend() {
  return (
    <div className="Blossend">
      <h1 className="flex justify-center text-white font-bold text-4xl pb-20">
        {" "}
        Work Expereince{" "}
      </h1>
      <div className="flex justify-between">
        <div className="">
          <h2 className=" text-2xl text-blue-600 font-bold">Blossend</h2>
          <h3 className="text-xl font-semibold py-3 text-white">Tech Lead</h3>
          <p className="text-white">May.2023 ~ Current</p>

          <h4 className="mt-8 mb-5 flex justify-center font-mono text-lg md:text-xl text-yellow-400">
            Achievement
          </h4>
          <li className="text-md font-sans text-white">
            Developed a web app that helps new patients find high quality, local
            doctors by providing trustworthy reviews using ReactJS, Recoil, and
            Typescript hosted on AWS Amplify cloud service
          </li>
          <li className="text-md font-sans text-white">
            Tech lead for Find a doctor app Building initial routing
            architecture using Next.js
          </li>
          <li className="text-md font-sans text-white">
            Revamped the company&apos;s main website using ReactJS and CSS
          </li>
          <li className="text-md font-sans text-white">
            Led weekly sprints using agile methodology and managed development
            workflows like code reviews
          </li>
          <li className="text-md font-sans text-white">
            Partnered with Backend to integrate RESTFUL APIs, and connects
            Doctors, and Patients data using Axios
          </li>
          <li className="text-md font-sans text-white">
            Search function and Bookmark function implement using Recoil, and
            React hooks{" "}
          </li>
        </div>

        <div className="flex-col ">
          <Link className="cursor-pointer" href="https://www.openmydoctor.com/">
            <Image
              src="/openmydoctor.png"
              className="rounded-lg hover:scale-95 duration-150"
              alt=""
              width={400}
              height={300}
              quality={100}
            />
          </Link>
          <p className="flex justify-center pt-1 text-sm text-white ">
            Click to go Website
          </p>
        </div>
      </div>
    </div>
  );
}
