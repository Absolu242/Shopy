import React from 'react';
import {MdAddShoppingCart} from 'react-icons/md';
import {RiHeartLine} from 'react-icons/ri';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const ProductStyle = styled.div`

  position: relative;
  height:320px;
  width:220px;
  border:1px solid #ffff;
  background-color:#ffff;
  text-align:center;
  margin: 10px 20px;
  
  a{
    text-decoration:none;
  }
  .image{
    position: relative;
    top:20px;
    width:inherit;
    height:220px;
    align-items:center;
    align-content:center;
    text-align:center;
   
    img{
      width:inherit;
      height:180px;
    }
  }  

  .info{
    position: relative;
    line-height:10px;
    top:20px

    .title{
      font-weight:lighter;
    }
  }

  .hover{
    display:none;
  }

  :hover{
    transition: all 2s;
    .front{
      display:none;
    }

    .hover{
    height:320px;
    width:220px;
    display:flex;
    flex-direction:column;
    align-content:center;
    text-align:center;
    flex-wrap:wrap;

      .image{
        position: relative;
        top:20px;
        width:220px;
        height:120px;
        align-items:center;
        align-content:center;
        text-align:center;
      
        img{
          width:80px;
        height:100px;
        }
      } 

      .color{
        position: relative;
        width:100%;
        display:flex;
        align-items:center;
        align-content:center;
        text-align:center;
        justify-content:center
        
      }

      .action{
        position:relative;
        top:50px;
        
        a{
          text-decoration:none;
          color:#495662;
          margin:0 10px;

          :hover{
            color:#ff5912
          }
        }
      }
    }

  }

  .hover{
    display:none;
  }

`;

function Product({item, addItem}) {
  const {id,title, imageUrl, color, size, price} = item;

  return (
    <ProductStyle>
      <Link  exact to={`/product/:${id}`}>
      <div className="front">
        <div className="image">
          <img src={imageUrl.img1} alt="product image" />
        </div>
        <div className="info">
          <span className="title" style={{color: '#495662'}}>
            <h4>{title}</h4>
          </span>
          <span style={{color: '#ff5912'}}>
            <strong>{`Price : ${price}$`}</strong>
          </span>

        </div>
      </div>

      <div className="hover">

        <div className="info">

          <div className="image">
            <img src={imageUrl.img1} alt="product image" />
          </div>
          <span className="title" style={{color: '#ff5912'}}>
            <h5>{title}</h5>
          </span>
          <div className="size" style={{color: '#495662', textTransform:'lowercase'}}>
            <p>
              size:
              {' '}
              {size
                .map ((item, i) => (i === size.length ? ` ${item}` : ` ${ item} - `))}
            </p>
          </div>
          <div className="color">
            {color.map (col => (
              <div
                style={{
                  backgroundColor: `${col}`,
                  width: '15px',
                  height: '15px',
                  borderRadius: '50%',
                  margin: '0 5px',
                }}
              />
            ))}

          </div>
        </div>

        <div className="action">
          <Link exact to="/product/:productId" onClick={() => addItem (item)}>
            <MdAddShoppingCart />
          </Link>
          <Link exact to="/product/:productId" onClick={() => addItem (item)}>
            <RiHeartLine />
          </Link>
        </div>
      </div>
      </Link>
    </ProductStyle>
  );
}

export default Product;
