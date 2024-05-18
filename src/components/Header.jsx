import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <>
    <nav className='flex fixed top-0 w-full justify-between bg-black text-white'>
        <div>
            <a href='/'><img src={logo} alt="" style={{height:'70px',width:'70px'}}/></a>
        </div>
        <div className='flex'>
            <ul  className='flex list'>
              <li class="mr-9 content-center text-xl hover:text-orange-500"><a href='/'>Home</a></li>
              <li class="mr-9 content-center text-xl hover:text-orange-500"><a href='#skill'>Skills</a></li>
              <li class="mr-9 content-center text-xl hover:text-orange-500"><a href='#portfolio'>Projects</a></li>
              <li class="mr-4 content-center text-xl hover:text-orange-500"><a href='#contact'>Contact</a></li>
            </ul>
        </div>
    </nav>
    </>
   
  )
}

export default Header