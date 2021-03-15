import React from "react";
import Country from "../../Pages/country/Country";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Card.css";
import StarRatingNonEditable from "./../starRating/StarRatingNonEditable";
import ScrollToTop from "../scrollToTop/ScrollToTop";

// const ScrollLink=Scroll.Link

export default function Card(props) {
  const link = "/country/" + props.linkId;
  return (
    <>
      <Link to={link} className='card'>
        <div className='figure'>
          <div className='figure_box'>
            <img
              className='figure_image'
              src={props.countryImg}
              alt='country'
            />
          </div>
          <div className='country_rating_box'>
            <h5 className='figcaption'>
              {props.country}, {props.capitalCity}
            </h5>
            <StarRatingNonEditable />
          </div>
        </div>
      </Link>
      <Router>
        <Switch>
          <Route path={link}>
            <Country />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
