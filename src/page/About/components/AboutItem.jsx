import React from 'react';
import PropTypes from 'prop-types';

import '../scss/AboutItem.scss';

const AboutItem = ({
  about: {
    title,
    suptitle,
    text
  }
}) => (
  <div className="about">
    <div className="about__inner">
      <h1 className="about__title">{title}</h1>
      <h2 className="about__suptitle">{suptitle}</h2>

      <div className="about__text">
        {text.map((p) => (
          <p key={p.id}>
            {p.text}
          </p>
        ))}
      </div>
    </div>
  </div>
);

AboutItem.defaultProps = {
  about: {
    title: '',
    suptitle: '',
    text: []
  },
};

AboutItem.propTypes = {
  about: PropTypes.shape({
    title: PropTypes.string,
    suptitle: PropTypes.string,
    text: PropTypes.arrayOf(PropTypes.object)
  }),

};

export default AboutItem;
