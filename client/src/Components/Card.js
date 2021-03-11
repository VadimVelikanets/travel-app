import React from "react";
import Country from "./../Pages/Country";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./../styles/Card.css";

export default function Card(props) {
    const link = '/country/' + props.linkId
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

          <h5 className='figcaption'>{props.country}, {props.capitalCity}</h5>
        </div>
      </Link>
       <Router >
        <Switch>
          <Route  path={link}  >
              <Country />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
