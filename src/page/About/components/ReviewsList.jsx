import React from 'react';
import PropTypes from 'prop-types';

import '../scss/Reviews.scss';

const ReviewsList = ({ reviews }) => {
  return (
    <ul className="reviews__list ">
      {
        reviews.map((item) => (
          <li className="reviews__list-item" key={item.id}>
            <img className="reviews__list-img" src={item.img} alt="icon user" />
            <p className="reviews__list-text">{item.text}</p>
          </li>
        ))
      }
    </ul>
  );
};

ReviewsList.defaultProps = {
  reviews: []
};
ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object)
};

export default ReviewsList;
