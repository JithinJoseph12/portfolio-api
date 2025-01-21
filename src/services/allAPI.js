import SERVERURL from "./serverURL";
import commonAPI from "./commonAPI";

//saveVideoAPI - use POST method,used by add component to:http://localhost:3000/uploadVideos  
export const saveVideoAPI = async (videoDetails)=>{
  return await commonAPI("POST",`${SERVERURL}/uploadVideos`,videoDetails)
}


//getALLVideoAPI - use GET method,used by view component to:http://localhost:3000/uploadVideos  
export const getALLVideoAPI = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/uploadVideos`,"")
  }

  //deleteVideoAPI -  delete http request to,used by view component to :http://localhost:3000/uploadVideos  from videocard
  export const deleteVideoApi = async (id)=>{
    return await commonAPI(`DELETE`, `${SERVERURL}/uploadVideos/${id}`,{})
 }