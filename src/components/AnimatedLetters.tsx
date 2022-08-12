import React from 'react'
import { motion } from 'framer-motion'
import { Animations } from '../variants/animations';



type letterType = {
    title: string;
}

function AnimatedLetters({ title }: letterType) {

    // splite words
    const splitWords = title.split(" ");




    // splite words to letters
    const words = splitWords.map(word => {
        return word.split('')
    })


    //  adding spacing
    words.map(word => {
        return word.push("\u00A0")
    })





    return (
        <div className="overflow-hidden bg-white ">

            { words.flat().map((element, index) => {
                return (
                    <motion.span
                        className='inline-block text-3xl md:text-7xl font-cal mt-3 text-white mix-blend-difference transition duration-500'
                        variants={ Animations.letter }
                        key={ index }>{ element }</motion.span>
                )
            }) }
        </div>
    )
}

export default AnimatedLetters