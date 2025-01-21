import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { saveVideoAPI } from '../services/allAPI'

const Add = ({setAddResponseFromHome}) => {
    const [invalidYoutubelink,setInvalidYoutubeLink]=useState(false)

    const [videoDetails, setVideoDetails]=useState({
            caption:"",imageUrl:"",youtubeLink:""
          })
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    
    const extractingEmbedLinkFromYourYoutubeLink = (userInputYoutubeLink) => {
      // Steps for verifying YouTube link
      if (
        userInputYoutubeLink.includes("vercel.app") || 
        userInputYoutubeLink.includes("netlify.app") || 
        userInputYoutubeLink.includes("github.io")
      ) {
        setInvalidYoutubeLink(false);
        setVideoDetails({
          ...videoDetails,
          youtubeLink: userInputYoutubeLink, // Assign the valid link directly
        });
      } else {
        setInvalidYoutubeLink(true);
        setVideoDetails({
          ...videoDetails,
          youtubeLink: "",
        });
      }
    };
    

    const handleUploadVideo = async () => {
      // Destructuring video details
      const { caption, imageUrl, youtubeLink } = videoDetails;
    
      if (caption && imageUrl && youtubeLink) {
        try {
          const result = await saveVideoAPI(videoDetails);
          console.log(result);
    
          if (result.status >= 200 && result.status < 300) {
            alert("Video uploaded successfully!");
            handleClose();
            // Pass the result to view
            setAddResponseFromHome(result);
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        alert("Please fill out the form...!");
      }
    };
    
 
 
 
    return (
    <>
  <div className="px-4 d-flex justify-content-center align-items-center">
  <button 
    onClick={handleShow} 
    className="btn rounded-5 fw-bold fs-5 custom-button" 
    style={{
      width: '13rem',
      height: '15rem', 
      border: '2px ', 
      boxShadow: '0 4px 8px rgba(43, 43, 43, 0.8)', 
      backgroundColor: 'white', 
      color: '#ffc107', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'transform 0.3s, box-shadow 0.3s', // Hover effect
    }}
    
  >
    +
  </button>
</div>


    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Projects</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='border rounded p-3'>
               <FloatingLabel controlId="floatingCaption" label="Project Name">
               <Form.Control  onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})}  type="text" placeholder="Video Caption" />
               </FloatingLabel>

               <FloatingLabel className='mt-2' controlId="floatingUrl" label="Project Image URL">
               <Form.Control onChange={e=>setVideoDetails({...videoDetails,imageUrl:e.target.value})}   type="text" placeholder="Video Image URL" />
               </FloatingLabel>

               <FloatingLabel className='mt-2'   controlId="floatingLink" label="Project Video Link">
               <Form.Control  onChange={e=>extractingEmbedLinkFromYourYoutubeLink(e.target.value)}    type="text" placeholder="Video Youtube Link" />
               </FloatingLabel>
               {
                invalidYoutubelink && 
                <div className='text-danger fw-bolder'>
                    Invalid Project Link
                </div>
               }
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUploadVideo} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add