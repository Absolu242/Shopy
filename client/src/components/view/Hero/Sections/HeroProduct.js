
import React from 'react';
import {FaShoppingBasket} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const HeroProductStyle = styled.div`

  position: relative;
  height:100vh;
  width:100%;
  background-size:cover;

  .info{
    position:absolute;
    top:30%;
    left:20%;
    
    h1{
      font-size:50px;
      color:#ff5912;
    }

  
    .price{
      position:relative;
      display:flex;
      align-items:center;
      top:30px;
    }
    span{
      position: relative;
      margin-right:30px;
      
    }

    a{
      position:relative;
      display:flex;
      align-items:center;
      text-decoration:none;
      color:#ff5912 !important;
      

      p{
        padding-left:5px;
        
      }
    }
  }

  

`

function HeroProduct({item, addItem}) {
    const {title, HeroImage, items, description, price} = item;
  
    return (
      <HeroProductStyle
        className="image"
        style={{
          backgroundImage: `url(${
            HeroImage})`,
            
        }}
      >
  
        <div className="info">
          <div className="title"><h1>{title}</h1></div>
          <div className="items" style={{color:'#34404b'}}><p><strong>{items}</strong></p></div>
          <div className="description" style={{color:'#495662'}}><p>{description}</p></div>
          <div className="price">
            <span style={{color:'#34404b'}}><strong>{`Price : ${price}$`}</strong></span>
            <span className='action'>
              <Link exact to="/product/:productId" onClick={() => addItem (item)} >
              <FaShoppingBasket /><strong> 
                <p>Order Now</p></strong>
              </Link>
            </span>
          </div>
        </div>
      </HeroProductStyle>
    );
  }

export default HeroProduct;
