import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <HeaderMain/>
            <BusinessInfo/>
        </div>
    );
};

export default Header;