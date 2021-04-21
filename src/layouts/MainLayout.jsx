import React from 'react';
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from '../page/Home/Home';
import About from '../page/About/About';
import Order from '../page/Order/Order';
import Portfolio from '../page/Portfolio/Portfolio';
import LoginContainer from '../page/Auth/LoginContainer';
import HeaderContainer from './components/HeaderContainer';
import ResetContainer from '../page/Auth/ResetContainer';
import RegistrationContainer from '../page/Auth/RegistrationContainer';

const MainLayout = () => {
  return (
    <>
      <HeaderContainer />
      <div className="content">
        <div className="container">
          <Route path="/" exact render={() => <Home />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/order" render={() => <Order />} />
          <Route path="/portfolio" render={() => <Portfolio />} />
          <Route path="/login" render={() => <LoginContainer />} />
          <Route path="/registration" render={() => <RegistrationContainer />} />
          <Route path="/reset" render={() => <ResetContainer />} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
