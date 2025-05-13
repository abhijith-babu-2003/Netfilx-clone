import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

function Player() {

  const{id} =useParams()
  const navigate=useNavigate()

const[apidate,setapidata]=useState({
  name:'',
  key:'',
  published_at:'',
  typeof:''
})  
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzU5OWNiMTJhNzY2ZWM5ZjQ3MmE5ZWMyMzM2ZWJlNyIsIm5iZiI6MTc0NzExMjIzNi4xMTMsInN1YiI6IjY4MjJkMTJjOTdhNWUyY2U2MTJkMWU1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m-EoajQ6q0CzNaFLJwb65AfqZpgwN8YceeHFkSl24ao'
  }
};

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setapidata(res.results[0]))
  .catch(err => console.error(err));

},[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe width='90%' height="90%" 
      src={`https://www.youtube.com/embed/${apidate.key}`} title='trailer' frameBorder='0' allowFullScreen> </iframe>
      <div className="player-info">
        <p>{apidate.published_at.slice(0,10)}</p>
        <p>{apidate.name}</p>
        <p>{apidate.type}</p>
      </div>
    </div>
  )
}

export default Player