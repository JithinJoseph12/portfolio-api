import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getALLVideoAPI } from '../services/allAPI'




const View = ({addResponseFromHome}) => {
    const [deleteVideoResponseFromVideoCard , setDeleteVideoResponseFromVideoCard] = useState("")
    const [allVideos, setAllVideos] = useState([])

    useEffect(()=>{
        getALLVideos()
      },[addResponseFromHome,deleteVideoResponseFromVideoCard])
      
      console.log(allVideos);
      
    
      const getALLVideos= async()=>{
        try{
          const result = await getALLVideoAPI()
          console.log(result);
          if(result.status>=200 && result.status<300)
          {
            setAllVideos(result.data)
          }
        } catch (err) {
          console.log(err);  
        }
      }
  return (
    <>
    <Row>
        {
            allVideos?.length>0?
            allVideos?.map(video=>(
                <Col className='mb-2' sm={12}
         md={6} lg={4}>
            <VideoCard setDeleteVideoResponseFromVideoCard={setDeleteVideoResponseFromVideoCard}  displayData={video}/>
        </Col>
                
            ))
            :
            
            <div className='fw-bolder text-danger fs-5'>No Videos Uploaded yet!!</div>

        }
        
    </Row>
    </>
  )
}

export default View