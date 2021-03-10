import React from "react";
import Country from "./../Pages/Country";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./../styles/Card.css";

export default function Card() {
  return (
    <>
      <a href='/country' className='card'>
        <div className='figure'>
          <div className='figure_box'>
            <img
              className='figure_image'
              src='https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/France-1-The-Eiffel-Tower-e1492754610997.jpg'
              alt='country'
            />
          </div>

          <h5 className='figcaption'>France, Paris</h5>
        </div>
      </a>
      <Router>
        <Switch>
          <Route exact path='/country' component={Country} />
        </Switch>
      </Router>
    </>
  );
}
