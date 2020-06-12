import React from 'react';
import {
  FaBlenderPhone,
  FaFacebookF,
  FaTwitter,
} from 'react-icons/fa';

import {
    TiSocialGooglePlus,
    TiSocialInstagram,
  } from 'react-icons/ti';

  import {
    BsEnvelope,
  } from 'react-icons/bs';
  import styled from 'styled-components'


  const Contact = styled.div`
    display:flex;
    justify-content:space-between;
    padding:2rem 5rem
  `

  const Left = styled.div`
  display:flex;
  color:#ff5912;

  div{
      position: relative;
      display: flex;
      margin:0 1rem ;
      align-items:center;

      p{
        color:#34404b !important;
        margin:0 0.2rem;
      }
  }
  `

  const Right = styled.div`
  display:flex;
  align-items:center;
  color:#34404b;

  a{
      padding:0 1rem;
      text-decoration:none;
      color:#34404b
  }

  `


function ContactHeader () {
  return (
    <Contact>
      <Left>
        <div>
            <BsEnvelope/> 
            <p>info@shopy.com</p>
        </div>
        <div>
            <FaBlenderPhone />
            <p>453-5553-996</p>
        </div>
      </Left>

      <Right>
        <span >
          <a href="#"> <FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><TiSocialGooglePlus /></a>
          <a href="#"><TiSocialInstagram /></a>
        </span>
      </Right>
    </Contact>
  );
}

export default ContactHeader;
