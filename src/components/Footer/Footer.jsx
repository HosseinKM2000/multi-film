import React from 'react';
import logo from '../../assets/image/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <hr />
        <div>
            <span>تمامی اطلاعات مطعلق به</span>
            <img src={logo} alt="logo" />
            <span>مولتی فیلم می باشد.</span>
        </div>
    </footer>
  )
}

export default Footer
