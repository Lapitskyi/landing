import React from 'react';
import '../scss/Lang.scss';
import PropTypes from 'prop-types';

const LangText = ({
  toggleLang: {
    langToggle,
    lang
  }
}) => {
  const a = lang.filter((item) => item.lang);
  const b = lang.filter((item) => !item.lang);
  return (
    <div className="lang">
      <ul className="lang__list ">
        {[...a, ...b].map((item) => (
          <li key={item.id}>
            <button
              className={!item.lang ? 'lang__item ' : 'lang__item active'}
              type="button"
              onClick={() => langToggle(item.id)}
            >
              <img
                className="lang__img"
                src={item.imgLang}
                alt="lang"
              />
              {item.id}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

LangText.defaultProps = {
  toggleLang: {
    langToggle: () => {
    },
    lang: []
  }
};

LangText.propTypes = {
  toggleLang: PropTypes.shape({
    langToggle: PropTypes.func,
    lang: PropTypes.arrayOf(PropTypes.object)
  })
};

export default LangText;
