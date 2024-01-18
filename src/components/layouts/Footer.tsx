import React from 'react';
import { Link } from 'react-router-dom';
import datalchemyLogo from '../../data/img/footer/datalchemyLogo.png';
import bloomhublogo from '../../data/img/footer/new_logo.jpg';
import logo from '../../data/img/logo.jpg';
import SocialMedia from '../SocialMedia';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Footer: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode); // Accessing darkMode from Redux store

  return (
    <footer>
      <div className={`page-footer ${darkMode ? 'dark-mode': ''}`}>
        <div className='container center'>
          <div className='row'>
            <div className='col l6 s12'>
              <img src={logo} alt='logo' width='50px' />
              <h5>MARYCHARIS BENEVOLENCE FOUNDATION</h5>
              <p className='grey-text text-lighten-4'></p>
            </div>
            <div className='col l4 offset-l2 s12'>
              <h5 className='white-text'>Links</h5>
              <ul>
                <li>
                  <Link className={`grey-text text-lighten-3 ${darkMode ? 'dark-mode': ''}`} to='/'>
                    Home
                  </Link>
                </li>

                <li>
                  <Link className={`grey-text text-lighten-3 ${darkMode ? 'dark-mode': ''}`} to='/about'>
                    About
                  </Link>
                </li>
                <li>
                  <Link className={`grey-text text-lighten-3 ${darkMode ? 'dark-mode': ''}`} to='/about'>
                    About
                  </Link>
                </li>
                <li>
                  <Link className={`grey-text text-lighten-3 ${darkMode ? 'dark-mode': ''}`} to='/about'>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className={`grey-text text-lighten-3 ${darkMode ? 'dark-mode': ''}`} to='/about'>
                    Donate
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`footer-copyright ${darkMode ? 'dark-mode' : ''}`}>
          <div className='container'>
            <div className='row'>
              <div className='col s6 m6 l6'>
                <br />© {new Date().getFullYear()} MARYCHARIS BENEVOLENCE FOUNDATION Inc. All rights
                reserved.
              </div>
              <h5 style={{ marginBottom: '30px' }}>
                Other links
              </h5>

              <ul>
                <li>
                  <Link className={`grey-text text-lighten-3 ${darkMode ? 'dark-mode': ''}`} to='/faq'>
                    FAQ
                  </Link>
                </li>

                <li>
                  <Link className={`grey-text text-lighten-3 ${darkMode ? 'dark-mode': ''}`} to='/about'>
                    Terms and Condition
                  </Link>
                </li>
                <li>
                  <SocialMedia />
                </li>
              </ul>
              <div className='col s6 m6 l6'>
                <br />
                <a href='https://www.forkhive.com/'>
                  <img className='right' src={bloomhublogo} alt='' width='50px' height='50px' />
                </a>
                <a className='right' href='https://www.forkhive.com/'>
                  <br />
                  Powered by Forkhive &nbsp;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
