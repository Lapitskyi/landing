import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Home from '../page/Home/Home';
import About from '../page/About/About';
import Order from '../page/Order/Order';
import Portfolio from '../page/Portfolio/Portfolio';
import Header from './components/Header';
import AuthContainer from '../page/Auth/AuthContainer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="content">
        <div className="container">  
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/order" render={() => <Order />} />
            <Route path="/portfolio" render={() => <Portfolio />} />
            <Route path="/auth" render={() => <AuthContainer />} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
