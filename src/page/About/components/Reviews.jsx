import React from 'react';
import PropTypes from 'prop-types';
import ReviewsList from './ReviewsList';
import userPhoto from '../../../assets/images/userPhoto.svg';

import '../scss/Reviews.scss';

const Reviews = ({
  reviewText,
  reviews,
  newReviewsText,
  addReviews
}) => {
  const imgReviews = React.createRef();

  const onAddReviews = (e) => {
    e.preventDefault();
    const userImg = imgReviews.current.src;
    addReviews(userImg);
  };

  const onChangeReviews = (e) => {
    const text = e.target.value;
    newReviewsText(text);
  };

  return (
    <div className="reviews">
      <h2 className="reviews__title">Review</h2>

      <ReviewsList reviews={reviews} />

      <div className="reviews__inner">
        <img className="reviews__img" src={userPhoto} alt="icon user" ref={imgReviews} />

        <form className="reviews__form">
          <textarea
            className="reviews__text"
            onChange={onChangeReviews}
            value={reviewText}
            placeholder="Leave a review"
          />
          <button
            type="submit"
            className="reviews__btn btn"
            onClick={onAddReviews}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

Reviews.defaultProps = {
  reviewText: '',
  reviews: [],
  newReviewsText: () => {
  },
  addReviews: () => {
  }
};
Reviews.propTypes = {
  reviewText: PropTypes.string,
  reviews: PropTypes.arrayOf,
  newReviewsText: PropTypes.func,
  addReviews: PropTypes.func
};

export default Reviews;
