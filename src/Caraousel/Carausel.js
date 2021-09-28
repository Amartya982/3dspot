import React from "react";
import Slider from "react-slick";
import model from "../assets/model.jpg"
import model2 from "../assets/model2.jpeg"
import model3 from "../assets/model3.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function SimpleSlider() {
  
  return (
    <div className="container-fluid">
      <div className="row">
       
    <div class="carousel-wrapper ms-5 mt-5" style={{width:"50em",position:"relative",left:"15em",top:"3em"}}>
    <Carousel infiniteLoop useKeyboardArrows autoPlay>
      <div>
        <img src={model} />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src={model2} />
    </div>
    <div>
        <img src={model3} />
        <p className="legend">Legend 3</p>
    </div>
    </Carousel>
    </div>
    </div>
    </div>
  

  )}