import React from 'react';
import ContactHeader from './Sections/ContactHeader';
import NavHeader from './Sections/NavHeader';

function Header() {
    return (
        <div style={{backgroundColor:'#ffff'}}>
            <ContactHeader/>
            <NavHeader/>
        </div>
    )
}

export default Header
