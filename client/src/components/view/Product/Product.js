import React, { Component } from 'react';
import {MdAddShoppingCart} from 'react-icons/md';
import {RiHeartLine} from 'react-icons/ri';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addToCart} from '../../../_actions/cart_action';
const ProductStyle = styled.div`

  position: relative;
  height:320px;
  width:220px;
  border:1px solid #ffff;
  background-color:#ffff;
  text-align:center;
  margin: 10px 10px;
  
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
          width:100px;
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
        top:10px;
        
        button{

          color:#495662;
          margin:0 10px;
          background-color:none;
          background:none;
          border:none;
          font-size:18px;

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
class Product extends Component {
  render(){

  const {item} = this.props;

  return (
    <ProductStyle>
      <div className="front">
        <div className="image">
          <Link to={`/product/${item.id}`}>
            <img src={item.imageUrl[0]} alt={item.imageUrl[0]} />
          </Link>
        </div>
        <div className="info">
          <Link to={`/product/${item.id}`}>
            <span className="title" style={{color: '#495662'}}>
              <h4>{item.title}</h4>
            </span>
            <span style={{color: '#ff5912'}}>
              <strong>{`Price : ${item.price}$`}</strong>
            </span>
          </Link>
        </div>
      </div>

      <div className="hover">

        <div className="info">
          <Link to={`/product/${item.id}`}>
            <div className="image">
              <img src={item.imageUrl[0]} alt={item.imageUrl[0]}  />
            </div>
            <span className="title" style={{color: '#ff5912'}}>
              <h5>{item.title}</h5>
            </span>
            <div
              className="size"
              style={{color: '#495662', textTransform: 'lowercase'}}
            >
              <p>
                size:
                {' '}
                {item.size.map ((item, i) => (i >= 1 ? ` - ${item} ` : ` ${item} `))}
              </p>
            </div>
            <div className="color">
              {item.color.map ((col, i) => (
                <div
                  key={i}
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
          </Link>
        </div>

        <div className="action">
          <button   onClick={() => this.props.addToCart (this.props.cartItems, item)}>
            <MdAddShoppingCart />
          </button>
          <button >
            <RiHeartLine />
          </button>
        </div>
      </div>
    </ProductStyle>
  );
}
}

const mapStateToProps = state =>({
  cartItems: state.cart.items,
})

export default connect(mapStateToProps, {addToCart})(Product)
