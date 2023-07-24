import React from 'react';
import { Link } from 'react-router-dom';
import datalchemyLogo from '../../data/img/footer/datalchemyLogo.png';
import bloomhublogo from '../../data/img/footer/new_logo.jpg';
import logo from '../../data/img/logo.jpg';
import SocialMedia from '../SocialMedia';

// Need to added correct .svg file
// Add sticky footer
// Add IG and Contribute button

const Footer: React.FC = () => {
  return (
    <footer>
      <div style={{ backgroundColor: '#fccf31' }} className='page-footer'>
        <div className='container center'>
          <div className='row'>
            <div className='col l6 s12'>
              <img src={logo} alt='logo' width='50px' />
              <h5 className='white-text'>MARYCHARIS BENEVOLENCE FOUNDATION</h5>
              <p className='grey-text text-lighten-4'></p>
            </div>
            <div className='col l4 offset-l2 s12'>
              <h5 className='white-text'>Links</h5>
              <ul>
                <li>
                  <Link className='grey-text text-lighten-3' to='/'>
                    Home
                  </Link>
                </li>

                <li>
                  <Link className='grey-text text-lighten-3' to='/about'>
                    About
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-3' to='/about'>
                    About
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-3' to='/about'>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-3' to='/about'>
                    Donate
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#ce5ffc' }} className='footer-copyright'>
          <div className='container'>
            <div className='row'>
              <div className='col s6 m6 l6'>
                <br />© {new Date().getFullYear()} MARYCHARIS BENEVOLENCE FOUNDATION Inc. All rights
                reserved.
              </div>
              <h5 className='white-text' style={{ marginBottom: '30px' }}>
                Other links
              </h5>

              <ul>
                <li>
                  <Link className='grey-text text-lighten-3' to='/faq'>
                    FAQ
                  </Link>
                </li>

                <li>
                  <Link className='grey-text text-lighten-3' to='/about'>
                    Terms and Condition
                  </Link>
                </li>
                <li>
                  <SocialMedia />
                </li>
              </ul>
              <div className='col s6 m6 l6'>
                <br />
                <a href='http://www.bloomhubng.com/'>
                  <img className='right' src={bloomhublogo} alt='' width='50px' height='50px' />
                </a>
                <a className='right' style={{ color: 'white' }} href='http://www.bloomhubng.com/'>
                  <br />
                  Powered by bloomhubng &nbsp;
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
