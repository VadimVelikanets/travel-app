import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./../styles/CarouselBox.css";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            height='600'
            className='d-block w-100'
            src='https://www.rabstol.net/uploads/gallery/main/633/rabstol_net_canada_31.jpg'
            alt='nature'
          />
          <Carousel.Caption>
            <h3 className='carousel_caption'>Lorem lorem lorem </h3>
            <p className='carousel_caption'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              distinctio saepe laudantium nobis sed asperiores molestias magni
              ab. Error, corporis!
            </p>
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
            <h3 className='carousel_caption'>Lorem lorem lorem </h3>
            <p className='carousel_caption'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              distinctio saepe laudantium nobis sed asperiores molestias magni
              ab. Error, corporis!
            </p>
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
            <h3 className='carousel_caption'>Lorem lorem lorem </h3>
            <p className='carousel_caption'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              distinctio saepe laudantium nobis sed asperiores molestias magni
              ab. Error, corporis!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height='600'
            className='d-block w-100'
            src='https://poster.nicefon.ru/2017_02/19/1080x610/200435f9edecec64e8e0e4.jpg'
            alt='nature'
          />
          <Carousel.Caption>
            <h3 className='carousel_caption'>Lorem lorem lorem </h3>
            <p className='carousel_caption'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              distinctio saepe laudantium nobis sed asperiores molestias magni
              ab. Error, corporis!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height='600'
            className='d-block w-100'
            src='https://klike.net/uploads/posts/2019-11/1574605275_11.jpg'
            alt='nature'
          />
          <Carousel.Caption>
            <h3 className='carousel_caption'>Lorem lorem lorem </h3>
            <p className='carousel_caption'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              distinctio saepe laudantium nobis sed asperiores molestias magni
              ab. Error, corporis!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
