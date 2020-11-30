import React from 'react';
import LOGO from '../../assets/images/CHAEBANLOGO.png';
import {
    LogoImage,
    Nav,
    NavbarContainer,
    SytledH1
} from './Styles';




const HeaderBar = () => {

    return (
        <Nav>
            <LogoImage src={LOGO} alt="logo" />
            <NavbarContainer >
                <SytledH1>Welcome to CHAEBAN ICE CREAM Challenge</SytledH1>
            </NavbarContainer>
        </Nav>
    );
}
export default HeaderBar;