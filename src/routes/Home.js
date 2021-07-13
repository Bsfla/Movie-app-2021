import './Home.css';
import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import Movies from '../components/Movies';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
      margin: 0;
      padding : 0;
      box-sizing: border-box;
     
      
      html,
      body {
        margin: 0;
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
        header {
          background-color: #373b69;
          padding: 2rem;
          display: flex;
          justify-content: flex-end;

          input {
            background-color: transparent;
            border: 2px solid #22254b;
            border-radius: 50px;
            font-family: inherit;
            font-size: 1.2rem;
            padding: 0.5rem;
            outline: none;
            color:  white;
            margin-right: 14em;
          }
        }


    `
const Movie_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    getMovies(Movie_API);
  },[])

  const getMovies = async(API) => {
    setLoading(true);
      try {
        const Movies = await axios.get(API);
        setMovies(Movies.data.results);
      } catch(e) {
        console.log(e);
      }
      setLoading(false);
    }
  
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    if (searchItem) {
        getMovies(SEARCH_API + searchItem);
        setSearchItem('');
      }
    }
  

  const handleOnChange = (e) => {
    setSearchItem(e.target.value);
  } 

  return ( 
   <MoviesAllBlock>
     <GlobalStyle></GlobalStyle>
         <header>
           <form onSubmit={handleOnSubmit}>
             <input type="text" placeholder="Search" value={searchItem} onChange={handleOnChange}/>
           </form>
         </header>
         <div className="movies">
             {movies.map(movie => (
              <Movies key={movie.id} movie={movie} />))}
         </div>
  </MoviesAllBlock>
  )
}          
  export default Home;

