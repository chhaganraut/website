
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useState } from "react";
import ximg from "../images/cousal1.jpg"

const data = [
  {
    image: require('../images/cousal1.jpg'),
    caption: "",
    description: ""
  },
  {
    image: require('../images/cousal2.jpg'),
    caption: "",
    description: ""
  },
  {
    image: require('../images/cousal3.jpg'),
    caption: "",
    description: ""
  }
]
export default function Home() {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ height: '600px' }}>

      <div className='container' >









     
      <div className="carous">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {data.map((slide, i) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide.image}
                  alt="slider image" style={{ width: "100%", height: "570px" }}
                />
                <Carousel.Caption>
                  <h3>{slide.caption}</h3>
                  <p>{slide.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}

        </Carousel>
      </div>
    </div>
    </div>

  )
}
