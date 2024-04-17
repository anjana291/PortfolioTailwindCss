import React from 'react'
import Card from 'react-bootstrap/Card';


function Portfolio() {
  return (
    <>
      <div className='mt-52'>
        <h1 className='list text-4xl text-white flex items-center justify-center'>My <span className='ml-3 text-orange-500'>Portfolio</span></h1>
        <div className='grid sm:grid-cols-3 gap-4 mt-10 py-5 ml-20'>
          <div className='text-white'>
          <Card style={{ width: '250px',marginLeft:'50px' }}>
              <Card.Img variant="top" src="https://static01.nyt.com/images/2023/06/19/travel/19walking-gear-top/19walking-gear-top-superJumbo.jpg" style={{height:'300px'}} className='rounded-3xl'/>
              <Card.Body>
                <Card.Title>Travel Website</Card.Title>
                <div className=''>
                  <Card.Text>
                   A Calculator using HTML, CSS and JavaScript
                   </Card.Text>
                </div>
               </Card.Body>
           </Card>
          </div>
          <div className='text-white'>
          <Card style={{ width: '250px',marginLeft:'50px' }}>
              <Card.Img variant="top" src="https://png.pngtree.com/element_our/png/20180930/calculator-icon-design-vector-png_119229.jpg" style={{height:'300px'}} className='rounded-3xl'/>
              <Card.Body>
                <Card.Title>Calculator</Card.Title>
                <Card.Text>
                 A Calculator using HTML, CSS and JavaScript
                 </Card.Text>
               </Card.Body>
           </Card>
          </div>
          <div className='text-white'>
          <Card style={{ width: '250px',marginLeft:'50px' }}>
              <Card.Img variant="top" src="https://www.boostability.com/content/wp-content/uploads/sites/2/2016/05/July-21st-Target-Country-e1626470100786.jpg" style={{height:'300px'}} className='rounded-3xl'/>
              <Card.Body>
                 <Card.Title>Country Search Website</Card.Title>
                 <Card.Text>
                  A website to search country and displays
                 </Card.Text>
              </Card.Body>
          </Card>
          </div>
          <div className='text-white mt-4'>
          <Card className='' style={{ width: '250px',marginLeft:'50px' }}>
              <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/028/116/820/original/magnifying-glass-weather-report-icon-symbols-search-discovery-cloud-research-analysis-concept-3d-isolated-illustration-design-cartoon-pastel-minimal-style-for-design-ux-ui-print-ad-vector.jpg" style={{height:'300px'}} className='rounded-3xl'/>
              <Card.Body>
                <Card.Title>Weather Search Website</Card.Title>
                <Card.Text>
                 A Calculator using HTML, CSS and JavaScript
                 </Card.Text>
               </Card.Body>
           </Card>
          </div>
          <div className='text-white mt-4'>
          <Card style={{ width: '250px',marginLeft:'50px' }}>
              <Card.Img variant="top" src="https://play-lh.googleusercontent.com/SsmmlKoGqOhWqlJRomR9vCIUhNzA5S8prBlwV1ngRgjxTcrn_A6bhbyXVFmn9-p7sfQ" style={{height:'300px'}} className=''/>
              <Card.Body>
                <Card.Title>BMI Calculator</Card.Title>
                <div className=''>
                  <Card.Text>
                   A Calculator using HTML, CSS and JavaScript
                   </Card.Text>
                </div>
               </Card.Body>
           </Card>
          </div>
          <div className='text-white mt-4'>
          <Card style={{ width: '250px',marginLeft:'50px' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/68/3c/96/683c969bf2e29f76fb4789b6958327ff.jpg" style={{height:'300px'}} className='rounded-3xl'/>
              <Card.Body>
                <Card.Title>Registration Form</Card.Title>
                <div className=''>
                  <Card.Text>
                   A Calculator using HTML, CSS and JavaScript
                   </Card.Text>
                </div>
               </Card.Body>
           </Card>
          </div>
          
        </div> 
      </div>       
    </>
  )
}

export default Portfolio