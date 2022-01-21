import React from 'react';
import logo from '../../../../assets/Logo_saude_da_rua.png';
const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="Logo Saúde da Rua" className="logo" />
      </div>
    </div>
  );
};

export default Header;
