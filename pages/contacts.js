import Layout from "@/components/layout";
import Head from "next/head";
export default function Contacts(){
    return(
        <Layout>
            <Head>
                <title>JaeYong Chang Portfolio</title>
                <meta name="description" content="Today's also fighting " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head> 

        <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
             <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.784289687105!2d-80.01651808441092!3d40.56844057934789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88348b8128e087b1%3A0x543783d7129e5369!2sLa%20Roche%20University!5e0!3m2!1sen!2sus!4v1675701193886!5m2!1sen!2sus"
                style= {{ border: 0}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
         <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Message me!</h2>
        <p className="leading-relaxed mb-5 text-gray-600">Any Questions will be appreciated!</p>
        <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Email me</button>
        <p className="text-xs text-gray-500 mt-3">Till I become full stack developer.</p>
        </div>
        </div>
        </section>
        
        </Layout>
    );
}