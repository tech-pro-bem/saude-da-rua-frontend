import React from 'react';
import logo from '../../../../assets/Logo_saude_da_rua.png';
import Padding from './Header.style';

// TODO
// - padding é palavra reservada, refatorar
// - não há motivos para ter três DIVs encadeadas aqui

const Header = () => {
  return (
    <Padding>
      <div>
        <div className="header">
          <img src={logo} alt="Logo Saúde da Rua" className="logo" />
        </div>
      </div>
    </Padding>
  );
};

export default Header;
