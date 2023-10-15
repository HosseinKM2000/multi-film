import React from 'react';
import './Content.css';
import { useState , useEffect} from 'react'; 
import {movies} from '../../../assets/data/the-data';
import { categories } from '../../../assets/data/the-data';
import loader from '../../../assets/image/Pulse-0.8s-207px.svg';
import { useNavigate } from 'react-router';

function Content(props) {

  let [load,setLoad] = useState(false);
  let [show,setShow] = useState(true);
  let [index,setIndex] = useState(0)
  let [Movies,setMovies] = useState(movies[index])
  let [all, setAll] = useState(movies[0].concat(movies[movies.length-1]))
  let [conditions,setConditions] = useState()
  let [alert,setAlert] = useState({status:false,message:''})
  let {total} = props;
  let navigate = useNavigate();
  




  useEffect(() => {
    
    Filter()

  },[total,conditions])



  
  const Filter = () => {
    
    if(conditions === null)
    {
      setShow(true)

    }
    else
    {
      setShow(false)
    }
    setConditions(total)
    run()
  }

  const run = () => 
  {
 
    switch(true)
    {
      case(categories[1].categorie.includes(conditions)):{
        let Item = all.filter(item => item.genre === conditions);
        if(Item)
        {
          setMovies(Item)
          Alert(false)
        }
        else
        {
          Alert(true,'ژانر مورد نظر وجود ندارد')
        }
      }
      break
      case(typeof(conditions) === 'number'):{
        let Item = all.filter(item => item.year === conditions)
        if(Item)
        {
          setMovies(Item)
          Alert(false)
        }
        if(Item.length === 0)
        {
          Alert(true,'فیلم در این سال موجود نیست')
        }
      }
      break
      case(categories[0].categorie.includes(conditions)): 
      if(conditions === 'همه')
      {
        setMovies(movies[0])
        setShow(true);
        setIndex(0);
        setAlert(false)
      }
      else{
       let Item = all.filter(item => item.type === conditions);
       setMovies(Item)
       setAlert(false)
      }
      break
      case(categories[3].categorie.includes(conditions)):{
        let Item;
        if(conditions === 'جدیدترین')
        {
          Item = all.filter(item => item.year > 2020 )
          setMovies(Item)
          setAlert(false)
        }
        else if(conditions === 'قدیمی ترین')
        {
          Item = all.filter(item => item.year < 2010)
          setMovies(Item)
          setAlert(false)
        }
        else
        {
          Item = all.filter(item => item.rate > 8)
          setMovies(Item)
          setAlert(false)
        }
      }
      break;
      default:
        {
         setMovies(movies[index])
         setIndex(0)
        }
    }

    if( typeof(conditions) === 'object' && conditions !== null && conditions.length !== 0 && conditions !== undefined)
    {
      let string = conditions[0]
      if(string.length > 1)
      {
        string = string.replace(string[0],string[0].toUpperCase())
        let Item = all.filter(item => item.name.includes(string))
        setMovies(Item)
      }
      else
      {
        console.log('text not enough')
      }
    }
  }


  const loading = () => {

    setLoad(true)
    setTimeout(()=>{
      setIndex(index+=1)
      if(movies[index])
      {
        setMovies([...Movies,...movies[index]])
      }
      else
      {
        setMovies([...Movies])
        setShow(false);
      }
      setLoad(false)
    },2000)
  }


  const Alert = (status,message) => {

     if(status && message)
     {
      setAlert({status,message})
     }
     else
     {
      setAlert({status,message:''})
     }
  }

  return (
    <div className='content'>
      <div className='movies'>
        {
          Movies.map(movie => (
            <div className='movie'>
              <img src={movie.poster} alt={movie.name} />
              <div>
                <h5>{movie.name}</h5>
                <div>
                  <div>
                   <div></div>
                   <span>{movie.rate}</span>
                  </div>
                  <button onClick={() => navigate(`/movie?name=${movie.name}`)}>نمایش</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      {
        alert.status ? <div className='alert'><span>{alert.message}</span></div> : 
        <div style={load ? {justifyContent:'center'} : {justifyContent : 'start'}}>
        {
          load ? <img src={loader} alt="loader" /> : show ?  <button onClick={loading}>بیشتر</button>  : <br/>
        }
      </div>
      }
    </div>
  )
}

export default Content
