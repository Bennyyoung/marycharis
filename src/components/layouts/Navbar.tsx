import React, { useEffect } from 'react';
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
      <div>
        <nav style={{ backgroundColor: 'inherit'}}>
          <div className={`nav-wrapper ${darkMode ? 'dark-mode' : ''}`}>
            <Link to='/' className={`brand-logo hide-on-small-only ${darkMode ? 'dark-mode' : ''}`}>
              <div style={{ display: 'flex', marginTop: '3rem', marginLeft: '8rem' }}>
                <div style={{ width: '10%' }}>
                  <img src={marycharisLogo} alt="logo" height="64px" width="80px" />

                </div>
                <h6 style={{ paddingLeft: '3rem', marginTop: '1.5rem' }}>
                  MARYCHARIS BENEVOLENCE FOUNDATION
                </h6>
              </div>
            </Link>

            <div className='right hide-on-med-and-down'>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 40px 5px 50px', height: '3rem' }}>
                {/* @ts-ignore */}
                <p style={{ margin: 0, color: '#7e7e7e', fontSize: '14px', fontWeight: '500', paddingLeft: '50px' }}>Welcome to a non profit charity platform</p>
                {/* Socials */}
                <div></div>
              </div>
              <ul style={{ borderRadius: '39.5px 0 0 39.5px', paddingLeft: '50px', paddingRight: '50px', border: '1px solid black' }} id='nav-mobile' className={`right hide-on-med-and-down linkNav ${darkMode ? 'dark-mode' : ''}`}>
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
          <Link
            to='/'
            className={`brand-name show-on-small hide-on-med-and-up ${darkMode ? 'dark-mode' : ''}`}
          >
            MBF
          </Link>

          <Link to='/' data-target='mobile-demo' className={`sidenav-trigger ${darkMode ? 'dark-mode' : ''}`}>
            <i className={`material-icons ${darkMode ? 'dark-mode' : ''}`}>menu</i>
          </Link>


          <ul className={`sidenav ${darkMode ? 'dark-mode' : ''}`} id='mobile-demo'>
            <div style={{ display: 'flex' }}>
              <div style={{flex: 5}}></div>
              <div style={{flex: 1}}>
                <DarkModeToggle />
              </div>
            </div>

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
              <Link to='/become-a-member' className={`${darkMode ? 'dark-mode' : ''}`}>Join Us</Link>
            </li>
            <li>
              <Link to='/donate' className={`${darkMode ? 'dark-mode' : ''}`}>Donate</Link>
            </li>
            <li>
              <Link to='/contact' className={`${darkMode ? 'dark-mode' : ''}`}>Contact Us</Link>
            </li>
            <li>
              <Link to='/talent-hunt' className={`${darkMode ? 'dark-mode' : ''}`}>MCF Talent Hunt</Link>
            </li>

          </ul>
        </nav>
      </div>




    </header>
  );
};

export default Navbar;
