import React from 'react';
import Logo from "../../assets/logos/huble_logo_white.png";

const AppLogo = ({ className }) => {
    return(
        <div className={className}>
            <img src={Logo} alt="LOGO" width="89px" />
        </div>
    )
};

export default AppLogo