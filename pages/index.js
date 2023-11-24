import Head from 'next/head'
import Layout from '@/components/layout'
import Hero from '@/components/home/hero'



export default function Home() {
  
  return (
    <Layout>
      <Head>
        <title>JaeYong Chang Portfolio</title>
        <meta name="description" content="Today's also fighting " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <section className="   text-gray-600 body-font">
        <div className="container mx-auto  px-5   ">
          <Hero/>
          
        </div>
        </section>
      
    </Layout>
   
  )
}
