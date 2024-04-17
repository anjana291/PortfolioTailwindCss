import React from 'react'

function Header() {
  return (
    <>
    <nav className='flex fixed top-0 w-full justify-between bg-black text-white'>
        <div>
            <a href='/'><img src="/src/assets/logo.png" alt="" style={{height:'70px',width:'70px'}}/></a>
        </div>
        <div className='flex'>
            <ul  className='flex list'>
              <li class="mr-9 content-center text-2xl hover:text-orange-500">Home</li>
              <li class="mr-9 content-center text-2xl hover:text-orange-500">Skills</li>
              <li class="mr-9 content-center text-2xl hover:text-orange-500">Projects</li>
              <li class="mr-4 content-center text-2xl hover:text-orange-500">Contact</li>
            </ul>
        </div>
    </nav>
    </>
   
  )
}

export default Header