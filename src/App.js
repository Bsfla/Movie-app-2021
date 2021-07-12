import logo from './logo.svg';
import './App.css';
import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import Movies from './Movies';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
      margin: 0;
      padding : 0;
      box-sizing: border-box;
     
      
      html,
      body {
        height: 100%;
        width : 100%;
        background-color: #eff3f7;
      }     
`

const MoviesAllBlock  = styled.div `
         height : 100%;
        .Loader {
          height : 96vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .movies {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          padding: 50px;

        }


    `


const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async() => {
      setLoading(true);
      try {
        const {
          data : {
            data :{ movies }
           }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        setMovies(movies);
      } catch(e) {
        console.log(e);
      }
      setLoading(false);
    }
    fetchData();
  },[])

  return ( 
   <MoviesAllBlock>
     <GlobalStyle></GlobalStyle>
      {isLoading ? (
         <div className="Loader">
            <span className="Loader_text">Loading...</span>   
        </div>
       ) : (
         <div className="movies">
             {movies.map(movie => (
              <Movies key={movie.id} movie={movie} />))}
         </div>
          )} 
  </MoviesAllBlock>
  )

}

export default App;
