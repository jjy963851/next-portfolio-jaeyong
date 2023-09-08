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


export default function Hero(){

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
      }, delay );

      return () => {
        clearInterval(interval); // 컴포넌트가 언마운트되면 타이머를 정리합니다.
      };
    }
  }, [showImages, currentImageIndex, images.length]);



 



    return(
      <>
       <div className="flex flex-justify-between lg:mx-40    ">

        <div className="flex-col  lg:pr-24 md:pr-16  md:items-start md:text-left">
       <h1 className="text-title  text-lg md:text-xl lg:text-4xl mb-4 font-medium dark:text-white  ">
        Hello Everyone! I&apos;m JaeYong
        <br  className="  lg:inline-block dark:text-white "/>
        Welcome to my Portfolio Website!
      </h1>
      <p className=" text-stroke  mb-8 leading-relaxed dark:text-white w-1/2 text-left ">
        Hello, everyone. Thanks for watching my Portfolio. I&apos;m currently studying in La Roche University. I&apos;m majoring Computer Scienece, and my goal is to become full stack developer! I hope you like my projects and if you want to take a look more details about my projects, please visit my github! Thank you so much.
        </p>

        <div className="flex justify-start">
        <Link href = "/Projects" legacyBehavior>
        <a className="inline-flex text-sub border-0 py-2 px-6 focus:outline-none hover:bg-yellow-200 hover:scale-90 duration-300 rounded text-lg">Check out some of my projects</a>
        </Link>
      </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 ">
            <Animation/>
        </div>
        </div>



        <div className="w-full  p-10">
          <div className="flex justify-evenly">
              <button onClick={toggleImages} className="text-xl text-sub hover:scale-110 duration-300 mb-10">What are my Skills?</button>
              <button onClick={toggleParagraph} className="text-xl text-sub hover:scale-110 duration-300 mb-10">Why?</button>
          </div>

         
          <div className={`grid sm:grid-cols-1 md:grind-cols-2 xl:grid-cols-3 gap-3 ${showImages ? "" : 'hidden'}`}>
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
                  className=" rounded-lg w-full h-full object-relative"
                  style={{ transitionDelay: `${index * 500}ms` }}
                />
              </CSSTransition>
            ))}
          </div>




          <div className={` ${showParagraph ? '' : 'hidden'}`}>
          <CSSTransition
                
                in={showParagraph}
                timeout={3000 }
                classNames={`image-transition`}
              >
            <p className=" leading-10 text-lg text-stroke  font-normal">
            So far, while developing websites using Next.js and React.js, 
            what I&apos;ve noticed is that the current trend is the mobile market. 
            Everyone has a smartphone, and it&apos;s a part of their daily lives. 
            To enhance accessibility and keep up with rapidly changing trends, 
            I&apos;m also preparing for mobile development. 
            I believe that staying up-to-date with constantly 
            evolving trends is a crucial skill for web developers.

            Therefore, I&apos;ve been using React-Native for developing IOS app with Expo-go.
            Make a build and import IPA file with X-code and deploy at Test Flight before
            realese to IOS market. 
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