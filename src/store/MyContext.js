import React from 'react';

const MyContext = React.createContext({
  stateApp: {},
  toggleTheme: () => {
  },
  langToggle: () => {
  },
});
export default MyContext;
