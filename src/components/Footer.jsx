import { faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Footer() {
  return (
    <>
     <div className='flex justify-center gap-5 items-center mb-3'>
      <a href='https://www.instagram.com/__anjana__._/' target='_blank'><div className='w-12 h-12 rounded-full flex justify-center items-center hover:bg-orange-500 cursor-pointer'><FontAwesomeIcon icon={faInstagram} style={{color:'white'}} size='xl'/></div></a>
      <a href='https://www.linkedin.com/in/anjana-m-babu/' target='_blank'><div className='w-12 h-12 rounded-full flex justify-center items-center hover:bg-orange-500 cursor-pointer'><FontAwesomeIcon icon={faLinkedinIn} style={{color:'white'}} size='xl'/></div></a>
      <a href='https://github.com/anjana291' target='_blank'><div className='w-12 h-12 rounded-full flex justify-center items-center hover:bg-orange-500 cursor-pointer'><FontAwesomeIcon icon={faGithub} style={{color:'white'}} size='xl'/></div></a>
     </div>
    </>
  )
}

export default Footer