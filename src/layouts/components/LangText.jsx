import React, { useState } from 'react';
import '../scss/Lang.scss';

const LangText = () => {
  const [lang, setLang] = useState([{ id: 'en', lang: true }, { id: 'ua', lang: false }, { id: 'ru', lang: false }]);

  const onSwitchLanguage = (id) => {
    setLang(
      // eslint-disable-next-line no-nested-ternary
      lang.map((l) => ((l.id === id) ? { ...l, lang: true }
        : (l.id !== id) ? { ...l, lang: false } : l))
    );
  };
  const a = lang.filter((item) => item.lang);
  const b = lang.filter((item) => !item.lang);
  return (
    <div className="lang">
      <ul className="lang__list ">
        {[...a, ...b].map((item) => (
          // eslint-disable-next-line max-len
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
          <li
            className={item.lang === false ? 'lang__item ' : 'lang__item active'}
            key={item.id}
            onClick={() => onSwitchLanguage(item.id)}
          >
            <img
              className="lang__img"
              src=""
              alt="lang ua"
            />
            {item.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LangText;
