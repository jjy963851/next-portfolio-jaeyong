import Link from "next/link";


export default function Clementine() {
    return (
        <div className="Clementine">
            <div className="flex justify-between">
                <div className="flex-col">
                    <h2 className="text-2xl text-blue-600 font-bold">Nanba</h2>
                    <h3 className="text-xl font-semibold py-3">React-Native Developer</h3>
                    <p>April.2023 ~ Oct.2023</p>

                    <h4 className="mt-8 flex justify-center font-mono text-lg text-yellow-400">Achievement</h4>
                    <li className="text-sm font-sans">Transition to Mobile Application</li>
                    <li className="text-sm font-sans">Login, Database, and UserActivities Tracking</li>
                    <li className="text-sm font-sans">Deployed by Testflight</li>
                </div>

                <div className="flex-col ">
                <video width={200} height={50} controls className="rounded-lg   ">
                    <source src="/CosmeApp.MP4" type="video/mp4" />
                </video>
                <p className="flex justify-center pt-1 text-sm ">Click to play Video</p>
                </div>

            </div>
        </div>
    );
}
