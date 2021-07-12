import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const MoviesBlock = styled.div `
        width: 22%;
        height: 100%;
        background-color:  #373b69;
        position: relative;
        overflow: hidden;
        
        img {
            width: 100%;
            height: 100%;
            margin-right:20px;
           
        }
        margin-bottom:70px;
        .movie_data {
            margin-bottom: 0;
            
            display: flex;
            flex-direction : column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            color: white;
            background-color: #373b69;
        }

        .movie-over {
            background-color: white;
            position: absolute;
            bottom: 100%;
            right: 0;
            left: 0;
            height:100vh;
            transform: translateY(0%);
            transition: transform 0.9s ease-in-out;
            color: black;

            h2 {
                border-bottom: 40px;
            }
            p {
                margin-top: 150px;
            }

        }
        
        &:hover .movie-over {
            transform: translateY(100%);
        } 
        

`
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movies = ({ movie }) => {
    const { title, overview, vote_average, poster_path,release_date } = movie;
    return (
        <MoviesBlock>
            <img src={IMG_API + poster_path} alt={title} title={title} />
            <div className='movie_data'>
                <h2 className='title'>{title}</h2>
                <h3 className='year'>{release_date}</h3>
                <span className="rating">{vote_average}</span>
            </div>
            <div className="movie-over">
                <h2>OverView</h2>
                <h3 className="overview">{overview}</h3>
            </div>
                
          
        </MoviesBlock>
    )

}

export default Movies;