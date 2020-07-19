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

import {device} from '../../../utils/device';
import './Contact.css'
 


function ContactHeader () {
  return (
    <div className='contact'>
      <div className='left'>
        <div>
            <BsEnvelope/> 
            <p>info@shopy.com</p>
        </div>
        <div>
            <FaBlenderPhone />
            <p>453-5553-996</p>
        </div>
      </div>

      <div className='right'>
        <span >
          <a href="/"> <FaFacebookF /></a>
          <a href="/"><FaTwitter /></a>
          <a href="/"><TiSocialGooglePlus /></a>
          <a href="/"><TiSocialInstagram /></a>
        </span>
      </div>
    </div>
  );
}

export default ContactHeader;
