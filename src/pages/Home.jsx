import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Man from '../assets/man.jpeg'
import { Card, Col, Row } from 'react-bootstrap'
import './Home.css'


const Home = () => {
  return (
    <>
      {/* home */}
      <div style={{paddingTop:'150px'}} className='container'>
          <div className='row align-items-center'>
              <div className='col-5 '>
                <h3 className='fs-1'>Hi, I am<span className=' px-4 text-warning'>JITHIN JOSEPH</span> </h3>
                <p className='wobbly-text'>Full Stack Developer</p>
          <a className='btn btn-info' href="#contact">Contact</a>
                              
              </div>
            <div className='col'></div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div  className=" dual-border-image-container">
            <img    
            src={Man} 
            alt="Portfolio Image" 
            className="img-fluid dual-border-image" 
          />
          </div>
        </div>
      </div>


          {/* about */}
          <div id='about' className='py-5 mt-4'>
            <div>
                <div className="text-center mb-4">
                <h2 style={{textAlign: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'}} className="h1">About <span className=' text-warning'>Me</span></h2>
                <span className="fs-4">Introduction</span>
                </div>
            </div>

            <Row className="align-items-center">
          {/* Image Section */}
          <Col md={6}  className="text-center ">
          <img
  className="image-effect rounded"
  width="400px"
  height="250px"
  src="https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ="
  alt="Co-Working Team"
/>

          </Col>

          {/* Content Section */}
          <Col md={6}>
            <p
             
              className="text-justify fs-5"
            >
              Motivated individual with a strong work ethic and the ability to work
              independently. Possesses excellent organizational and team collaboration
              skills, with experience in conducting technical events. A talented student with
              a systematic approach to learning, demonstrating keen problem-solving
              abilities and attention to detail. Skilled in managing multiple tasks efficiently.
              Eager to contribute innovative solutions and grow in a dynamic tech
              environment. Committed to continuous learning and personal development.
            </p>

            {/* Information Section */}
            <div  className="mt-4">
              <div className="d-flex align-items-center mb-3">
              <i class="fa-solid fa-phone"></i>
                <span className="ms-3 fs-5">9745028972</span>
              </div>
              <div className="d-flex align-items-center mb-3">
              <i class="fa-solid fa-user"></i>                <span className="ms-3 fs-5">Jithin Joseph</span>
              </div>
              <div className="d-flex align-items-center">
              <i class="fa-solid fa-envelope"></i>                <span className="ms-3 fs-5">jithinjoseph250@gmail.com</span>
              </div>
            </div>
          </Col>
        </Row>

          </div>

          {/* Tools */}
          <div id='tools' className='mt-4'>
          <div className="text-center mb-4">
                <h2 style={{textAlign: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'}} className="h1">Let's <span className='text-warning'>talk </span>Tech</h2>
                <span className="fs-4 mb-4">Tools</span>
                </div>

                <marquee>
                <div className='d-flex  mt-4 mb-4 justify-content-between'>

                <Card className="card-hover">
                    <Card.Img
                      className="card-img-top"
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUNmv5o3RyxrDChISZvqb5fG9nxsTQVTxPg&s"
                    />
                    <Card.Body className="card-body-center">
                      <Card.Title className="card-title-center">HTML</Card.Title>
                    </Card.Body>
                  </Card>

                  <Card className="card-hover">
                    <Card.Img
                      className="card-img-top"
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5_pFXLFlros8tRZoOHLVZVI30KJEU411IQ&s"
                    />
                    <Card.Body className="card-body-center">
                      <Card.Title className="card-title-center">React</Card.Title>
                    </Card.Body>
                  </Card>
  
                  <Card className="card-hover">
                    <Card.Img
                      className="card-img-top"
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBVOtPjeWtB39bOsOoOWso3HTiaEF2szC8jA&s"
                    />
                    <Card.Body className="card-body-center">
                      <Card.Title className="card-title-center">BootStrap</Card.Title>
                    </Card.Body>
                  </Card>

                  <Card className="card-hover">
                    <Card.Img
                      className="card-img-top"
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH-oIAvcVSDEN54K4XFbmUAynW9xva-dQ0g&s"
                    />
                    <Card.Body className="card-body-center">
                      <Card.Title className="card-title-center">CSS</Card.Title>
                    </Card.Body>
                  </Card>

                  <Card className="card-hover">
                    <Card.Img
                      className="card-img-top"
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s"
                    />
                    <Card.Body className="card-body-center">
                      <Card.Title className="card-title-center">Tailwind CSS</Card.Title>
                    </Card.Body>
                  </Card>

                  <Card className="card-hover">
                    <Card.Img
                      className="card-img-top"
                      variant="top"
                      src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
                    />
                    <Card.Body className="card-body-center">
                      <Card.Title className="card-title-center">Javascript</Card.Title>
                    </Card.Body>
                  </Card>
                </div>




                </marquee>
            

          </div>
          
    </div>

    </>
  )
}

export default Home