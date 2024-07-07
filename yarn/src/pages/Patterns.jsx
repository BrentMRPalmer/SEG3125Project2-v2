import React from 'react'
import PatternCard from '../components/PatternCard';
import '../styles.css';

const Patterns = ({ patternData }) => {
  return (
    <div className="wrapper">
        <div>
            <h1 class="centered-text"><b>Our Patterns</b></h1>
        </div>
        <div className="patterns-container">
            {patternData.map((pattern, index) => (
                <PatternCard 
                    key={index}
                    title={pattern.title}
                    type={pattern.type}
                    difficulty={pattern.difficulty}
                    sewing={pattern.sewing}
                    length={pattern.length}
                    yarn={pattern.yarn}
                    size={pattern.size}
                    image={pattern.image}
                />
            ))}
        </div>
    </div>
  );
}

export default Patterns;