import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PROJECTS } from "../../data/Project";
import AnimatedLetters from "../components/AnimatedLetters";
import HeartIcon from "../components/icons/HeartIcon";
import { Animations } from '../variants/animations';




const Home: NextPage = () => {

  // UseState variables
  const [showContent, setShowContent] = useState<boolean>(false)
  const [showImage, setShowImage] = useState<boolean>(false)
  const [like, setLike] = useState<boolean>(false)




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


          <section className="py-12">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
              { PROJECTS.map(({ name, content, link }, index) => (
                <div key={ index } className='p-4  bg-gray-50 border rounded-lg shadow hover:shadow-2xl'>
                  <h3 className="font-cal text-2xl mb-4 text-blue-500">{ name }</h3>
                  {/* <div className="w-full h-[200px] rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 mb-6 shadow-lg"> </div> */ }
                  <p className="text-sm text-gray-400 font-light mb-4">{ content }</p>
                  <Link href={ link }>
                    <a target='_blank' className="hover:underline hover:text-blue-500">Check the project</a>
                  </Link>
                  <button className="ml-auto flex items-center space-x-2 "
                    onClick={ () => setLike(!like) } >
                    <HeartIcon style={ like ? "fill-red-500 stroke-red-500  " : "fill-none stroke-black" } />
                    <span className="text-gray-500 text-xl">102</span>
                  </button>
                </div>
              )) }
            </div>
          </section>

        </main >
      </div >
    </div >

  );
};





export default Home;
