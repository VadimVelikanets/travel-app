import React, { Component } from "react";
import CarouselBox from "./../Components/CarouselBox";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./../Components/Card";

export default class MainPage extends Component {
  render() {
    return (
      <>
        <main>
          <section>
            <CarouselBox />
          </section>
          <section>
            <div className='container'>
              <Card />
            </div>
          </section>
        </main>
      </>
    );
  }
}
