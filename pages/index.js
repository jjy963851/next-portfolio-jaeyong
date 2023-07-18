import Head from 'next/head'
import Layout from '@/components/layout'
import Hero from '@/components/home/hero'
import dotenv from 'dotenv';
dotenv.config();
export default function Home() {
  
  return (
    <Layout>
      <Head>
        <title>JaeYong Chang Portfolio</title>
        <meta name="description" content="Today's also fighting " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero/>
          
        </div>
        </section>
      
    </Layout>
   
  )
}
