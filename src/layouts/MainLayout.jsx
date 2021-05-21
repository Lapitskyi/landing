import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import About from '../page/About/About';
import Order from '../page/Order/Order';
import Portfolio from '../page/Portfolio/Portfolio';
import Header from './components/Header';
import AuthContainer from '../page/Auth/AuthContainer';
import PokemonGroupContainer from '../page/PokemonGroup/PokemonGroupContainer';
import HomeContainer from '../page/Home/HomeContainer';

const MainLayout = () => (
  <>
    <Header />
    <div className="content">
      <div className="container">
        <Switch>
          <Route path="/" exact render={() => <HomeContainer />} />
          <Route path="/pokemon" render={() => <PokemonGroupContainer />} />
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

export default MainLayout;
