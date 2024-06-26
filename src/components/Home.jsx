import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@mui/material'
import React from 'react'
import Typewriter from 'typewriter-effect'
import mypic from '../assets/mypic.png'


function Home() {
  return (
    <>
     <div className='grid sm:grid-cols-2 mt-28'>
        <div className='text-white text-center'>
            <h1 className='text-4xl mt-10'>HI,I'M A FRONTEND WEB</h1>
            <div className='typewriter text-6xl text-orange-500 mt-7'>
                            <Typewriter                            
                            options={{
                            strings: ['DEVELOPER', 'ANJANA M BABU'],
                            autoStart: true,
                            loop: true,
                            }}
                            
                            />
            </div>
            <div className='mt-5 textJust'>
             <p className='text-lg ml-5 px-10 text-justify'>I'm a front-end developer passionate about crafting beautiful and intuitive web experiences. With expertise in HTML, CSS, and JavaScript, I specialize in turning ideas into polished and user-friendly websites. Let's build something amazing together!.</p>
            </div>
           <a href='#portfolio'><button className='bg-orange-500 rounded py-2 px-4 mt-10 text-white mx-auto'>View My Work</button></a>
            <button className='py-2 px-4 mt-10 underline text-orange-500 mx-auto ml-4'><a href='#contact'>Contact Me</a> <FontAwesomeIcon icon={faArrowDown} className='text-orange-500 ml-2' /></button>
        </div>
        <div className='flex justify-center items-center mt-6'>
            <div className='w-96 h-96 rounded-full bg-orange-500 flex justify-center items-center'>
                <img src={mypic} alt="" className='w-80 h-80 rounded-full'/>
            </div>
        </div>
     </div>
    </>
  )
}

export default Home