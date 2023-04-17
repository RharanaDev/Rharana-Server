import Slider from "react-slick";
import React, { Component } from "react";
import {Link} from "react-router-dom";

const styleIcon = { 
    color: "black",
    position: "relative",
    top: "38%",
    right: "2px"
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "white", height: "100%", textAlign: "center", right: "0px", top: "49%", zIndex: "1", opacity: "25%"}}
        onClick={onClick}>
            <i className="material-icons" style = {styleIcon}>chevron_right</i>
        </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, background: "white", height: "100%", textAlign: "center", top: "49%", left: "0px", zIndex: "1", opacity: "25%"}}
        onClick={onClick}>
            <i className="material-icons" style = {styleIcon}>chevron_left</i>
        </div>
    );
  }


export default class SimpleSlider extends Component{
  constructor()
  {
    super();
    this.state = {
    videos: []
    }
  }

  fetchMovies()
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
      //Remember setState is asynchronous!
      this.setState({ videos: data }, () => 
      console.log(this.state.videos));
    })

    .catch(error => console.warn(error));
  }

  componentDidMount()
  {
    this.fetchMovies();
  }

  render()
  {
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
    }
    
    
    return (
      <div style={{textAlign: "center", position:"relative", zIndex:2,width:"100%", top: "80vh", paddingTop: "5vh"}}>
        <Slider {...settings} style={{width:"90%", position:"relative", left: "5%"}}>
        {
          this.state.videos.map(v=>{
            const videoLink = "/play/" + v._id;
            const imgLink = "/image/" + v.imgPath;
            console.log(imgLink)
            return(
            <div>
              <Link to = {videoLink}>
                <img src = {imgLink} style = {{width: "100%"}}></img> 
              </Link>
            </div>
            )
          })
        }
        </Slider>
      </div>
    )
  }
};