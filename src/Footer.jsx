import React from 'react';
import './index.css';


const Footer = () => {

    var year = new Date().getFullYear();

  return ( 
    <>
    <footer><p className="foot">copyright © {year} </p></footer>
    </>
  )
}
export default Footer; 