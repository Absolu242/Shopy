import React from 'react';
import {MdAddShoppingCart} from 'react-icons/md';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Group from '../../../assets/Group.png';
import './Ads.css'


function Ads({info}) {

const { title, price,items} = info;
    return (
        <div className='AdsStyle'>
            <div className='grid-item sold'>
                <span className='percent'>
                
                   <img src={Group} alt='percent'/>
                    <p>Sale <br/> <span>50%</span></p>
                
                </span>
                <span className='details'>
                    <h3>{title}</h3>
                    <p>{items}</p>
                </span>
                <span className='action'>
                <Link to="/" style={{color: '#ff5912'}}>
                    <MdAddShoppingCart />
                </Link>
                <span>{price}$</span>
                </span>
            </div>
            <div className='grid-item adsArea'>
               <p> Your  <span>Ads</span>  here</p>
            </div>
        </div>
    )
}

export default Ads
