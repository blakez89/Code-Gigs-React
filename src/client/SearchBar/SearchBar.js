import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="search" className="search-wrap">
            <h1>Find A Coding Gig</h1>
            <form action="gigs.html" className="search-form">
              <i className="fas fa-search"></i>
              <input type="search" name="term" placeholder="Javascript, PHP, Rails, etc..." /> 
               <input type="submit" value="Search" /> 
            </form>
          </div>


         );
    }
}
 
export default SearchBar;