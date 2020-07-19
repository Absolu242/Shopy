import React from 'react';
import {FaShoppingBasket} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import './Hero.css'

function HeroProduct({item, addItem}) {
  const {id, title, HeroImage, kitItems, description, price} = item;

  return (
    <div 
      className="heroStyle"
      style={{
        backgroundImage: `url(${HeroImage})`,
        
        
      }}
    >
      <div className="info">
        <Link to={`/product/${id}`}>
          {' '}
          <div className="title">
            <h1>{title}</h1>
          </div>
        </Link>
        <div className="items" style={{color: '#34404b'}}>
          <p>
            <strong>{kitItems}</strong>
          </p>
        </div>
        <div className="description" style={{color: '#495662'}}>
          <p>{description}</p>
        </div>
        <div className="price">
          <span style={{color: '#34404b'}}>
            <strong>{`Price : ${price}$`}</strong>
          </span>
          <span className="action">
            <Link to={`/product/${id}`}>
              <FaShoppingBasket />
              <strong>
                <p>Order Now</p>
              </strong>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroProduct;
