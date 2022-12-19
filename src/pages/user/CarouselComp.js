import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../../assets/css/carousel.css'

import Img1 from '../../assets/img/1.png'
import Img2 from '../../assets/img/2.png'
import Img3 from '../../assets/img/3.png'
import Img4 from '../../assets/img/4.png'
import Img5 from '../../assets/img/5.png'
import Img6 from '../../assets/img/6.png'
import Img7 from '../../assets/img/7.png'


const rows = [
    {
      "name":"Frozen yoghurt",
      "img":Img1
    },
    {
      "name":"Frozen yoghurt",
      "img":Img2
    },
    {
      "name":"Frozen yoghurt",
      "img":Img3
    },
    {
      "name":"Frozen yoghurt",
      "img":Img4
    },
    {
      "name":"Frozen yoghurt",
      "img":Img5
    },
    {
      "name":"Frozen yoghurt",
      "img":Img6
    },
    {
      "name":"Frozen yoghurt",
      "img":Img7
    }
  ];

let CarouselComp = () => {
  return (
    <Carousel className="carouselContainer">
        {rows.map((row) => (
            <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={row.img}
              alt={row.name}
            />
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default CarouselComp;