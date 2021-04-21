import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Reviews from './Reviews';
import { addReview, newReviewText, setReviews } from '../../../redux/about-reducer';

const ReviewsContainer = (props) => {
  const onNewReviewsText = (text) => {
    props.newReviewText(text);
  };

  const imgReviews = React.createRef();
  const onAddReviews = (e) => {
    e.preventDefault();
    const userImg = imgReviews.current.src;
    props.addReview(userImg);
  };

  return <Reviews onNewReviewsText={onNewReviewsText} onAddReviews={onAddReviews} imgReviews={imgReviews} />;
};

const mapStateToProps = (aboutPage) => ({
  reviews: aboutPage.reviews,
  reviewText: aboutPage.reviewText
});

export default connect(mapStateToProps, {
  newReviewText,
  addReview,
  setReviews
})(ReviewsContainer);

ReviewsContainer.defaultProps = {
  newReviewText: () => {
  },
  addReview: () => {
  },
  // setReviews: () => {
  // }
};
ReviewsContainer.propTypes = {
  newReviewText: PropTypes.func,
  addReview: PropTypes.func,
  // setReviews: PropTypes.func
};
