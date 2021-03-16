import React, { Component, useState } from "react";
import CarouselBox from "../../Components/carouselBox/CarouselBox";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../../Components/card/Card";
import "./Home.css";
import GalleryHome from "../../Components/galleryHome/GalleryHome";
import { useStore } from "../../redux/store";
import Loader from "../../Components/loader/Loader";

const MainPage = (props) => {
  const [state] = useStore();
  const countries = props.countries;
  const lang = props.lang;
  console.log(lang);

  return (
    <>
      <main>
        <section>
          <CarouselBox loading={props.loading} />
        </section>
        <section className='section best_tours_section'>
          <div className='container'>
            <h2 className='title best_tours'>{state.lang.ourBestTour}</h2>
            <div className='card_container'>
              {props.loading && <Loader />}
              {countries.map((country, index) => {
                if (lang == "EN") {
                  return (
                    <Card
                      loading={props.loading}
                      linkId={country._id}
                      countryImg={country.countryImg}
                      country={country.lang.EN.country}
                      key={country._id}
                      capitalCity={country.lang.EN.capitalCity}
                    />
                  );
                } else if (lang == "RU") {
                  return (
                    <Card
                      linkId={country._id}
                      countryImg={country.countryImg}
                      country={country.lang.RU.country}
                      key={country._id}
                      capitalCity={country.lang.RU.capitalCity}
                    />
                  );
                } else if (lang == "DE") {
                  return (
                    <Card
                      linkId={country._id}
                      countryImg={country.countryImg}
                      country={country.lang.DE.country}
                      key={country._id}
                      capitalCity={country.lang.DE.capitalCity}
                    />
                  );
                }
              })}
            </div>
          </div>
        </section>
        <section className='section gallery_section'>
          <div className='container'>
            <h2 className='title'>gallery</h2>
          </div>
          <div className='row row-50 gallery_box'>
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
};

export default MainPage;
