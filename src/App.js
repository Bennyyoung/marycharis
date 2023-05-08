import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, About, ContactUs, Donate, FAQ, BecomeAMember, UpcomingEvent, Gallery } from './pages'

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer.js';


import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import 'video-react/dist/video-react.css'
import Talent from './pages/Children';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={ContactUs} />
        <Route exact path='/become-a-member' component={BecomeAMember} />
        <Route exact path='/about' component={About} />
        <Route exact path="/donate" component={Donate}/>
        <Route exact path="/faq" component={FAQ}/>
        <Route exact path="/upcoming-event" component={UpcomingEvent}/>
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/talent-hunt" component={Talent} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
