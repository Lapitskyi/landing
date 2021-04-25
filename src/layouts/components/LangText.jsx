import React from 'react';
import '../scss/Lang.scss';
import PropTypes from 'prop-types';

const LangText = ({
  langToggle,
  langT
}) => {
  const a = langT.filter((item) => item.lang);
  const b = langT.filter((item) => !item.lang);
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
  langToggle: () => {
  },
  langT: []
};

LangText.propTypes = {
  langToggle: PropTypes.func,
  langT: PropTypes.arrayOf(PropTypes.object)
};

export default LangText;
