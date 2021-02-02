import React from 'react'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import './App.scss';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="content">
        <div className="container">
          content
        </div>

      </div>
      <Footer />
    </div>
  )

}

export default App;
