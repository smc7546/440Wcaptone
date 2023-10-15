import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Cards from './Cards';

import "./HomePageElements.css";

const Home = () => {

  return (
    <div className="home-page">
      <div>

        <div className='nav-container'>
          <div className="navbar-logo-complete"/>

          <div className='nav-links-logo'>
            <a type="redirect" value="Home" href="/home">
              <img src="./smallerLogo.png" />
            < /a>
          </div>

          <div classname='nav-links'>
            <a classname='nav-links' type="redirect" value="Home" href="/home">
              Home
            </a>
          </div>

          <div classname='nav-links'>
            <a type="redirect" value="Messages" href="/messages">
              Messages
            </a>
          </div>

          <div classname='nav-links'>
            <a type="redirect" value="Appointments" href="/appointments">
              Appointments
            </a>
          </div>

          <div classname='nav-links'>
            <a type="redirect" value="Health&Summary" href="/heath%20summary">
              Health Summary
            </a>
          </div>

          <div classname='nav-links'>
            <a type="redirect" value="Billing&Insurance" href="/billing%20&%20insurance">
              Billing & Insurance
            </a>
          </div>

          <div className='nav-links-whoAmI'>
            <a type="redirect" value="Settings" href="/settings">
              <img src="./whoAmI.png" />
            </a>
          </div>
        </div>

        <div className='page-body'>

          <div className='left-nav'>
            <img src="/leftNav.png" />
              <Cards />
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;