import React from 'react';
import PropTypes from 'prop-types';
import ReviewsList from './ReviewsList';
import userPhoto from '../../../assets/images/userPhoto.svg';

import '../scss/Reviews.scss';

const Reviews = ({
  reviewText,
  reviews,
  onNewReviewsText,
  onAddReviews,
  imgReviews
}) => (
  <div className="reviews">
    <h2 className="reviews__title">Review</h2>

    <ReviewsList reviews={reviews} />

    <div className="reviews__inner">
      <img className="reviews__img" src={userPhoto} alt="icon user" ref={imgReviews} />

      <form className="reviews__form">
          <textarea
            className="reviews__text"
            onChange={(e) => {
              onNewReviewsText(e.target.value);
            }}
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

Reviews.defaultProps = {
  imgReviews: {},
  reviewText: '',
  reviews: [],
  onNewReviewsText: () => {
  },
  onAddReviews: () => {
  }
};
Reviews.propTypes = {
  imgReviews: PropTypes.objectOf(PropTypes.object),
  reviewText: PropTypes.string,
  reviews: PropTypes.arrayOf(PropTypes.object),
  onNewReviewsText: PropTypes.func,
  onAddReviews: PropTypes.func
};

export default Reviews;
