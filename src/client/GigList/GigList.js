import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './GigList.css';
import uuid from "uuid/v1";

class GigList extends Component {
    state = { gigs: [] }

    componentDidMount() {
      fetch('/api/gigs')
        .then(res => res.json())
        .then(gigs => this.setState({ gigs }));
    }

    createGigs = () =>{
      return this.state.gigs.map(gig=>
        <div className="gig" key={uuid()}>
        <h3>{gig.title}</h3>
        <p>{gig.description}</p>
        <ul>
          <li>Budget: {gig.budget}</li>
          <li><a href={`mailto:${gig.contact_email}`} className="btn btn-reverse">Apply Now</a></li>
        </ul>
        <div className="tech">
          <small>Technologies Needed: <span>{gig.technologies}</span></small>
        </div>
      </div>
      )
    }

    render() { 
        
        return ( 
          <section id="gigs" className="container">
        {this.createGigs()}
      </section>   
      
      );
    }
}
 
export default GigList;