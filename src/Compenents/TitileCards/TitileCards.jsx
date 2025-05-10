import React, { useEffect, useRef } from 'react';
import './TitileCards.css';
import cards_data from '../../assets/cards/Cards_data';

function TitileCards({title}) {
  const cardsRef = useRef();

  function handleWheel(event) {
    event.preventDefault(); // Prevent the default scroll behavior
    cardsRef.current.scrollLeft += event.deltaY; // Move horizontally based on deltaY
  }

  useEffect(() => {
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
        {cards_data.map((card, index) => (
          <div className='card' key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TitileCards;
