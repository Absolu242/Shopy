import React from 'react';


import {BsSearch, BsPerson} from 'react-icons/bs';
import styled from 'styled-components';

import logo from '../../../../assets/Logo.png';
import {NavLink} from 'react-router-dom';
import MiniBasket from '../../Basket/MiniBasket';
import './NavHeader.css'

function NavHeader () {

  return (
    <div className='NavBar'>

      <div className='Navleft'>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className='NavList'>
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                activeClassName='selected'
                
              >
                Home
              </NavLink>
            </li>
            <li><NavLink  activeClassName='selected' to="/productCollection">Products</NavLink></li>
            <li><NavLink activeClassName='selected' to="/HotDeals">Hot Deals</NavLink></li>
            <li><NavLink to="#">About</NavLink></li>
            <li><NavLink to="#">Contact</NavLink></li>
          </ul>
        </div>
      </div>

      <div className='Navright'>
          <div>
            <NavLink to="#"> <BsSearch /></NavLink>
            <NavLink to="#"><BsPerson /></NavLink>
            <NavLink to="#">
              <MiniBasket/>
            </NavLink>
          </div>
      </div>
    </div>
  );
}

export default NavHeader;
