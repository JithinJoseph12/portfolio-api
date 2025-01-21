import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { deleteVideoApi } from '../services/allAPI';
import './VideoCard.css'
import { Link } from 'react-router-dom';

const VideoCard = ({displayData, setDeleteVideoResponseFromVideoCard}) => {
    
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const  removeVideo = async (id)=>{
    try {
      const result = await deleteVideoApi(id)
      setDeleteVideoResponseFromVideoCard(result)
      
    } catch (err) {
        console.log(err);
        
    }
  }

  return (
    <>
  <Card 
  style={{
    width: '18rem',
    height: '16rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)', // Shadow effect
    borderRadius: '10px', // Rounded corners
    transition: 'transform 0.3s, box-shadow 0.3s', // Smooth hover effect
  }} 
  className="hover-card"
>
  <Card.Img 
    style={{ height: '10rem', borderRadius: '10px 10px 0 0', cursor: 'pointer' }} 
    onClick={handleShow} 
    variant="top" 
    src={displayData?.imageUrl} 
  />
  <Card.Body>
    <Card.Text className="d-flex justify-content-between align-items-center">
      <p style={{ margin: 0, fontWeight: 'bold', color: '#333' }}>{displayData?.caption}</p>
      <a href={displayData?.youtubeLink}><img width={'30px'} src="https://png.pngtree.com/element_our/20190529/ourmid/pngtree-cartoon-link-icon-download-image_1196815.jpg" alt="" /></a>
      <button 
        onClick={() => removeVideo(displayData?.id)} 
        className="btn" 
        style={{ backgroundColor: 'transparent', border: 'none' }}
      >
        <i className="fa-solid fa-trash text-danger"></i>
      </button>
    </Card.Text>
  </Card.Body>
</Card>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Website</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="480" src={`${displayData?.youtubeLink}?autoplay=1`}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default VideoCard