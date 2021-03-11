import React, { Component, useState } from "react";
import CarouselBox from "./../Components/CarouselBox";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../Components/Card";
import "./../styles/Home.css";
import GalleryHome from "./../Components/GalleryHome";


export default class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      countries: [],
      error: null,
      isLoaded: false,
      lang: 'EN'
    };


  }

  componentDidMount() {
    fetch("/api/country")
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({
                countries: result
              });
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
        )
  }
  render() {
    const {countries } = this.state;
    return (
      <>
        <main>
          <section>
            <CarouselBox />
          </section>
<<<<<<< HEAD:src/Pages/Home.js
          <section className="section best_tours_section">
            <div className="container">
              <h2 className="title best_tours">our best tours</h2>
              <div className="card_container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
=======
          <section className='section best_tours_section'>
            <div className='container'>
              <h2 className='title best_tours'>our best tours</h2>
              <div className='card_container'>

                {countries.map(country => (
                    <Card linkId={country._id} countryImg={country.countryImg} country={country.lang.EN.country} key={country._id} capitalCity={country.lang.EN.capitalCity}/>
              ))}

>>>>>>> 14df2e0f0904c79f83c33be5a0fd707745eba9dd:client/src/Pages/Home.js
              </div>
            </div>
          </section>
          <section className="section gallery_section">
            <div className="container">
              <h2 className="title">gallery</h2>
            </div>
            <div className="row row-50 gallery_box">
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
