import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselBox.css";
import { useStore } from "../../redux/store";
import Loader from "../loader/Loader";

const CarouselBox = (props) => {
  const [state] = useStore();
  return (
    <>
      {props.loading && <Loader />}
      <Carousel>
        <Carousel.Item>
          <img
            height='600'
            className='d-block w-100'
            src='https://www.rabstol.net/uploads/gallery/main/633/rabstol_net_canada_31.jpg'
            alt='nature'
          />
          <Carousel.Caption>
            <h1 className='carousel_caption'>{state.lang.carouselTitle}</h1>
            <p className='carousel_caption'>{state.lang.carouselTxt}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height='600'
            className='d-block w-100'
            src='https://img2.goodfon.ru/wallpaper/nbig/2/b4/priroda-reka-mostik-otrazheniya.jpg'
            alt='nature'
          />
          <Carousel.Caption>
            <h1 className='carousel_caption'>{state.lang.carouselTitle}</h1>
            <p className='carousel_caption'>{state.lang.carouselTxt}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height='600'
            className='d-block w-100'
            src='https://img5.goodfon.ru/wallpaper/nbig/e/37/gory-nebo-priroda-23.jpg'
            alt='nature'
          />
          <Carousel.Caption>
            <h1 className='carousel_caption'>{state.lang.carouselTitle}</h1>
            <p className='carousel_caption'>{state.lang.carouselTxt}</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </>
  );
};

export default CarouselBox;
