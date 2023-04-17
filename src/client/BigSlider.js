import Slider from "react-slick";
import React, { Component } from "react";

const styleButton = 
{
    position: "relative",
    backgroundColor: "transparent",
    borderColor: "transparent",
};

const styleIcon = 
{ color: "rgba(255,255,255,1)",
fontSize: "50px"
};


export default class BigSlider extends Component{
  render()
  {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      prevArrow: <div/>,
      nextArrow: <div/>,
      arrows: false
    }
  
    return (
    <div>
    {/* <div style={{position:"absolute", width:"350px", height:"60px", zIndex:3, top:"730px", left:"4%"}}> 
      <button className = "material-icon-btn" style = {styleButton}>
        <i className = "material-icons" style = {styleIcon}>play_arrow</i>
      </button>
      <button className = "material-icon-btn" style = {styleButton}>
        <i className = "material-icons" style = {styleIcon}>watch_later</i>
      </button>
      <button className = "material-icon-btn" style = {styleButton}>
        <i className = "material-icons" style = {styleIcon}>get_app</i>
      </button>
      <button className = "material-icon-btn" style = {styleButton}>
        <i className = "material-icons" style = {styleIcon}>info</i>
      </button>
    </div> */}
    <div style={{position:"absolute", width:"100%", height:"100%", zIndex:-1, top: "0vh"}}>

        <Slider {...settings} style={{width:"100%", height:"100%", position:"absolute"}} >
        <div>
            <img src = "http://localhost:3000/image/La_Amenaza_Fantasma.jpg" style = {{width: "100%"}}></img>
          </div>
          <div>
            <img src = "http://localhost:3000/image/El_Ataque_De_Los_Clones.jpg" style = {{width: "100%"}}></img>
          </div>
          <div>
            <img src = "http://localhost:3000/image/La_Venganza_De_Los_Sith.jpg" style = {{width: "100%"}}></img>
          </div>
          <div className = "white">
            <img src = "http://localhost:3000/image/Una_Nueva_Esperanza.jpg" style = {{width: "100%"}}></img>
          </div>
          <div className = "black">
            <img src = "http://localhost:3000/image/El_Imperio_Contraataca.jpg" style = {{width: "100%"}}></img>
          </div>
          <div className = "white">
            <img src = "http://localhost:3000/image/El_Retorno_Del_Jedi.jpg" style = {{width: "100%"}}></img>
          </div>
        </Slider>
      </div>
    </div>
    )
  }
};