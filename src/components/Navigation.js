import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBlock = styled.div `
      z-index: 1;
      width: 40px;
      position: fixed;
      
      display: flex;
      flex-direction: column;
      background-color: white;
      padding: 10px 20px;
      box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
       0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
       border-radius: 5px;
      a {
        text-decoration: none;
        color: #0008fc;
        text-transform: uppercase;
        font-size: 12px;
        text-align: center;
        font-weight: 600;
      } 
      a:not(:last-child) {
        margin-bottom: 10px;
      }     
`
const Navigation = () => {
     return (
      <NavBlock>
         <Link to= "/">Home</Link>
         <Link to="/about">About</Link>
     </NavBlock>
     );
}

export default Navigation;