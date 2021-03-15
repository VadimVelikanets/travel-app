import React from "react";

import "./../styles/Country.css";
import { Container, Row, Col } from "react-bootstrap";

import CarouselAttractions from "./../Components/CarouselAttractions";
import CurrencyWidget from "./../Components/currencyWidget/CurrencyWidget";
import WeatherWidget from "./../Components/weatherWidget/weatherWidget";

export default function Country() {
  return (
    <div>
      <main className='main'>
        <section>
          <img
            className='country_image'
            src='https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/France-1-The-Eiffel-Tower-e1492754610997.jpg'
            alt='country'
          />
        </section>
        <section className='section_about'>
          <Container fluid>
            <Row>
              <Col mg='4'>
                <div className='description_country'>
                  <h2>France, Paris</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eos suscipit cupiditate facilis, nemo excepturi modi
                    aspernatur nihil eius deleniti pariatur odio illum illo
                    earum quisquam debitis beatae explicabo tempore quae rerum
                    repellat aliquam at harum quod. Consectetur soluta rerum
                    tenetur ipsa earum vel sit modi minus doloribus, cupiditate
                    totam itaque in repellat, maiores odio, nostrum nulla
                    obcaecati dolore perferendis consequuntur veniam iusto
                    adipisci est neque. Libero molestiae nam magnam sint est,
                    quae, vel aut ab blanditiis necessitatibus dolore saepe quam
                    qui aliquam, in sunt alias recusandae nihil deserunt aperiam
                    vitae! Sed modi sint natus provident nemo quo explicabo
                    blanditiis iste?
                  </p>
                </div>

                <div className='carousel_attractions'>
                  <h2>Sights of France</h2>
                  <CarouselAttractions />
                </div>
                <div className='video'>
                  <h2>Video</h2>
                </div>
                <div id='map'>
                  <h2>Map</h2>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.94722657723!2d2.2770201358009565!3d48.85883773930155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2z0J_QsNGA0LjQtiwg0KTRgNCw0L3RhtC40Y8!5e0!3m2!1sru!2sby!4v1615241211651!5m2!1sru!2sby'
                    width='600'
                    height='450'
                    allowfullscreen=''
                    loading='lazy'
                  ></iframe>
                </div>
              </Col>
              <Col md='4' className='sidebar sidebar_right'>
                <div className='mt-4 widget_weather'>
                  <WeatherWidget />
                </div>

                <div className='mt-4 widget_currency'>
                  <CurrencyWidget />
                </div>
                <div className='mt-4 widget_time'>Время</div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
}
