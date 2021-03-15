import React, { Component, useState } from "react";
import CarouselBox from "../../Components/carouselBox/CarouselBox";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../../Components/card/Card";
import "./Home.css";
import GalleryHome from "../../Components/galleryHome/GalleryHome";
import ScrollToTop from "../../Components/scrollToTop/ScrollToTop";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      error: null,
      isLoaded: false,
      lang: "EN",
    };
  }

  componentDidMount() {
    fetch("/api/country")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            countries: result,
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { countries } = this.state;
    return (
      <>
        <main>
          <ScrollToTop />
          <section>
            <CarouselBox />
          </section>

          <section className='section best_tours_section'>
            <div className='container-fluid'>
              <h2 className='title best_tours'>our best tours</h2>
              <div className='card_container'>
                {countries.map((country) => (
                  <Card
                    linkId={country._id}
                    countryImg={country.countryImg}
                    country={country.lang.EN.country}
                    key={country._id}
                    capitalCity={country.lang.EN.capitalCity}
                  />
                ))}
              </div>
            </div>
          </section>
          <section className='section gallery_section'>
            <div className='container fluid'>
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
  }
}
