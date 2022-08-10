import type { NextPage } from "next";
import Head from "next/head";

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Omar Portfolio</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


    </>
  );
};


export default Home;
