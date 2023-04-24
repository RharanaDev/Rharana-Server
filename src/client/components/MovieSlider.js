import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

//A slider that displays Movie components

export default function MovieSlider(){

  //Component State Info
  const [videos, setVideos] = useState([])

  //Arrow-subComponent creation
  function Arrow(props) {
    const { className, style, onClick, iconText} = props;
    return (
      <div
        className={className}
        style={{ ...style, ...styles.arrow}}
        onClick={onClick}>

          <i className="material-icons" style = {styles.icon}>{iconText}</i>
      </div>
    );
  }

  //Slider-subcomponent settings
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <Arrow style = {{right: "0px"}} iconText = "chevron_right"/>,
    prevArrow: <Arrow style = {{left: "0px"}} iconText = "chevron_left"/>,
  }

  //Called on mount to fetch
  useEffect(() => {
    fetchMovies()
  },[])

  //TODO: change to asynchronous
  function fetchMovies()
  {
    fetch('/videos',
    {
    	method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

    .then(res => res.json())
    .then(data => {
      console.log(data);
      setVideos(data)
    })

    .catch(error => console.warn(error));
  }
  
  //Final Component Rendering  
  return (
    <div style={styles.container}>
      <Slider {...settings} style={styles.slider}>
      {
        videos.map(v=>{
          const videoLink = "/play/" + v._id;
          const imgLink = "/image/" + v.imgPath;
          const title = v.title;
          return(
            <Movie video = {videoLink} image = {imgLink} title = {title}></Movie>
          )
        })
      }
      </Slider>
    </div>
  )

};

//Styling
const styles = {
  icon : { 
    color: "black",
    position: "relative",
    top: "38%",
    right: "2px"
  },
  
  arrow : {
    background: "white",
    height: "100%",
    textAlign: "center",
    zIndex: "1",
    opacity: "25%"
  },
  
  container :{
    textAlign: "center", 
    position:"relative", 
    zIndex:2, width:"100%", 
    top: "80vh", 
    paddingTop: "5vh"
  },
  
  slider :{
    width:"90vw", 
    position:"relative",
    left: "5vw"
  }
}


