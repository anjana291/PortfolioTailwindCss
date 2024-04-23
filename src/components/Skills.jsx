import React from 'react'
import Card from 'react-bootstrap/Card';

function Skills() {
  return (
    <>
    <div className='mt-36 mb-32'>
      <h1 className='text-4xl text-white flex items-center justify-center list'><span className='text-orange-500 mr-3'>My</span> Skills</h1>
      <div className='grid sm:grid-cols-5 gap-4 mt-24 ml-32'>
        <div className='text-white'>
          <Card style={{ width: '8rem'}}>
            <Card.Img variant="top" style={{height:'100px', width:'100px'}} src="https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png" className='mt-11 w-full h- grayscale transition duration-500 ease-in-out transform hover:grayscale-0 hover:scale-110'/>
            {/* className="w-full h-auto grayscale transition duration-500 ease-in-out transform hover:grayscale-0 hover:scale-110" */}
            <Card.Body>
              <Card.Title className='font-bold text-2xl mt-3 ml-2'>HTML 5</Card.Title>
            </Card.Body>
          </Card> 
        </div> 
        <div className='text-white'>
          <Card style={{ width: '8rem'}}>
            <Card.Img variant="top" style={{height:'100px', width:'100px'}} src="https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png" className='mt-11 w-full h-auto grayscale transition duration-500 ease-in-out transform hover:grayscale-0 hover:scale-110'/>
            {/* className="w-full h-auto grayscale transition duration-500 ease-in-out transform hover:grayscale-0 hover:scale-110" */}
            <Card.Body>
              <Card.Title className='font-bold text-2xl mt-3 ml-7'>CSS</Card.Title>
            </Card.Body>
          </Card> 
        </div>
        <div className='text-white'>
          <Card style={{ width: '8rem'}}>
            <Card.Img variant="top" style={{height:'100px', width:'100px'}} src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png" className='mt-11 w-full h-auto grayscale transition duration-500 ease-in-out transform hover:grayscale-0 hover:scale-110'/>
            {/* className="w-full h-auto grayscale transition duration-500 ease-in-out transform hover:grayscale-0 hover:scale-110" */}
            <Card.Body>
              <Card.Title className='font-bold text-2xl mt-3'>JavaScript</Card.Title>
            </Card.Body>
          </Card> 
        </div>
        <div className='text-white'>
          <Card style={{ width: '8rem'}}>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" className='mt-11 w-full h-auto grayscale transition duration-500 ease-in-out transform hover:grayscale-0 hover:scale-110'/>
            {/* className="w-full h-auto grayscale transition duration-500 ease-in-out transform hover:grayscale-0 hover:scale-110" */}
            <Card.Body>
              <Card.Title className='font-bold text-2xl mt-3 flex items-center justify-center'>Bootstrap</Card.Title>
            </Card.Body>
          </Card> 
        </div>
        <div className='text-white'>
          <Card style={{ width: '8rem'}}>
            <Card.Img variant="top" src={"./src/assets/reactlogo.png"} className='mt-4 w-full h-auto grayscale transition duration-500 ease-in-out transform hover:grayscale-0 hover:scale-110'/>
            {/* className="w-full h-auto grayscale transition duration-500 ease-in-out transform hover:grayscale-0 hover:scale-110" */}
            <Card.Body>
              <Card.Title className='font-bold text-2xl mt-3 flex items-center justify-center'>React</Card.Title>
            </Card.Body>
          </Card> 
        </div>
      </div>          
    </div>
    </>
  )
}

export default Skills