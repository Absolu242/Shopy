import React from 'react'
import styled from 'styled-components';
import './NewsLetter.css'

function NewsLetter() {
    return (
        <div className='News'>
           <div className='content'>
           <div className='message'>
                <h3>NEWS LETTER</h3>
                <p>Join us now to get all news and special offers</p>
            </div>
            <div className='form'>
                <form>
                    <div className="formIcon">
                        <input type="text" placeholder="Type your email here"/>
                        <ion-icon name="mail-outline"></ion-icon>
                    </div>
                    <button>Join us</button>
                </form>
            </div>
           </div>
        </div>
    )
}

export default NewsLetter
