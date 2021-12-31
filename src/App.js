import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, About, ContactUs, Donate } from './pages'

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer.js';


import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import 'video-react/dist/video-react.css'

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={ContactUs} />
        <Route exact path="/donate" component={Donate}/>

      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
