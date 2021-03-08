import React, { Component } from "react";
import CarouselBox from "./../Components/CarouselBox";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./../Components/Card";
import "./../styles/Home.css";
import GalleryHome from "./../Components/GalleryHome";

export default class MainPage extends Component {
  render() {
    return (
      <>
        <main>
          <section>
            <CarouselBox />
          </section>
          <section className='section best_tours_section'>
            <div className='container'>
              <h2 className='title best_tours'>our best tours</h2>
              <div className='card_container'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </section>
          <section className='section gallery_section'>
            <div className='container'>
              <h2 className='title'>gallery</h2>
            </div>
            <div className='row row-50'>
              <GalleryHome />
              <GalleryHome />
              <GalleryHome />
              <GalleryHome />
              <GalleryHome />
              <GalleryHome />
            </div>
          </section>
        </main>
      </>
    );
  }
}
