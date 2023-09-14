import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
const videoStyle = 
{
  width : "50vw",
  height : "58vh",
}

export default function Video (props){
  const [properties, setProperties] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const {id} = useParams();
  
  useEffect(() => {
    fetchInfo()
  },[])

  function fetchInfo()
  {
    fetch('/video/' + id,
    {
    	method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

    .then(res => res.json())
    .then(data => {
      //Remember setState is asynchronous!
      setProperties(data)
      setIsLoading(false)
    })

    .catch(error => console.warn(error));
  }

  //Component Render
  {
    if(isLoading)
    {
      return null
    }

    return (
    <video style={videoStyle} controls controlsList="nodownload" poster = {'/image/' + properties.imgPath}>
      <source src = {'/stream/' + properties.path} type='video/webm'></source>
    </video>
  )
  }

}