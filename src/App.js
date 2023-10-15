import './App.css';
//import components
import Homepage from './components/Homepage/Homepage';
import { Route , Routes } from 'react-router';
import Movie from './components/Movie/Movie';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Routes>
          <Route element={<Homepage/>} path='/'/>
          <Route element={<Movie/>} path='/movie' />
          <Route element={<AboutUs/>} path='/About_us' />
        </Routes>
      </div>
    </div>
  );
}

export default App;
