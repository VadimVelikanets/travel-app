import React, {useEffect, useState} from "react";

import "./../styles/Country.css";
import { Container, Row, Col } from "react-bootstrap";
import CarouselAttractions from "./../Components/CarouselAttractions";
import CurrencyWidget from "./../Components/currencyWidget/CurrencyWidget";
import WeatherWidget from "./../Components/weatherWidget/weatherWidget";

export default function Country(props) {
  const [country, setCountry] = useState(null)
  useEffect(() => {
      const countryId = window.location.pathname
      fetch(`/api${countryId}`)
          .then(res => res.json())
          .then(
              (result) => {
                setCountry(result)
              },
              // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
              // чтобы не перехватывать исключения из ошибок в самих компонентах.
              (error) => {
                console.log(error)
              }
          )


  },[]);
  console.log(country)
  return (
    <div>
      <main className='main'>
        {country ?
            <div>
              <section>
                <img
                    className='country_image'
                    src={country.countryImg}
                    alt='country'
                />
              </section>
              <section className='section_about'>
                <Container>
                  <Row>
                    <Col mg='4'>
                      <div className='description_country'>

                        <h2>{country.lang.EN.country}, {country.lang.EN.capitalCity}</h2>
                        <p>
                          {country.lang.EN.description}
                        </p>
                      </div>
                      <div className='carousel_attractions'>
                        <h2>Sights of {country.lang.EN.country}</h2>
                        <CarouselAttractions/>
                      </div>
                      <div className='video'>
                        <h2>Video</h2>
                        <iframe width="560" height="315"
                                src={country.videoUrl}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                      </div>
                      <div id='map'>
                        <h2>Map</h2>
                        <iframe
                            src={country.mapUrl}
                            width='600'
                            height='450'
                            allowFullScreen=''
                            loading='lazy'
                        ></iframe>
                      </div>
                    </Col>
                    <Col md='3' className='sidebar sidebar_right'>
                      <div className='mt-4'>
                        <WeatherWidget capitalCity={country.lang.EN.capitalCity}/>
                      </div>

                      <div className='mt-4'>
                        <CurrencyWidget/>
                      </div>
                      <div className='mt-4'>Время</div>
                    </Col>
                  </Row>

                </Container>
              </section>
            </div>

            : ''
        }

      </main>
    </div>
  );
}
