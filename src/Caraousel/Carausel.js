import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap"
import dol from "../assets/dol.jpg"
import r from "../assets/r.jpg"
import "./car.css"
import q from "../assets/q.jpeg"


const Caraus = () => {
    return (
      <Carousel >
      <Carousel.Item  >
        <img
          className="img d-block w-100"
          src={dol}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={r}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={q}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    )
}

export default Caraus
