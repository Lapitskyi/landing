import React from 'react';
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from '../page/Home/Home';
import About from '../page/About/About';
import Order from '../page/Order/Order';
import Portfolio from '../page/Portfolio/Portfolio';
import LoginContainer from '../page/Auth/LoginContainer';
import Registration from '../page/Auth/Registration';
import Reset from '../page/Auth/Reset';
import HeaderContainer from './components/HeaderContainer';

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
          <Route path="/registration" render={() => <Registration />} />
          <Route path="/reset" render={() => <Reset />} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
