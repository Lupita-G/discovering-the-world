import React from "react";
import { Link } from 'react-router-dom';
import PostForm from "../common/PostForm"; 
import '../styles/Navbar.css';

const Navbar = () => {

  return (
      <div className="navbar fixed-top navbar-expand-lg navbar-dark bg-black">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
          <li className="nav-item">
              <Link className="nav-link" to='/All' >
                All 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/travel'>
                Travel
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/lifestyle'>
                Lifestyle
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/business'>
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to='/food'
              >
                Food
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to='/work'
              >
                Work
              </Link>
            </li>
          </ul>
        
        </div>
        <PostForm />
      </div>
  );
};

export default Navbar;
