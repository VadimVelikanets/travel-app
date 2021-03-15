import React from "react";
import ReactDOM from "react-dom";
import StarRatingComponent from "react-star-rating-component";
import "./StarRating.css";

class StarRatingNonEditable extends React.Component {
  constructor(props) {
    super();

    this.state = {
      rating: 3,
    };
  }
  render() {
    const { rating } = this.state;

    return (
      <div className='star_rating_box'>
        <StarRatingComponent
          name='rate1'
          editing={false}
          renderStarIcon={() => <span> &#9733;</span>}
          starCount={5}
          value={rating}
        />
      </div>
    );
  }
}

export default StarRatingNonEditable;
