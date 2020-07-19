import React, {Component,useRef} from 'react';
import {connect} from 'react-redux';
import {FaShoppingBasket} from 'react-icons/fa';
import {removeFromCart} from '../../../_actions/cart_action';
import './MiniBasket.css';

class MiniBasket extends Component {
  render () {
    const {cartItems} = this.props;
    const closeRef = useRef();

    function Close(){
      console.log(closeRef);
      closeRef.style.display='none';

    }

    return (
      <>
        <label forHtml='tap' className='tap-label'>
          <span className="counter">
            {cartItems.length}
          </span>
          <FaShoppingBasket />
          
        </label>
        <input type="checkbox" className='tap'/>
        <div ref={closeRef} className="card">
          <div className="mini-basket__card">
            <button className="closeCard" onClick={Close()}>
              <i className="icon ion-ios-close-empty" />
            </button>
            {cartItems.length === 0
              ? 'Basket is empty'
            : <p className='text'>{`you have`} <span> {`${cartItems.length}`} </span> {`Items in the Basket`}</p>
                }
            {cartItems.length > 0 &&
            <>
              <div className="mini-basket__card--content">
                {cartItems.map (item => (
                  <div className="basket__card--content__item" key={item.id}>
                    <div className="image">
                      <img src={item.imageUrl[0]} alt={item.id} />
                    </div>
                    <div className="info second">
                      <h3> {item.title} </h3>
                      <p className="price">
                        {item.price}
                      </p>
                      <p className="quantity">
                        QTY :{item.count}
                      </p>
                    </div>
                    <button
                      className="close"
                      onClick={() =>
                        this.props.removeFromCart (this.props.cartItems, item)}
                    >
                      <i className="icon ion-ios-close-empty" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mini-basket__card__action">
                  <h2>
                    SUBTOTAL:

                    <span>
                      {cartItems.reduce ((a, c) => a + c.price * c.count, 0)}
                    </span>
                  </h2>

                  <div className="btn">
                    <button className="btn-primary">
                      {' '}CHECKOUT
                    </button>
                  </div>

                  <div className="btn">
                    <button className="btn-secondary">
                      VIEW  CART
                    </button>
                  </div>

                </div>
              </>
              }
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.cart.items,
});

export default connect (mapStateToProps, {removeFromCart}) (MiniBasket);
