import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, ContactUs, Donate, FAQ, BecomeAMember, UpcomingEvent, Gallery } from './pages';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

import '../public/css/materialize.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import 'video-react/dist/video-react.css';
import Talent from './pages/Children';

const App: React.FC = () => {
    useEffect(() => {
        M.AutoInit();

        const sideNav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sideNav, {});
    });

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/become-a-member' element={<BecomeAMember />} />
                <Route path='/about' element={<About />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/upcoming-event" element={<UpcomingEvent />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/talent-hunt" element={<Talent />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
