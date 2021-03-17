import React from "react";
import ReactDOM from "react-dom";
import StarRatingComponent from "react-star-rating-component";
import "./StarRating.css";

class StarRatingEditable extends React.Component {
  constructor(props) {
    super();

    this.state = {
      rating: 1,
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }
  onStarHoverOut(nextValue, prevValue, name) {
    this.setState({ rating: this.state.rating });
  }
  onStarHover(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }
  render() {
    const { rating } = this.state;

    return (
      <div className='star_rating_box'>
        <StarRatingComponent
          name='rate1'
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        <span className='rating'>rating: {rating}</span>
      </div>
    );
  }
}
export default StarRatingEditable;
