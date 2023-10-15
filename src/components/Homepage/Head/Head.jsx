import React from 'react';
import './Head.css';
import logo from '../../../assets/image/logo.png';
import banner from '../../../assets/image/move-clapperboard-with-popcorn-boxes.jpg';
import Menu from '../../Menu/Menu';

const Head = () => {
  return (
    <div className='Head'>
      <div className='Head-r'>
        <Menu/>
        <h1>جدیدترین فیلم ها و سریال ها</h1>
        <p> به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.</p>
      </div>
      <div className='Head-l'>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <img src={banner} alt="banner" />
      </div>
    </div>
  )
}

export default Head
