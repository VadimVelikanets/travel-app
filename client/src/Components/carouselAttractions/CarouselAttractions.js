import React from "react";
import { Carousel } from "react-bootstrap";

export default function CarouselAttractions() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/France-3-The-Palace-of-Versailles-e1492754919622.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="carousel_caption">Versailles Palace (Paris)</h3>
          <p className="carousel_caption">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/France-4-French-Riviera-or-Coast-of-Azure-e1492755135661.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="carousel_caption">Cote d'Azur or French Riviera</h3>
          <p className="carousel_caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/France-8-Old-town-of-Carcassona-e1492755972384.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="carousel_caption">
            Old town Carcassonne (Languedoc-Roussillon region)
          </h3>
          <p className="carousel_caption">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
