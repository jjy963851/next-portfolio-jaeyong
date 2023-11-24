import Animation from "./animation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

const images = [
  "/next.png",
  "/tailwind.png",
  "/javaS.jpg",
  "/fireBase.png",
  "/native.png",
  "/xcode.png",
  "/segement.png",
  "/expo.png",
  "/aws.png",
  "/slack.png",
  "/jira.png"
];


export default function Hero() {

  const [showImages, setShowImages] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleImages = () => {
    setShowImages(!showImages);
    setShowParagraph(false);
  };

  const toggleParagraph = () => {
    setShowParagraph(!showParagraph);
    setShowImages(false);
  };

  useEffect(() => {
    if (showImages && currentImageIndex < images.length - 1) {
      const delay = 1500; // 이미지가 나타나는 간격 (1초로 설정)

      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => {
        clearInterval(interval); // 컴포넌트가 언마운트되면 타이머를 정리합니다.
      };
    }
  }, [showImages, currentImageIndex, images.length]);







  return (
    <>
      <div className="md:flex ">

        <div className="flex flex-col items-center lg:pr-24 md:pr-16  md:items-start md:text-left">
          <h1 className="text-title  text-lg md:text-xl lg:text-4xl mb-4 font-medium dark:text-white  ">
            Hello Everyone! I&apos;m JaeYong
            <br className="  lg:inline-block dark:text-white " />
            Welcome to my Portfolio Website!
          </h1>
          <p className=" text-stroke  mb-8 leading-relaxed dark:text-white w-full text-left ">
            Hello, everyone. Thanks for watching my Portfolio. I&apos;m currently studying in La Roche University. I&apos;m majoring Computer Scienece, and my goal is to become full stack developer! I hope you like my projects and if you want to take a look more details about my projects, please visit my github! Thank you so much.
          </p>

          <div className="flex justify-start">
            <Link href="/Projects" legacyBehavior>
              <a className="inline-flex text-title border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:scale-90 duration-300 rounded text-lg">Check out some of my projects</a>
            </Link>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 ">
            <Animation />
          </div>
        </div>



        <div className="w-full ">
          <div className="flex justify-between gap-x-5">
            <button onClick={toggleImages} className="text-xl text-title hover:scale-110 duration-300 mb-10">What are my Skills?</button>
            <button onClick={toggleParagraph} className="text-xl text-title hover:scale-110 duration-300 mb-10">Why?</button>
          </div>


          <div className={`grid grid-cols-3 gap-3 ${showImages ? "" : 'hidden'}`}>
            {images.map((imageSrc, index) => (
              <CSSTransition
                key={index}
                in={showImages}
                timeout={3000 + index * 200}
                classNames={`image-transition`}
              >
                <img
                  alt="icon"
                  src={imageSrc}
                  className=" rounded-lg  md:w-full h-full object-relative"
                  style={{ transitionDelay: `${index * 500}ms` }}
                />
              </CSSTransition>
            ))}
          </div>




          <div className={` ${showParagraph ? '' : 'hidden'} `}>
            <CSSTransition

              in={showParagraph}
              timeout={3000}
              classNames={`image-transition`}
            >
              <p className=" leading-7 text-lg text-white font-mono w-full text-start ">
                I began my front-end development journey with Vanilla JavaScript, HTML, and CSS through online lectures. While working on a small project,
                 I naturally found myself yearning for a more efficient way to write my code. That&apos;s when I discovered React.js. With its vast community 
                 and popularity among front-end developers, I delved into learning React.js. However, as I continued creating small web apps, I encountered 
                 challenges with page routing. Managing multiple pages involved handling numerous props and states, which seemed cumbersome. This led me to 
                 explore further, and I realized that React.js is particularly well-suited for Single Page Applications (SPAs).
                In my journey of building web apps step by step, I eventually discovered the Next.js framework. It not only offers dynamic routes but also provides 
                flexibility in choosing between client-side rendering and server-side rendering. It felt like a whole new world, and I appreciated the ability to make flexible choices between React.js and Next.js based on the characteristics of each app.
              </p>
            </CSSTransition>
          </div>


        </div>



      </div>
    </>
  );
}

{/**

      
      </div>
      
*/}