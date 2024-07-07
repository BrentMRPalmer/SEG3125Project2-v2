import PatternCard from '../components/PatternCard';
import '../styles.css';
import React, { useState } from 'react';

const Patterns = ({ patternData }) => {
    const [selectedDifficulty, setSelectedDifficulty] = useState('All');
    const [selectedType, setSelectedType] = useState('All');
    const [selectedSewing, setSelectedSewing] = useState('All');
    const [selectedLength, setSelectedLength] = useState('All');
    const [selectedYarn, setSelectedYarn] = useState('All');
    const [selectedSize, setSelectedSize] = useState('All');

    const filteredPatterns = patternData.filter((pattern) => {
        const difficultyFilter = selectedDifficulty === 'All' | pattern.difficulty === selectedDifficulty;
        const typeFilter = selectedType === 'All' | pattern.type === selectedType;
        const sewingFilter = selectedSewing === 'All' || pattern.sewing === selectedSewing;
        const lengthFilter = selectedLength === 'All' || pattern.length === selectedLength;
        const yarnFilter = selectedYarn === 'All' || pattern.yarn === selectedYarn;
        const sizeFilter = selectedSize === 'All' || pattern.size === selectedSize;
        return difficultyFilter && typeFilter && sewingFilter && lengthFilter && yarnFilter && sizeFilter;
    });

    return (
        <div className="wrapper">
            <div>
                <h1 class="centered-text"><b>Our Patterns</b></h1>
            </div>
            <div className="filter-container padding">
                <div>
                    <label for="type">Plushy Type: </label>
                    {' '}
                    <select className="margin-b" name="type" id="type" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Animal">Animal</option>
                        <option value="Plant">Plant</option>
                        <option value="Object">Object</option>
                    </select>
                </div>

                <div>
                    <label for="difficulty">Difficulty: </label>
                    {' '}
                    <select className="margin-b" name="difficulty" id="difficulty" value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>

                <div>
                    <label for="sewing">Sewing Level: </label>
                    {' '}
                    <select className="margin-b" name="sewing" id="sewing" value={selectedSewing} onChange={(e) => setSelectedSewing(e.target.value)}>
                        <option value="All">All</option>
                        <option value="None">None</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>

                <div>
                    <label for="length">Length: </label>
                    {' '}
                    <select className="margin-b" name="length" id="length" value={selectedLength} onChange={(e) => setSelectedLength(e.target.value)}>
                        <option value="All">All</option>
                        <option value="1 hour">1 hour</option>
                        <option value="2 hours">2 hours</option>
                        <option value="3 hours">3 hours</option>
                        <option value="4 hours">4 hours</option>
                        <option value="5+ hours">5+ hours</option>
                    </select>
                </div>

                <div>
                    <label for="yarn">Yarn Type: </label>
                    {' '}
                    <select className="margin-b" name="yarn" id="yarn" value={selectedYarn} onChange={(e) => setSelectedYarn(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Superfine (1)">Superfine (1)</option>
                        <option value="Fine (2)">Fine (2)</option>
                        <option value="Light (3)">Light (3)</option>
                        <option value="Medium (4)">Medium (4)</option>
                        <option value="Bulky (5)">Bulky (5)</option>
                        <option value="Super Bulky (6)">Super Bulky (6)</option>
                        <option value="Jumbo (7)">Jumbo (7)</option>
                    </select>
                </div>

                <div>
                    <label for="size">Size: </label>
                    {' '}
                    <select className="margin-b" name="size" id="size3" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </div>
            </div>
            <div className="patterns-container">
                {filteredPatterns.map((pattern, index) => (
                    <PatternCard 
                        key={index}
                        id={pattern.id}
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