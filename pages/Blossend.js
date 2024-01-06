import Image from "next/image"
import Link from "next/link"


export default function Blossend() {



    return (
        <div className="Blossend">
            <h1 className="flex justify-center text-white font-bold text-4xl pb-20"> Work Expereince </h1>
            <div className="flex justify-between">
                <div className="">
                    <h2 className=" text-2xl text-blue-600 font-bold">Blossend</h2>
                    <h3 className="text-xl font-semibold py-3">ReactJS Developer</h3>
                    <p>May.2023 ~ Dec.2023</p>

                    <h4 className="mt-8 flex justify-center font-mono text-lg text-yellow-400">Achievement</h4>
                    <li className="text-sm font-sans">Built initial Architecture</li>
                    <li className="text-sm font-sans">Finish OMD project MileStone .1</li>
                    <li className="text-sm font-sans">Tech Leader</li>


                </div>

                <div className="flex-col ">
                    <Link className="cursor-pointer" href="https://www.openmydoctor.com/">
                        <Image src="/openmydoctor.png" className="rounded-lg hover:scale-95 duration-150" alt="" width={400} height={300} quality={100} />
                    </Link>
                    <p className="flex justify-center pt-1 text-sm ">Click to go Website</p>
                </div>

            </div>
        </div>
    )

}