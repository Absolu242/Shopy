import React from 'react';
import ContactHeader from './Sections/ContactHeader';
import NavHeader from './Sections/NavHeader';

function Header() {
    return (
        <div>
            <ContactHeader/>
            <hr/>
            <NavHeader/>
        </div>
    )
}

export default Header
