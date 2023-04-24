import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSpring, animated} from "react-spring";

const Movie = (props) =>{

    const [inHover, setHover] = useState(false);
    
    const fade = useSpring({

        config:{
            duration: 250,
        },
        from: {
            position: "absolute",
            textAlign: "center",
            verticalAlign: "middle",
            lineHeight: "25vh",
            fontSize: "2em",
            width: "22.5vw",
            height: "100%",
            zIndex: 20,
            backgroundColor: "black",
            opacity:0,
            color: "transparent"
        },
        to: {
            opacity: inHover? 0.8:0,
            color: inHover? "white":"transparent"
        },
    });

    return (
        <div>
        <Link to = {props.video}  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <animated.div style = {fade}>{props.title}</animated.div>
            <img src = {props.image} style = {{width: "22.5vw"}}></img>

        </Link>
      </div>
    );
  }
  
  export default Movie;