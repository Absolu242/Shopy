import React from 'react'
import Logo from '../../../assets/Logo.png'
import PaymentImages from '../../../assets/PaymentImages.png'
import styled from 'styled-components';
import './Footer.css'


function Footer() {
    return (
        <div className='Foot'>
            <div className='logo'>
                <img src={Logo} alt='logo'/>
                <p>shopy &copy;2020 Rahan Bouess All rights reserved</p>
            </div>

            <div className='lists'>
                <ul className='list'>
                    <li className='list-items'>
                        <a href='#'>about us</a></li>
                    <li className='list-items'><a href='#'>contact us</a></li>
                    <li className='list-items'><a href='#'>support</a></li>
                </ul>

                <ul className='list'>
                    <li className='list-items'><a href='#'>our feed</a></li>
                    <li className='list-items'><a href='#'>terms and conditions</a></li>
                    <li className='list-items'><a href='#'>our privacy</a></li>
                </ul>

                <ul className='list'>
                    <li className='list-items'><a href='#'>join us</a></li>
                    <li className='list-items'><a href='#'>live support</a></li>
                </ul>
            </div>

            <div className='payement'>
                <h3>Payement Methods</h3>
                <img src={PaymentImages} alt='PaymentImages'/>
            </div>
        </div>
    )
}

export default Footer
