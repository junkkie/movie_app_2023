import React from 'react'
import '../styles/Movie.css';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Detail.css'

function Detail() {
  const location = useLocation();
  console.log(location)

  const navigate = useNavigate();
  if(location.state === undefined){
    navigate('/'); //직접 주소창에 /detail 입력해서 이동할 때 바로 홈으로 이동(전달되는 state값이 없어서 404 뜸), 즉 리다이렉트 기능
  }

  const {genres, poster, summary, title, year} = location.state;

  return (
    <div className="detail">
      <img src={poster} alt={title}  title={title} />
      <div className="detail_data">        
        <h3 className="detail_title" style={{backgroundColor: '#eee'}}>{title}</h3>
        <h4 className="detail_year">{year}</h4>
        <ul className="detail_genres">
          {genres.map((genre, index) => {
            return(
            <li className ='detail_genre' key={index}>{genre}</li>
            )
          })}
        </ul> 
          
        <p className="detail_summary">{summary.slice(0,180)} ...</p>
      </div>
    </div>
  )
}

export default Detail