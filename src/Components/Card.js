import React from "react";
import Country from "./../Pages/Country";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./../styles/Card.css";

export default function Card() {
  return (
    <>
      <a href='/country'>
        <div>
          <figure className='figure'>
            <img
              src='https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/France-1-The-Eiffel-Tower-e1492754610997.jpg'
              alt='country'
            />
            <figcaption className='figcaption'>France, Paris</figcaption>
            {/* <h5>France, Paris</h5> */}
          </figure>
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
