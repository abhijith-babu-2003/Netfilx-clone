import React, { useEffect, useRef, useState } from 'react';
import './TitileCards.css';
import { Link } from 'react-router-dom';

function TitileCards({title,category}) {

  const[apidata,setApiData] =useState([])

    const cardsRef = useRef();

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzU5OWNiMTJhNzY2ZWM5ZjQ3MmE5ZWMyMzM2ZWJlNyIsIm5iZiI6MTc0NzExMjIzNi4xMTMsInN1YiI6IjY4MjJkMTJjOTdhNWUyY2U2MTJkMWU1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m-EoajQ6q0CzNaFLJwb65AfqZpgwN8YceeHFkSl24ao'
  }
};



  function handleWheel(event) {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY; 
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));


    const cardsList = cardsRef.current;
  
    cardsList.addEventListener('wheel', handleWheel);

    return () => {
      cardsList.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className='cards-list' ref={cardsRef}>
        {apidata.map((card, index) => (
          <Link  to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TitileCards;
