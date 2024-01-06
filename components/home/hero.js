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

const listItems = [
  'ReactJS',
  'Next.js',
  'React-Native',
  'CSS',
  'Responsive Design',
  'Creative',
  'Team player',
];

export default function Hero() {

  const [showImages, setShowImages] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

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



  useEffect(() => {
    if (showParagraph && currentParagraphIndex < listItems.length - 1) {
      const delay = 1500; // 이미지가 나타나는 간격 (1초로 설정)

      const interval = setInterval(() => {
        setCurrentParagraphIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => {
        clearInterval(interval); // 컴포넌트가 언마운트되면 타이머를 정리합니다.
      };
    }
  }, [showParagraph, currentParagraphIndex, listItems.length]);




  return (
    <>
      <div className="md:flex Hero">

        <div className="flex flex-col items-center lg:pr-24 md:pr-16  md:items-start md:text-left">
          <h1 className="text-title  text-lg md:text-xl lg:text-4xl mb-4 font-medium dark:text-white  ">
            Hello Everyone! I&apos;m JaeYong
            <br className="  lg:inline-block dark:text-white " />
            Welcome to my Portfolio Website!
          </h1>
          <p className=" text-stroke  mb-8 leading-relaxed dark:text-white w-full text-left ">
            Hello, everyone. Thanks for watching my Portfolio. I&apos;ve graduated B.S Computer Science in La Roche University. I&apos;m trying to be a best Front-End Developer! I hope you like my projects and if you want to take a look more details about my projects, please visit my github! Thank you so much.
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
            <button onClick={toggleParagraph} className="text-xl text-title hover:scale-110 duration-300 mb-10">Strength</button>
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
                  className=" rounded-lg w-1/2 md:w-full  h-full object-relative"
                  style={{ transitionDelay: `${index * 500}ms` }}
                />
              </CSSTransition>
            ))}
          </div>




          <div className={` flex flex-col text-xl font-semibold gap-y-10 ${showParagraph ? '' : 'hidden'} `}>
          {listItems.map((item, index) => (
            <CSSTransition
            key={index}
              in={showParagraph}
              timeout={3000 + index * 200}
              classNames={`image-transition`}
            >
             
               
                  <li 
                  
                  style={{ transitionDelay: `${index * 500}ms` }}>
                    <span className=" ring-offset-1 bg-slate-800 text-blue-600  rounded-lg p-2 cursor-pointer hover:scale-95 duration-200 ease-in hover:text-slate-200">
                    {item}
                    </span>
                    </li>
              
              
            </CSSTransition>
              ))}
          </div>


        </div>



      </div>
    </>
  );
}

{/**

      
      </div>
      
*/}