import React from "react";

type letterType = {
    title: string;
};

function AnimatedLetters({ title }: letterType) {
    // splite words

    // splite words to letters

    //  adding spacing

    return (
        <div className='overflow-hidden bg-white '>
            <span className='text-3xl md:text-7xl font-cal mt-3 text-white mix-blend-difference transition duration-500'>{ title }</span>
        </div>
    );
}

export default AnimatedLetters;
