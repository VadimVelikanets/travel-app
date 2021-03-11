import React from "react";
import Country from "../Pages/Country";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./../styles/Card.css";

export default function Card(props) {
    const link = '/country/' + props.linkId
  return (
    <>
<<<<<<< HEAD:src/Components/Card.js
      <a href="/country" className="card">
        <div className="figure">
          <div className="figure_box">
            <img
              className="figure_image"
              src="https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/France-1-The-Eiffel-Tower-e1492754610997.jpg"
              alt="country"
            />
          </div>

          <h5 className="figcaption">France, Paris</h5>
=======

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
>>>>>>> 14df2e0f0904c79f83c33be5a0fd707745eba9dd:client/src/Components/Card.js
        </div>
      </Link>
       <Router >
        <Switch>
<<<<<<< HEAD:src/Components/Card.js
          <Route exact path="/country" component={Country} />
=======
          <Route  path={link}  >
              <Country />
          </Route>
>>>>>>> 14df2e0f0904c79f83c33be5a0fd707745eba9dd:client/src/Components/Card.js
        </Switch>
      </Router>
    </>
  );
}
