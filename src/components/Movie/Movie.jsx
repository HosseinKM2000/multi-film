import React, { useState } from 'react'
import Footer from '../Footer/Footer';
import './Movie.css';
import { useSearchParams } from 'react-router-dom';
import { movies } from '../../assets/data/the-data';
import logo from '../../assets/image/logo.png';
import Menu from '../Menu/Menu';

const Movie = () => {

    const [searchParams,setSearchParams] = useSearchParams();
    const [allFilm,setAllFilm] = useState(movies[0].concat(movies[movies.length-1]))
    let eimFilm = allFilm.find(item => item.name === searchParams.get('name'));
    console.log(eimFilm)
  return (
    <div className='Movie-box'>
        {
            <>
             <div className='header'>
              <div className="banner">
                <img src={eimFilm.banner} alt="banner" />
              </div>
              <div className='head-sections'>
                <div className="head-r">
                    <Menu/>
                    <h1>{eimFilm.name}</h1>
                    <span className="yaer">سال: {eimFilm.year}</span>
                    <span className="genre">ژانر: {eimFilm.genre}</span>
                    <span className="lang">زبان: </span>
                    <span className='contry'>محصول: {eimFilm.contry}</span>
                    <span className='rate'><kbd>IMDB</kbd>رای: {eimFilm.rate}/10</span>
                    <span className='director'>کارگردان : ...</span>
                    <span className='actors'>ستارگان : ...</span>
                </div>
                <div className="head-l">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <img src={eimFilm.poster} alt="poster" />
                </div>
              </div>
             </div>
             <div className='Movie-Content'>
                <span>خلاصه فیلم :</span>
                <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
             </div>
            </>
        }
        <Footer/>
    </div>
  )
}

export default Movie
