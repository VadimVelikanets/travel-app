import React from "react";
import { Carousel } from "react-bootstrap";

export default function CarouselAttractions({galeryImages}) {
  const images = galeryImages.map((img) =>
    <Carousel.Item interval={5000}>
      <img
          className="d-block w-100"
          src={img}
          alt="First slide"
      />
      <Carousel.Caption>
        {/*<h3 className="carousel_caption">Versailles Palace (Paris)</h3>*/}
        {/*<p className="carousel_caption">*/}
        {/*  Nulla vitae elit libero, a pharetra augue mollis interdum.*/}
        {/*</p>*/}
      </Carousel.Caption>
    </Carousel.Item>
  )
  return (

    <Carousel>
      {images}

    </Carousel>
  );
}
