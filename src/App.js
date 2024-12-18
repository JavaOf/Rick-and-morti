import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Cart from './components/Cart';
import Card from './components/Card';
import './app.css';


function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const getDataFetch = () => {
      axios.get('https://rickandmortyapi.com/api/character')
      .then(({data}) =>{
         setData(data.results)
         console.log(data.results)
        })
        .catch((err) => {
          console.log('Ошибка при получении данных', err)
          setData(null);
        })
      }

      getDataFetch();
  }, [])

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Card dataElements={data}/>}/>
      <Route path='/cart/:id' element={<Cart/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
