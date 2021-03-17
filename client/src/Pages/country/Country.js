import React, { useEffect, useState } from "react";
import "./Country.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import CarouselAttractions from "../../Components/carouselAttractions/CarouselAttractions";
import CurrencyWidget from "../../Components/currencyWidget/CurrencyWidget";
import WeatherWidget from "../../Components/weatherWidget/weatherWidget";
import CountryTime from "../../Components/countryTime/CountryTime";
import StarRatingEditable from "./../../Components//starRating/StarRatingEditable";
import StarRatingNonEditable from "./../../Components//starRating/StarRatingNonEditable";
import ScrollToTop from "../../Components/scrollToTop/ScrollToTop";
import { useStore } from "../../redux/store";
import Loader from "../../Components/loader/Loader";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function Country(props) {
  const [country, setCountry] = useState(null);
  const [state] = useStore();
  const [countryLang, setLang] = useState(null);

  const fullScreenCarousel = useFullScreenHandle();
  const fullScreenVideo = useFullScreenHandle();
  const fullScreenMap = useFullScreenHandle();

  useEffect(() => {
    const countryId = window.location.pathname;
    fetch(`/api${countryId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setCountry(result);
          if (country !== null) {
            if (props.lang === "EN") {
              setLang(country.lang.EN);
            } else if (props.lang === "RU") {
              setLang(country.lang.RU);
            } else if (props.lang === "DE") {
              setLang(country.lang.DE);
            }
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  console.log(country);

  let userData;
  let userId;

  if (window.localStorage.getItem("userData")) {
    userData = JSON.parse(window.localStorage.getItem("userData"));
    userId = userData.userId;
  }

  return (
    <div>
      <main className='main'>
        {props.loading && <Loader />}
        {country ? (
          <div>
            <section>
              <img
                className='country_image'
                src={country.countryImg}
                alt='country'
              />
              {userId ? <StarRatingEditable /> : <StarRatingNonEditable />}
            </section>
            <section className='section_about'>
              <Container fluid>
                <Row>
                  <Col mg='4'>
                    <div className='description_country'>
                      <h2>
                        {props.lang === "EN"
                          ? country.lang.EN.country
                          : props.lang === "RU"
                          ? country.lang.RU.country
                          : props.lang === "DE"
                          ? country.lang.DE.country
                          : ""}
                        ,{" "}
                        {props.lang === "EN"
                          ? country.lang.EN.capitalCity
                          : props.lang === "RU"
                          ? country.lang.RU.capitalCity
                          : props.lang === "DE"
                          ? country.lang.DE.capitalCity
                          : ""}
                      </h2>
                      <p>
                        {props.lang === "EN"
                          ? country.lang.EN.description
                          : props.lang === "RU"
                          ? country.lang.RU.description
                          : props.lang === "DE"
                          ? country.lang.DE.description
                          : ""}
                      </p>
                    </div>
                    <div className='carousel_attractions'>
                      <h2>
                        {state.lang.SightsOf}{" "}
                        {props.lang === "EN"
                          ? country.lang.EN.country
                          : props.lang === "RU"
                          ? country.lang.RU.country
                          : props.lang === "DE"
                          ? country.lang.DE.country
                          : ""}
                      </h2>

                      <div className='carousel_box'>
                        <div
                          className='btn_carousel'
                          onClick={fullScreenCarousel.enter}
                        >
                          <img
                            width='30'
                            src='https://img.pngio.com/full-screen-vector-icon-full-screen-maximize-full-screen-icon-cool-black-pngs-full-screen-640_640.png'
                          />
                        </div>
                      </div>
                      <FullScreen handle={fullScreenCarousel}>
                        <CarouselAttractions
                          galeryImages={country.galeryImages}
                        />
                      </FullScreen>
                    </div>

                    <div className='video'>
                      <h2>{state.lang.video}</h2>
                      <div className='video_box'>
                        <div
                          className='btn_video'
                          onClick={fullScreenVideo.enter}
                        >
                          <img
                            width='30'
                            src='https://img.pngio.com/full-screen-vector-icon-full-screen-maximize-full-screen-icon-cool-black-pngs-full-screen-640_640.png'
                          />
                        </div>
                      </div>
                      <FullScreen handle={fullScreenVideo}>
                        <iframe
                          src={country.videoUrl}
                          frameBorder='0'
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                          allowFullScreen
                        ></iframe>
                      </FullScreen>
                    </div>
                    <div id='map'>
                      <h2>{state.lang.map}</h2>
                      <div className='map_box'>
                        <div className='btn_map' onClick={fullScreenMap.enter}>
                          <img
                            width='30'
                            src='https://img.pngio.com/full-screen-vector-icon-full-screen-maximize-full-screen-icon-cool-black-pngs-full-screen-640_640.png'
                          />
                        </div>
                      </div>
                      <FullScreen handle={fullScreenMap}>
                        <iframe
                          src={country.mapUrl}
                          allowFullScreen=''
                          loading='lazy'
                        ></iframe>
                      </FullScreen>
                    </div>
                  </Col>
                  <Col md='3' className='sidebar sidebar_right'>
                    <div className='mt-4 widget_weather'>
                      <WeatherWidget
                        capitalCity={country.lang.EN.capitalCity}
                      />
                    </div>
                    <div className='mt-4 widget_currency'>
                      <CurrencyWidget currency={country.currency} />
                    </div>
                    <div className='mt-4 widget_time'>
                      <CountryTime
                        title={state.lang.TimeIn}
                        lat={country.coords.lat}
                        lon={country.coords.lon}
                        cityName={country.lang[props.lang].capitalCity}
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}
export default Country;
