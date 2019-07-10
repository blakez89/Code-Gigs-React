import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainPanel.css';

class MainPanel extends Component {
    
    render() { 
        return ( 
          <header className="inner">
          <h2><a href="index.html"><i className="fas fa-code"></i>
              CodeGig</a></h2>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/gigs">All gigs</Link>
              </li>
              <li>
              <Link to="/addgig">Add gigs</Link>
              </li>
            </ul>
          </nav>
        </header>
         );
    }
}
 
export default MainPanel;