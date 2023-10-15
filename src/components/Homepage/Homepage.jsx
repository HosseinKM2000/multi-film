import React from 'react';
import Head from './Head/Head';
import Search from './Search/Search';
import Categories from './Categories/Categories';
import Content from './Content/Content';
import { useState } from 'react';
import Footer from '../Footer/Footer';

function Homepage() {

  const [total,setTotal] = useState(null)
 




  return (
    <>
     <Head/>
     <Search change={setTotal}/>
     <Categories change={setTotal}/>
     <Content total={total}/>
     <Footer/>
    </>
  )
}

export default Homepage;
