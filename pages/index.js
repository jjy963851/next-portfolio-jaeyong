import Head from "next/head";
import Layout from "@/components/layout";
import Hero from "@/components/home/hero";
import Plx from "react-plx";
import Blossend from "./Blossend";
import Clementine from "./Clementine";

export default function Home() {
  const parallaxData = [
    {
      start: 0,
      end: 400,
      easing: "ease-in",
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
      ],
    },
  ];

  const parallaxData1 = [
    {
      start: 800,
      end: 1100, // Adjust the end value to control when Blossend disappears
      easing: "ease-in",
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
      ],
    },
  ];

  const parallaxData2 = [
    {
      start: 1400,
      end: 2000, // Adjust the end value to control when Clementine disappears
      easing: "ease-in",
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
      ],
    },
  ];

  return (
    <Layout>
      <Head>
        <title>JaeYong Chang Portfolio</title>
        <meta name="description" content="Today's also fighting " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="body-font">
        <div className="container mx-auto px-5">
          <Plx className="parallax-first" parallaxData={parallaxData}>
            <Hero />
          </Plx>
          <Plx className="parallax-second" parallaxData={parallaxData1}>
            <Blossend />
          </Plx>
          <Plx
            className="parallax-third .end-element"
            parallaxData={parallaxData2}
          >
            <Clementine />
          </Plx>
        </div>
      </section>
    </Layout>
  );
}
