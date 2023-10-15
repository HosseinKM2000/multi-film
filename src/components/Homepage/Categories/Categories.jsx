import { useState ,useEffect} from 'react';
import {categories} from '../../../assets/data/the-data';
import './Categories.css';
import downArrow from '../../../assets/image/down.png';
import refreshBtn from '../../../assets/image/refresh.png';
import React from 'react';
import { useAccordionButton } from 'react-bootstrap';

function Categories(props) {

  const [categorie,setCategorie] = useState(null)
  const [styleLoad,setStyleLoad] = useState(false);
  let {change} = props;
  
 


  const Sort = (value) => {
    
    let type = categories[0].categorie;
    let genre = categories[1].categorie;
    let year = categories[2].categorie;
    let order = categories[3].categorie;
    
    switch(true)
    {
      case(year.includes(Number(value))):setCategorie(Number(value))
      break;
      case(genre.includes(value)):setCategorie(value)
      break;
      case(order.includes(value)):setCategorie(value)
      break;
      case(type.includes(value)):setCategorie(value)
      break;
      default:console.log('undifindType')
    }
    
  }


  useEffect(()=>{
    change(categorie)
  },[categorie])

  

  return (
    <div className='categories'>
        {
            categories.map((cate,index) => (
                <div>
                  <div className='categorie'>
                     <button>{cate.name}</button>
                     <fieldset className='drop-list'>
                    {
                        cate.categorie.map(item =>(
                            <div>
                                <input type='radio' value={item} id={item} name={cate.type} onFocus={(e)=> Sort(e.target.value)}/>
                                <label>{item}</label>
                            </div>
                        ))
                    }
                  </fieldset>
                  <img src={downArrow} alt="dropdown-arrow" className='dropdown-arrow'/>
                  </div>
                </div>
            ))
        }
        <img src={refreshBtn} alt="refresh" onClick={()=>{
          setStyleLoad(true);
          setTimeout(() => {setStyleLoad(false)
                            window.history.go()
          },2000);}} style={styleLoad ? {transform:'rotate(1000deg)'}: console.log('styleLoad=false') } />
    </div>
  )
}

export default Categories;

