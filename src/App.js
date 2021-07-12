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
        background-color: #22254b;
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
const Movie_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async() => {
      setLoading(true);
      try {
        const Movies = await axios.get(Movie_API);
        setMovies(Movies.data.results);
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
         <div className="movies">
             {movies.map(movie => (
              <Movies key={movie.id} movie={movie} />))}
         </div>
  </MoviesAllBlock>
  )
             }
  export default App;



