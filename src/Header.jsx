import React from 'react';
import Logo from './Images/writes_blue.png'
import Wish from './Wish.jsx'


const Header = () => {

  return (
    <>
    <div className="container">
    <div className="header">
    <img src={Logo} alt="Logo" height="60px" width="60px"/>
    <h1 className="head_h">Writes</h1>
    <Wish/>
    </div>
    </div>

    </>
  )
}
export default Header; 