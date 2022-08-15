import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnimatedLetters from "../components/AnimatedLetters";
import { Animations } from '../variants/animations';




const Home: NextPage = () => {

  // UseState variables
  const [showContent, setShowContent] = useState<boolean>(false)
  const [showImage, setShowImage] = useState<boolean>(false)


  return (
    <div>
      {/* Splash Screen */ }
      <motion.div
        initial={ {
          height: "100%",
        } }
        animate={ {
          height: "0%",
          transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 2.9 }
        } }
        onAnimationComplete={ () => setShowImage(true) }
        className="absolute bg-black h-screen w-full ">
      </motion.div>

      <div className="mx-auto max-w-6xl py-4 md:py-12 px-5 ">

        <Head>
          <title>Omar Portfolio</title>
          <meta name="description" content="Portfolio animation with framer motion 🚀" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="py-2 md:py-12 select-none">
          <motion.section
            initial="hidden"
            animate="visible"
          >

            {/* Picture */ }
            { showImage && <motion.div
              variants={ Animations.picture }
              onAnimationComplete={ () => setShowContent(true) }
              className="relative w-[100%] md:w-[70%]">
              <Image src='https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='image-1' layout='fill' className="rounded-md object-cover" />
            </motion.div> }

            <div className="py-8  ">
              <motion.div variants={ Animations.FadeRight } className="text-2xl animate-wave w-min ">👋</motion.div>

              {/* Animated Letters */ }
              <motion.div
                variants={ Animations.container }
              >
                <AnimatedLetters title="Hi, I'm Omar" />
              </motion.div>

              {/* Content */ }
              { showContent &&
                <div>
                  <motion.p
                    variants={ Animations.FadeLeft }
                    className="text-gray-400 text-base font-light md:w-[70%] my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque esse excepturi incidunt sequi quaerat asperiores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque esse excepturi incidunt sequi quaerat asperiores?</motion.p>

                  <motion.div
                    variants={ Animations.FadeRight }
                  >
                    <Link href='' >
                      < a className="hover:underline" >
                        See more →
                      </ a>
                    </Link >
                  </motion.div>
                </div>
              }
            </div>
          </motion.section>
        </main >
      </div >
    </div >

  );
};





export default Home;
