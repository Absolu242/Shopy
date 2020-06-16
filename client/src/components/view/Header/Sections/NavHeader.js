import React, {useState} from 'react';
import {FaShoppingBasket} from 'react-icons/fa';

import {BsSearch, BsPerson} from 'react-icons/bs';
import styled from 'styled-components';

import logo from '../../../../assets/Logo.png';
import {NavLink} from 'react-router-dom';

const Navbar = styled.div`
    display:flex;
    justify-content:space-between;
    padding:2rem 5rem;
    border-top: 1px #edeff1 solid;
    border-bottom: 1px #edeff1 solid;

    .selected{
        color:#ff5912
    }
  `;

const Left = styled.div`
  display:flex;
  position:relative;
  color:#ff5912;
  left:1rem;
 

  div{
      position: relative;
      display: flex;
      margin-right:2rem ;
      align-items:center;

      ul{
        display:flex;
        list-style:none
    }
  
    li{
      color:#34404b !important;
      margin:0 0.2rem;


      a{
          padding:0 1rem;
          text-decoration:none;
          color:#34404b
      }
    }

    a:hover{
        color:#ff5912 !important;
      }
  }
  `;

const Right = styled.div`
  display:flex;
  align-items:center;
  color:#34404b;

  .counter{
      position: relative;
      left:16px;
      top:-16px;
      background-color:#34404b;
      color:#fff;
      padding:0 5px;
      border-radius:50%;
      font-size:12px;

  }

  a{
    padding:0 1rem;
    text-decoration:none;
    color:#34404b
    }

    a:hover{
        color:#ff5912 !important;
      }


  `;

function NavHeader () {
  


  return (
    <Navbar>

      <Left>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
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
      </Left>

      <Right>
        <div>
          <NavLink to="#"> <BsSearch /></NavLink>
          <NavLink to="#"><BsPerson /></NavLink>
          <NavLink to="#">
            {' '}<span className="counter">2</span><FaShoppingBasket />
          </NavLink>
        </div>
      </Right>
    </Navbar>
  );
}

export default NavHeader;
