import React from 'react'
import {logo } from "../assets"

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'> 
        <nav className='w-full flex justify-between mb-10 pt-2'>
            <img src={logo} alt='log of summarizer' 
                className='w-28'/>

            <button type='button'
                onClick={() => window.open("https://github.com/nikbhaladhare2104/react-website-1")}
                className='black_btn'>
                GitHub
            </button>
        </nav>
        
        <h1 className='head_text'> 
            Summarize Articles with <br  className='max-md:hidden'/>
           <span className='orange_gradient'> OpenAI GPT-4</span>
        </h1>

        <h2 className='desc'>
            Simplify your reading with Summarize, 
            an open source article summarrizer
            that transform lengthy articles into clear and consize summary
        </h2>

    </header>
   
  )
}

export default Hero
  
