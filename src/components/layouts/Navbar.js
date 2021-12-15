import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../data/img/logo.jpg'

const Navbar = () => {
  return (
    <header>
      <div className='navbar-fixed '>
        <nav style={{backgroundColor: '#ce5ffc'}}>
          <div className='nav-wrapper'>
            <Link to='/' className='brand-logo hide-on-small-only'>
              <div style={{ display: 'flex' }}>
                <div style={{ width: '10%' }}>
                  <img src={logo} alt="logo" height="64px" width="80px" />

                </div>
                <div style={{ width: '90%' }}>

                  <h5 style={{ paddingLeft: '2rem' }}>

                    MARYCHARIS BENEVOLENCE FOUNDATION
                  </h5>
                </div>

              </div>
            </Link>
            <Link
              to='/'
              className='brand-logo show-on-small hide-on-med-and-up'
            >
              MCBFs
            </Link>

            <Link to='/' data-target='mobile-demo' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </Link>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>

            </ul>
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

      </ul>
    </header>
  );
};

export default Navbar;
