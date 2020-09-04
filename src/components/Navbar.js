import React from 'react';

import '../App.css';
import '../index.css';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function Navbar() {
    return (
      <div>
        <Link to="/">Home </Link>
        <Link to="/about">About Us </Link>
        <Link to="/shop">Shop Now </Link>
      </div>
    );
  };

  export default Navbar;