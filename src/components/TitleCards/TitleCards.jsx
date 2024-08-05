import './TitleCards.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function TitleCards(props){

  const [apiData,setapiData] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmMyMzgxNmY0MjY0NzA1MzBiNjFmNmM2ZTZjN2NmNCIsIm5iZiI6MTcyMjAyNDg4MC4zNjU3MSwic3ViIjoiNjZhNDAyNGQyYTMzNzQ4N2RkNzY3NmNiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.CQRnnen6tJeT_dM483Aoz4dg0xtQlUxk8o_NzKgpgto'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${props.category}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setapiData(response.results))
    .catch(err => console.error(err));
  },[])

  
  
  return (
    <div className="titlecards">
        <h2>{props.title}</h2>
        <div className="card-list">
          {
            apiData.map((item,index)=>{
              return <Link to={`/player/${item.id}`} className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500`+item.backdrop_path} alt="" />
                <p>{item.title}</p>
              </Link>
            })
          }
        </div>
    </div>
  )
}
