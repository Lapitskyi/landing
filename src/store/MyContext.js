import React from 'react';

const MyContext = React.createContext({
  theme: false,
  state: {},
  toggleTheme: () => {
  },
  lang: {},
  toggleLang: () => {
  },
});
export default MyContext;
