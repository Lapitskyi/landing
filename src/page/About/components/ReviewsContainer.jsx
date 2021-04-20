// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import Reviews from './Reviews';
import { addReview, newReviewText, setReviews } from '../../../redux/about-reducer';

const mapStateToProps = (aboutPage) => ({
  reviews: aboutPage.reviews,
  reviewText: aboutPage.reviewText
});

export default connect(mapStateToProps, {
  newReviewText,
  addReview,
  setReviews
})(Reviews);
