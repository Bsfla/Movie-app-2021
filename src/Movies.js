import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const MoviesBlock = styled.div `
        width: 40%;
        background-color: white;
        img {
            width: 200px;
            margin-right:20px;
        }
        margin-bottom: 70px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 20px;
        

`

const Movies = ({ movie }) => {
    const { year, title, summary,large_cover_image, genres } = movie;
    return (
        <MoviesBlock>
            <img src={large_cover_image} alt={title} title={title} />
            <div className='movie_data'>
                <h2 className='title'>{title}</h2>
                <h5 className='year'>{year}</h5>
                <ul className="genres">
                    {genres.map((genre, index) => (
                       <li key={index}>{genre}</li>
                    ))}
                </ul>
                <p className="summary">{summary}</p>

            </div>
        </MoviesBlock>
    )

}

export default Movies;