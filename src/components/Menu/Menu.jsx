import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
   <ul className='menu'>
    <Link to={"/"}><li>خانه</li></Link>
    <li>منتخب</li>
    <li>درباره</li>
    <li>ارتباط با ما</li>
   </ul>
  )
}

export default Menu
