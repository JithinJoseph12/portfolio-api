import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'


const Projects = () => {
  const [addResponseFromHome,setAddResponseFromHome] = useState("")

  return (
    <div  style={{paddingTop:'150px'}}>
      <h1  style={{textAlign: 'center', 
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
      marginBottom:'50px'
  }}
>
  ADD YOUR PROJECTS
</h1>

      <div className='d-flex align-items-center'>
        <View addResponseFromHome={addResponseFromHome}/>
        <Add setAddResponseFromHome={setAddResponseFromHome}/>
      </div>

    </div>
  )
}

export default Projects