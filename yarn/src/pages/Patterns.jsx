import React from 'react'
import PatternCard from '../components/PatternCard';
import '../styles.css';

const Patterns = () => {
  return (
    <div className="wrapper">
        <div>
            <h1 class="centered-text"><b>Our Patterns</b></h1>
        </div>
        <div className="patterns-container">
            <PatternCard 
            title="Peter the Penguin"
            type="Animal"
            difficulty="Easy"
            sewing="Low"
            length="1 hour"
            yarn="Jumbo (7)"
            size="small"/>
            <PatternCard 
            title="Peter the Penguin"
            type="Animal"
            difficulty="Easy"
            sewing="Low"
            length="1 hour"
            yarn="Jumbo (7)"
            size="small"/>
            <PatternCard 
            title="Peter the Penguin"
            type="Animal"
            difficulty="Easy"
            sewing="Low"
            length="1 hour"
            yarn="Jumbo (7)"
            size="small"/>
            <PatternCard 
            title="Peter the Penguin"
            type="Animal"
            difficulty="Easy"
            sewing="Low"
            length="1 hour"
            yarn="Jumbo (7)"
            size="small"/>
            <PatternCard 
            title="Peter the Penguin"
            type="Animal"
            difficulty="Easy"
            sewing="Low"
            length="1 hour"
            yarn="Jumbo (7)"
            size="small"/>
        </div>
    </div>
  );
}

export default Patterns;