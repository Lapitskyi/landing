import React from 'react';

const MyContext = React.createContext({
  theme: false,
  toggleTheme: () => {
  },
  lang: false,
  langToggle: () => {
  },
});
export default MyContext;
