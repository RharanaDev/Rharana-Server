import React, {Component, useState, useEffect} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./components/MovieSlider";
import BigSlider from "./BigSlider";

const styleButton = 
{
    boxSizing:"content-box",
    position: "relative",
    backgroundColor: "transparent",
    borderColor: "transparent",
    paddingLeft: "1vw",
    paddingRight: "1vw",
    textAlign: "center",
    border: 0,
    margin: 0,
};
const starWars=
{
    position: "relative",
    fontFamily: "'Star Wars', sans-serif",
    fontSize: "min(2em, 6vh)",
    opacity: 1,
}
const styleIcon = 
{   
    position: "relative",
    top: "0vh",
    margin:"0vh",
    color: "white",
    fontSize: "min(2em, 6vh)",
    width: "min(2em, 6vh)",
    height: "min(2em, 6vw)",
};

const styleDivRight =
{ 
    position: "absolute",
    top: "0vh",
    left: "80vw",
    width: "30vw",
    textAlign: "left",
    height: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
};

const styleDivLeft = 
{ 
    position: "absolute",
    top: "0vh",
    left: "0vw",
    padding: 0,
    width: "30vw",
    textAlign: "left",
    height: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
};
const styleNav = { 

    position: "fixed", 
    zIndex: 3,
    width: "100vw",
    opacity: "50%",
    padding: 0,
    margin: 0,
    border: 0,
};

export default class App extends Component{

    render() {
        return(
            <div>
                <BigSlider/>
                <nav className="black" style={styleNav}>
                    <link href="https://fonts.cdnfonts.com/css/star-wars" rel="stylesheet"></link>
                    <div style = {{position: "relative",width: "40vw", height: "100%", left: "30vw", textAlign:"center", overflow: "hidden",textOverflow: "ellipsis",whiteSpace: "nowrap", margin: "0"}}>
                        <a style={starWars} href= "/">STReAmWARE</a>
                    </div>

                    <div style = {styleDivLeft}>
                        <button style = {styleButton}>
                            <i className = "material-icons" style = {styleIcon}>home</i>
                        </button>
                        <button style = {styleButton}>
                            <i className = "material-icons" style = {styleIcon}>person</i>
                        </button>
                        <button style = {styleButton}>
                            <i className = "material-icons" style = {styleIcon}>watch_later</i>
                        </button>
                        <button style = {styleButton}>
                            <i className = "material-icons" style = {styleIcon}>smoking_rooms</i>
                        </button>
                        <button style = {styleButton}>
                            <i className = "material-icons" style = {styleIcon}>search</i>
                        </button>


                    </div>

                    <div className = "container right" style = {styleDivRight}>
                        <button className = "material-icon-btn" style = {styleButton}>
                            <i className = "material-icons" style = {styleIcon}>add</i>
                        </button>
                        <button className = "material-icon-btn" style = {styleButton}>
                            <i className = "material-icons" style = {styleIcon}>edit</i>
                        </button>
                        <button className = "material-icon-btn" style = {styleButton}>
                            <i className = "material-icons" style = {styleIcon}>delete</i>
                        </button>

                    </div>

                </nav>
                <SimpleSlider/>
                <div style={{backgroundImage: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))", position: "absolute", width:"100vw", height:"100vh", zIndex: 1, top: "0vh"}}></div>
                <div style={{backgroundColor: "black", position: "absolute", width:"100%", height:"100%", zIndex: 0, top: "100vh"}}></div>




            </div>
        )
    }
}
