import React, {useState,useRef} from 'react';
import {MdAddShoppingCart} from 'react-icons/md';
import {BsPlus} from 'react-icons/bs';
import {RiHeartLine} from 'react-icons/ri';
import {FiMinus} from 'react-icons/fi';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
  

 import img1 from './assets/ProductImg1.png'  ;
 import img6 from './assets/ProductImg6.png' ;
 import img3 from './assets/ProductImg2.png';

const ProductInfoStyle = styled.div`

  position: relative;
  width:100%;
  height:100vh;
  background-size:cover;
  background-color:#fff;
  padding:50px 0;

  .content{
    position:absolute;
    display:grid;
    grid-template-columns:repeat(2,600px);
    
    width:100%;
    justify-content:center;
    align-content:center;
    margin:  auto;
  }

 

  .container{
    position:relative;
    width:100%;
    background:#fff;
    display:flex;
    justify-content:center;
    padding-left:50px;
  
  }

  .container-content{
    width:90%;
    position:absolute;
    display:flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width:'inherit',
  }

  .main-img{
    max-width:100%;
    height:300px;
    padding:10px
  }
  .main-img img{
      max-width:200px;

  }

  .content-imgs{
    position: relative;
    display:flex;
    justify-content:center;
    flex-direction:column;
    width:100%;
    height:100px;
    align-items:center;
    align-content:center;
  }

  .imgs{
    display:grid;
    
    position:absolute;
    grid-template-columns:repeat(3,1fr);
    grid-gap:18px;
    margin: auto;
    text-align:center;
  }


  .imgs span{
    position:relative;
    width:100px;
    height:100px;
    background-color:#f4f6f8;

}

  .imgs span img{
    position:relative;
    width:100px;
    height:100px;
   

}
.imgs span:hover{
    border:1px solid #ff5912;
    cursor:pointer;
}

 

  .info{
    position:relative;
    width:90%;
  }  
    
    h1{
      font-size:50px;
      color:#ff5912;
      margin:0;
      
    }

    .variation{
      position:relative;
      top:25%;
        .choice{
        display:flex; 
        position: relative;
        justify-content:space-between;
        flex-wrap:wrap;
        padding:15px 0;
        border-top:1px solid #dbdcddcc;
        border-bottom:1px solid #dbdcddcc;;
        }

        .color{
            display:flex; 
            position: relative;
            align-items:center;

            div{
                margin:0 2px;
            }
        }

        .quantity{
            display:flex; 
            position: relative;
            align-items:center;
           
            button{
                background:none;
               border:none;
               font-size:15px;
               outline: none;
               cursor:pointer !important;
            }
            span{
                color:#ff5912;
            }
        }
    }
    .price{
        position: relative;
        top:40%;
        display:flex; 
        justify-content:space-between;
      
        align-items:center;
        flex-wrap:wrap
    }
    span{
      position: relative;
      
    }

    .action{
        position: relative;
        display:flex; 
        align-items:center;

        a{
            text-decoration:none;
            color:#34404b;
            padding-left:20px;
            
      
            button{
              margin-left:12px;
              background-color:#ff5912;;
              color:#fff;
              border-radius:20px;
              padding:0 25px;
              border:none;
              cursor:pointer !important;
              
            }
          }
    }

    
  }

  .grid-item{
    padding:30px 0;
    
  }
`;

function ProductInfo({item}) {
  const {
    title,
    items,
    description,
    size,
    quantity,
    price,
    like,
    color,
    addCart,
    id,
    imageUrl,
    kitItems
  } = item;

  const [Quantity, setQuantity] = useState (1);
  const imgRef = useRef();
  const current = document.querySelector('#current');
  const imgs = document.querySelectorAll('.imgs img');
  const opacity= 0.4;
        
            function imgClick(e){
              // Reset opacity
              imgs.forEach(img => (img.style.opacity = 1));
              
              
              //Change current image to src of cliked image
              console.log( imgRef.current.src);
              console.log(`targt : ${e.target.src}`)
              imgRef.current.src = e.target.src;
          
              // change the opacity to opacity variable
              e.target.style.opacity = opacity;
              
            }

  return (
    <ProductInfoStyle>
      <div className='content'>
        <div className='container  grid-item'>
       <div className="container-content">
        <div className='main-img'>
            <img  ref={imgRef} src={img1} id='current'/>
          </div>
            <div className='content-imgs'>
              <div className='imgs'>
                 {imageUrl.map((image,i) =>
               <span key={i}> <img  onClick={imgClick} src={image} alt={i} /></span>
                 )}
            </div>
            </div>
       </div>
    </div>


      <div className="info grid-item">
        <div className="title"><h1>{title}</h1></div>
        <div className="items" style={{color: '#34404b'}}>
          <p><strong>{items}</strong></p>
        </div>

        <div className="kitItems" style={{color: '#495662'}}>
          <p>{kitItems}</p>
        </div>

        <div className="description" style={{color: '#495662'}}>
          <p>{description}</p>
        </div>

        <div className="variation">
          <p>Choose</p>
          <div className="choice">
            {/** Sizes Start */}
            <div>
              {'Size : '}
              {' '}
              {size.map ((item, i) => (i >= 1 ? ` - ${item} ` : ` ${item} `))}
            </div>
            {/** Sizes End*/}
            {/** Colors Start*/}

            <div className="color">
              {'Color : '}
              {color.map ((col, i) => (
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
            {/** Colors End*/}

            {/** Quantity start*/}
            <div className="quantity">
              {'Qty : '}
              <button onClick={() => setQuantity (Quantity + 1)}><strong><BsPlus/></strong></button>
              <span>{Quantity}</span>
              <button
                onClick={() =>
                  setQuantity (Quantity > 1 ? Quantity - 1 : Quantity)}
              >
                <strong><FiMinus/></strong>
              </button>
            </div>
            {/** Quantity End*/}

          </div>
        </div>

        <div className="price">
          <span style={{color: '#34404b'}}>
            <strong>{`Price : ${price}$`}</strong>
          </span>
          <div className="action">
            <Link to="/">
              <MdAddShoppingCart />
            </Link>
            <Link to="/">
              <RiHeartLine />
            </Link>
            <Link to="/">
              <button>
                <p>Order Now</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </ProductInfoStyle>
  );
}

export default ProductInfo;
