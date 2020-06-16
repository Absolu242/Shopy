import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Load = styled.div`
    position:relative;
    height:60px;
    display: flex;
    justify-content: center;
    background-color:white;
    text-align:center;
    align-content:center;
    font-size:50px;
    

    a{
        position:relative;
        top:-20px;
        text-decoration:none
    }
`

function LoadMore () {
  return (
    <div style={{padding: '20px 200px'}}>
        <Load>
      <Link exact to="/productCollection" style={{color: '#ff5912'}}>...</Link>
    </Load>
    </div>
  );
}

export default LoadMore;
