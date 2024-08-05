import './Player.css'
import back_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Player(){
    const {id} = useParams();

    const [apidata,setapidata] = useState({
        name: "",
        key: "",
        published_at: "",
        type: ""
    });
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmMyMzgxNmY0MjY0NzA1MzBiNjFmNmM2ZTZjN2NmNCIsIm5iZiI6MTcyMjAyNDg4MC4zNjU3MSwic3ViIjoiNjZhNDAyNGQyYTMzNzQ4N2RkNzY3NmNiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.CQRnnen6tJeT_dM483Aoz4dg0xtQlUxk8o_NzKgpgto'
        }
      };
      
      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => setapidata(response.results[0]))
        .catch(err => console.error(err));
      },[])


      const navigate = useNavigate()

    return(
        <div className="player">
            <img src={back_icon} alt="" onClick={()=>navigate('/')}/>
            <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apidata.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
            <div className="player-info">
                <p>{apidata.published_at.slice(0,10)}</p>
                <p>{apidata.name}</p>
                <p>{apidata.type}</p>
            </div>
        </div>

    )
}

export default Player;