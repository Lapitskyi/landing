import React from 'react';

const MyContext = React.createContext({
  theme: false,
  stateApp: {},
  toggleTheme: () => {
  },
  langToggle: () => {
  },
});
export default MyContext;
