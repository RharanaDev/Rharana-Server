import React from "react";
import {Link} from "react-router-dom";
import {useSpring, animated} from "react-spring";

const Movie = (props) =>{

    return (
        <div>
        <Link to = {props.video}>
          <img src = {props.image} style = {{width: "100%"}}></img> 
        </Link>
      </div>
    );
  }
  
  export default Movie;