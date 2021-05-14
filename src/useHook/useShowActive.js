// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import en from '../assets/icon/eng.png';
import ua from '../assets/icon/ua.png';
import ru from '../assets/icon/rus.png';

const useShowActive = () => {
  const [theme, setTheme] = useState(false);
  const [lang, setLang] = useState([
    {
      id: 'en',
      lang: true,
      imgLang: en
    },
    {
      id: 'ua',
      lang: false,
      imgLang: ua
    },
    {
      id: 'ru',
      lang: false,
      imgLang: ru
    }
  ]);

  // eslint-disable-next-line no-unused-vars
  const toggleTheme = () => {
    setTheme({ theme: !!theme === false });
  };
  // eslint-disable-next-line no-unused-vars
  const toggleLang = () => {
    setLang(lang);
  };
  return {
    lang,
    theme
  };
};
export default useShowActive;
