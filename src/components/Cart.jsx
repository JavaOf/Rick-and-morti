import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

export default function Cart() {
  const [desc, setDesc] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) => setDesc(data))
    .catch((err) => {
      console.log(err)
    })
  }, [id]);

  return (
    <div className='container-info-cards'>
     <div key={desc?.id} className="cards">
          <div className="cards-items1">
            <img src={desc?.image} alt={desc?.name} className="cards-image" />
          </div>
          <div className="cards-items2">
            <h2 onClick={() => navigate('/')} style={{cursor: 'pointer'}} className="cards-title">
              {desc?.name}
            </h2>
            <h3 className="cards-status">
              {desc?.status} - {desc?.species}
            </h3>
            <h2 className="cards-names">{desc?.origin?.name}</h2>
            <h4 className="cards-location-name">{desc?.location?.name}</h4>
          </div>
          </div>
    </div>
  )
}
