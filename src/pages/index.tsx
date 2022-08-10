import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";



const Home: NextPage = () => {
  const [showContent, setShowContent] = useState<boolean>(false)



  const text = "Hi, I'm Omar.";

  // splite words
  const splitWords = text.split(" ");



  // splite words to letters
  const words = splitWords.map(word => {
    return word.split('')
  })


  //  adding spacing
  words.map(word => {
    return word.push("\u00A0")
  })


  console.log(words)


  const item = {
    hidden: {
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  };

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.08,
      }
    }
  };


  const leftAnimation = {
    hidden: {
      x: "-2%",
      opacity: 0,

    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 3 }
    }
  }

  const rightAnimation = {
    hidden: {
      height: '0px',
      opacity: 0,

    },
    visible: {
      height: "300px",
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.5 }
    }
  }



  return (
    <div>
      <motion.div
        initial={ {
          height: "100%",
        } }
        animate={ {
          height: "0%",
          transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 2.9 }


        } }
        onAnimationComplete={ () => setShowContent(true) }
        className="absolute bg-black h-screen w-full ">

      </motion.div>
      <div className="mx-auto max-w-6xl py-12 px-5 ">
        <Head>
          <title>Omar Portfolio</title>
          <meta name="description" content="Portfolio animation with framer motion 🚀" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="py-12">




          <motion.section
            initial="hidden"
            animate="visible"
            variants={ container }

          >



            { showContent && <motion.div
              variants={ rightAnimation }
              className="relative h-[300px] w-[600px]">
              <Image src='https://images.unsplash.com/photo-1521702813222-1943f3fb9c07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='image-1' layout='fill' className="rounded-md object-cover" />
            </motion.div> }
            <div className="py-8  ">
              <span className="text-4xl ">👋</span>
              <div className="overflow-hidden bg-white ">

                { words.flat().map((element, index) => {
                  return (
                    <motion.span
                      className='text-3xl md:text-9xl font-cal mt-3 text-white mix-blend-difference transition duration-500 '
                      style={ { display: "inline-block" } }
                      variants={ item }

                      key={ index }>{ element }</motion.span>
                  )
                }) }
              </div>

              { showContent &&
                <div>
                  <motion.p
                    variants={ leftAnimation }
                    className="text-gray-400 text-base font-light w-[90%] mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque esse excepturi incidunt sequi quaerat asperiores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque esse excepturi incidunt sequi quaerat asperiores?</motion.p>


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
