import React from 'react';
import '../scss/Lang.scss';
import PropTypes from 'prop-types';

const LangText = ({
  lang,
  toggleLang,
}) => {
  const langSelect = lang.filter((item) => item.lang);
  const langNotSelect = lang.filter((item) => !item.lang);
  return (
    <div className="lang">
      <ul className="lang__list ">
        {[...langSelect, ...langNotSelect].map((item) => (
          <li key={item.id} className={!item.lang ? 'lang__item ' : 'lang__item active'}>
            <button
              className="lang__btn btn"
              type="button"
              onClick={() => toggleLang(item.id)}
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
  toggleLang: () => {
  },
  lang: []
};

LangText.propTypes = {
  toggleLang: PropTypes.func,
  lang: PropTypes.arrayOf(PropTypes.object)
};

export default LangText;
