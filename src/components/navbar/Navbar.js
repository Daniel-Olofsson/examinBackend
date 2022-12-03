import * as React from "react";
import { NavLink, Route, Routes } from 'react-router-dom'
import About from "../../about";
import Graphql from "../../graphql";
import Home from "../../Home"
import "./navbar.css"
import MoviePage from "../MoviePage";
function navbar(props) {
  return (
   <div>
        <ul>
          <div className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/graphql">gql</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </div>
        </ul>
        
    
    </div>
  )
}

export default navbar