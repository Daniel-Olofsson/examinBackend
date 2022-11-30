import * as React from "react";
import { HashRouter, NavLink, Route, Routes } from 'react-router-dom'
import About from "../../about";
import Graphql from "../../graphql";
import Home from "../../Home"
import "./navbar.css"
function navbar() {
  return (
    <HashRouter>
        <ul>
          <div className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/graphql">gql</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </div>
        </ul>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/graphql" element={<Graphql/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </HashRouter>
    
  )
}

export default navbar