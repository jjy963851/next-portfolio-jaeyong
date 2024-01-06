
import Link from "next/link";
import Image from "next/image";

export default function JustaNanba() {
    return (
        <div className="Nanba">
            <div className="flex justify-between">
                <div className="flex-col">
                    <h2 className="text-2xl text-blue-600 font-bold">Nanba</h2>
                    <h3 className="text-xl font-semibold py-3">FrontEnd Developer</h3>
                    <p>Nov.2022 ~ April.2023</p>

                    <h4 className="mt-8 flex justify-center font-mono text-lg text-yellow-400">Achievement</h4>
                    <li className="text-sm font-sans">Responsive Design</li>
                    <li className="text-sm font-sans">RESTful APIs, Database connect, and Login Function</li>
                    <li className="text-sm font-sans">Deployed by Vercel</li>
                </div>

                <div className="flex-col ">
                <Link className="cursor-pointer" href="https://cosme-17dvb7hr2-jjy963851.vercel.app/">
                    <Image src="/Cosme.png" className="rounded-lg hover:scale-95 duration-150" alt="" width={400} height={300} quality={100} />
                </Link>
                <p className="flex justify-center pt-1 text-sm ">Click to go Website</p>
                </div>
            </div>
        </div>
    );
}

