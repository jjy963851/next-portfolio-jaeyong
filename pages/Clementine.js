import Link from "next/link";

export default function Clementine() {
  return (
    <div className="Clementine">
      <div className="flex justify-between">
        <div className="flex-col">
          <h2 className="text-2xl text-blue-600 font-bold">Nanaba Corp.</h2>
          <h3 className="text-xl font-semibold py-3 text-white">
            Full Stack Engineer
          </h3>
          <p className="text-white">November.2022 ~ Current</p>

          <h4 className="mt-8 mb-5 flex justify-center font-mono text-lg md:text-xl text-yellow-400">
            Achievement
          </h4>
          <li className="text-md font-sans text-white">
            Built a 0 to 1 beauty iOS mobile app - nanaba - that makes sharing
            your skincare routines with your friends easier with over 30,000
            products, ingredients, and product descriptions using firebase,
            react native, expo
          </li>
          <li className="text-md font-sans text-white">
            Partnered with Product and UX to design and implement navigation
            flow, a scrollable infinite content feed, user profile builder with
            image upload functionality
          </li>
          <li className="text-md font-sans text-white">
            User activity data logging by integrating Segment a 3rd party app
            service through an in-house API
          </li>
          <li className="text-md font-sans text-white">
            Login authentication and authorization for new and returning users
            built on Firebase Auth
          </li>
        </div>

        <div className="flex-col ">
          <video width={200} height={50} controls className="rounded-lg   ">
            <source src="/CosmeApp.MP4" type="video/mp4" />
          </video>
          <p className="flex justify-center pt-1 text-sm text-white ">
            Click to play Video
          </p>
        </div>
      </div>
    </div>
  );
}
