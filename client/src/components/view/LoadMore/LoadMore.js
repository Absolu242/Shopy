import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import './LoadMore.css'


function LoadMore () {
  return (
    <div className='LoadMore'>
      <div className='Load'>
      <Link  to="/productCollection" style={{color: '#ff5912'}}>...</Link>
    </div>
    </div>
  );
}

export default LoadMore;
