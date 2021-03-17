import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
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

function Country(props) {
  const [country, setCountry] = useState(null);
  const [state] = useStore();
  const [countryLang, setLang] = useState(null);
  const [activeCarousel, setActiveCarousel] = useState(false);

  const openCarouselHandler = () => {
    setActiveCarousel(true);
  };

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
                        <Button
                          className='btn_carousel'
                          variant='secondary'
                          onClick={openCarouselHandler}
                        >
                          <img
                            width='25'
                            src={
                              activeCarousel
                                ? "https://image.flaticon.com/icons/png/512/49/49702.png"
                                : "https://cdn.iconscout.com/icon/premium/png-256-thumb/expand-2520895-2115146.png"
                            }
                            alt='icon button'
                          />
                        </Button>
                        <CarouselAttractions galeryImages={country.galeryImages}/>
                      </div>
                    </div>
                    <div className='video'>
                      <h2>{state.lang.video}</h2>
                      <iframe
                        width='847'
                        height='315'
                        src={country.videoUrl}
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div id='map'>
                      <h2>{state.lang.map}</h2>
                      <iframe
                        src={country.mapUrl}
                        width='847'
                        height='450'
                        allowFullScreen=''
                        loading='lazy'
                      ></iframe>
                    </div>
                  </Col>
                  <Col md='3' className='sidebar sidebar_right'>
                    <div className='mt-4 widget_weather'>
                      <WeatherWidget
                        capitalCity={country.lang.EN.capitalCity}
                      />
                    </div>
                                        <div className='mt-4 widget_currency'>
                                            <CurrencyWidget currency={country.currency}/>
                                        </div>
                                        <div className='mt-4 widget_time'>
                                            <CountryTime 
                                                title={state.lang.TimeIn}
                                                lat={country.coords.lat}
                                                lon={country.coords.lon}
                                                cityName={country.lang[props.lang].capitalCity} />
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
