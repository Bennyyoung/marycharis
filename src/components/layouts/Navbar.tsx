import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../data/img/logo.jpg';
import marycharisLogo from '../../data/img/marycharisLogo.jpg';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


const Navbar: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode)
  return (
    <header>
      <div className='navbar-fixed '>
        <nav style={{ backgroundColor: 'inherit', height: '10rem' }}>
          <div className={`nav-wrapper ${darkMode ? 'dark-mode' : ''}`}>
            <Link to='/' className={`brand-logo hide-on-small-only ${darkMode ? 'dark-mode' : ''}`}>
              <div style={{ display: 'flex', marginTop: '2rem' }}>
                <div style={{ width: '10%' }}>
                  <img src={marycharisLogo} alt="logo" height="64px" width="80px" />

                </div>
                <h6 style={{ paddingLeft: '5rem', marginTop: '1.5rem' }}>
                  MARYCHARIS BENEVOLENCE FOUNDATION
                </h6>
              </div>
            </Link>
            <Link
              to='/'
              className='brand-logo show-on-small hide-on-med-and-up'
            >
              MBF
            </Link>

            <Link to='/' data-target='mobile-demo' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </Link>

            <div className='right hide-on-med-and-down'>
              {/* @ts-ignore */}
              <p style={{ margin: 0, color: '#7e7e7e', fontSize: '14px', fontWeight: '500', paddingLeft: '50px' }}>Welcome to a non profit charity platform</p>
              <ul style={{ borderRadius: '2rem 0 0 2rem', paddingLeft: '50px', paddingRight: '50px', backgroundColor: 'grey', border: '1px solid black' }} id='nav-mobile' className='right hide-on-med-and-down'>
                <DarkModeToggle />
                <li>
                  <Link to='/' className={`${darkMode ? 'dark-mode' : ''}`}>Home</Link>
                </li>
                <li>
                  <Link to='/about' className={`${darkMode ? 'dark-mode' : ''}`}>About</Link>
                </li>
                <li>
                  <Link to='/gallery' className={`${darkMode ? 'dark-mode' : ''}`}>Gallery</Link>
                </li>
                <li>
                  <Link to='/upcoming-event' className={`${darkMode ? 'dark-mode' : ''}`}>Upcoming Event</Link>
                </li>
                <li>
                  <Link to='/talent-hunt' className={`${darkMode ? 'dark-mode' : ''}`}>MCF Talent Hunt</Link>
                </li>
                <li>
                  <Link to='/become-a-member' className={`${darkMode ? 'dark-mode' : ''}`}>Join Us</Link>
                </li>
                <li>
                  <Link to='/donate' className={`${darkMode ? 'dark-mode' : ''}`}>Donate</Link>
                </li>
                <li>
                  <Link to='/contact' className={`${darkMode ? 'dark-mode' : ''}`}>Contact Us</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul className='sidenav ' id='mobile-demo'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/gallery'>Gallery</Link>
        </li>
        <li>
          <Link to='/upcoming-event'>Upcoming Event</Link>
        </li>
        <li>
          <Link to='/become-a-member'>Join Us</Link>
        </li>
        <li>
          <Link to='/donate'>Donate</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
        <li>
          <Link to='/talent-hunt'>MCF Talent Hunt</Link>
        </li>

      </ul>
    </header>
  );
};

export default Navbar;
