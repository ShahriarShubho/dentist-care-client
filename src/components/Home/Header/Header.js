import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbars from '../../ShareComonComponents/Navbars/Navbars';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <Navbars/>
            <HeaderMain/>
            <BusinessInfo/>
        </div>
    );
};

export default Header;