import React from 'react'
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone,faLocationDot } from '@fortawesome/free-solid-svg-icons';


function Contact() {
  return (
    <>
    <div className='mt-20 mb-20'>
    <h1 className='list text-4xl text-white flex items-center justify-center'>Contact <span className='ml-3 text-orange-500'>Me</span></h1>
        <div className='grid sm:grid-cols-2 gap-4 mt-10 ml-16'>
            <div className='text-white w-full ml-48'>

            <div className='phone mt-5 flex justify-items-start items-center'>
            <FontAwesomeIcon icon={faPhone} size='xl'className='icon'/>
            <h4 className='ml-4'>8921592192</h4>
            </div>

            <div className='phone mt-11 flex justify-items-start items-center'>
            <FontAwesomeIcon icon={faEnvelope} size='xl' className='icon'/>
            <h4 className='ml-4'>anjanababum123@gmail.com</h4>
            </div>

            <div className='phone mt-11 flex justify-items-start items-center'>
            <FontAwesomeIcon icon={faLocationDot} size='xl' className='icon'/>
            <div className='ml-4'><h4>Anjanam Manattil</h4>
            <h4>Udayamperoor P.O</h4>
            <h4>Ernakulam, Kerala</h4>
            </div>
            </div>


                                
            </div>
            <div className='w-full'>
            <TextField id="outlined-basic" label="Enter Your Name" variant="outlined" 
         sx={{
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white' 
          }
        }}
        InputLabelProps={{
          style: {
            color: 'white' 
          }
        }}
      className='w-8/12'/>

<div className='mt-5'>
            <TextField id="outlined-basic" label="Enter Your Email" variant="outlined" 
             sx={{
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white' 
              }
            }}
            InputLabelProps={{
              style: {
                color: 'white' 
              }
            }}
              className='w-8/12 mt-5'/>
</div>
       <div className='mt-5'>
           <TextField
              id="outlined-multiline-static"
              label="Enter Your Message"
              multiline
              rows={4}
              defaultValue=""
              sx={{
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white' 
                }
              }}
              InputLabelProps={{
                style: {
                  color: 'white' 
                }
              }}
              
              className='w-8/12'/>
       </div>
          <button className='bg-orange-500 w-40 h-10 flex justify-center items-center rounded-lg mt-5' >Send Message</button>          
        </div>
        </div>
    </div>
    </>
  )
}

export default Contact