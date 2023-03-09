import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import '../styles/Home.css';

function Home() {
  // state = {
  //   isLoading: true,
  //   movies : [],
  // }
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // componentDidMount(){
  //   // setTimeout(() => {
  //   //   this.setState({isLoading:false});
  //   // }, 6000)
  //   this.getMovies();
  // }
  useEffect(()=>{
    getMovies();
  }, []);

  const getMovies = async () => {
    const {
      data: {
        data : {
          movies
        }
      }
    } =
    await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count')
    
    // this.setState({
    //   isLoading:false,
    //   movies, 
    // })                   ---> setIsLoading
    setIsLoading(false);
    setMovies(movies);
  }

  // const{isLoading, movies} = this.state; //구조분해할당
  return (
    
    <section className="container">
      {isLoading ? 
      <div className="loader">
          <span className="loder_text">'Loading...'</span>
      </div>
      :
      <div className="movies">
        {movies.map((movie, index) => <Movie
                                        key={index}
                                        id={movie.id}
                                        year={movie.year}
                                        title={movie.title}
                                        summary={movie.summary}
                                        poster={movie.medium_cover_image}
                                        genres={movie.genres}
                                      />
                                      
                    )
        }
        
      </div>
      }
    </section>
    
  )
}

export default Home;