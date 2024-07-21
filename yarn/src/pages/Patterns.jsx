import PatternCard from '../components/PatternCard';
import '../styles.css';
import React, { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

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
            <div className="filter-container filter-aes padding">
                <div className="filter-group">
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        <label htmlFor="type" style={{ marginRight: '0.5em' }}><b>Plushy Type</b></label>
                        <OverlayTrigger placement="top" overlay={<Tooltip id="type-tooltip">Plushy Type refers to the category of the plushy</Tooltip>}>
                            <span style={{ cursor: 'pointer', position: 'relative', top: '-3px' }}>
                                <img
                                    src="/icons/info.png"
                                    width="20"
                                    height="20"
                                    alt="logo"
                                />
                            </span>
                        </OverlayTrigger>
                    </div>
                    <select name="type" id="type" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Animal">Animal</option>
                        <option value="Plant">Plant</option>
                        <option value="Object">Object</option>
                    </select>
                </div>

                <div className="filter-group">
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        <label htmlFor="difficulty" style={{ marginRight: '0.5em' }}><b>Difficulty</b></label>
                        <OverlayTrigger placement="top" overlay={<Tooltip id="type-tooltip">Difficulty indicates how challenging the pattern is to complete</Tooltip>}>
                            <span style={{ cursor: 'pointer', position: 'relative', top: '-3px' }}>
                                <img
                                    src="/icons/info.png"
                                    width="20"
                                    height="20"
                                    alt="logo"
                                />
                            </span>
                        </OverlayTrigger>
                    </div>
                    <select name="difficulty" id="difficulty" value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>

                <div className="filter-group">
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        <label htmlFor="sewing" style={{ marginRight: '0.5em' }}><b>Sewing Level</b></label>
                        <OverlayTrigger placement="top" overlay={<Tooltip id="type-tooltip">Sewing Level indicates how much sewing is involved</Tooltip>}>
                            <span style={{ cursor: 'pointer', position: 'relative', top: '-3px' }}>
                                <img
                                    src="/icons/info.png"
                                    width="20"
                                    height="20"
                                    alt="logo"
                                />
                            </span>
                        </OverlayTrigger>
                    </div>
                    <select name="sewing" id="sewing" value={selectedSewing} onChange={(e) => setSelectedSewing(e.target.value)}>
                        <option value="All">All</option>
                        <option value="None">None</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>

                <div className="filter-group">
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        <label htmlFor="length" style={{ marginRight: '0.5em' }}><b>Length</b></label>
                        <OverlayTrigger placement="top" overlay={<Tooltip id="type-tooltip">Length indicates approximately how long in hours it should take</Tooltip>}>
                            <span style={{ cursor: 'pointer', position: 'relative', top: '-3px' }}>
                                <img
                                    src="/icons/info.png"
                                    width="20"
                                    height="20"
                                    alt="logo"
                                />
                            </span>
                        </OverlayTrigger>
                    </div>
                    <select name="length" id="length" value={selectedLength} onChange={(e) => setSelectedLength(e.target.value)}>
                        <option value="All">All</option>
                        <option value="1 hour">1 hour</option>
                        <option value="2 hours">2 hours</option>
                        <option value="3 hours">3 hours</option>
                        <option value="4 hours">4 hours</option>
                        <option value="5+ hours">5+ hours</option>
                    </select>
                </div>

                <div className="filter-group">
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        <label htmlFor="yarn" style={{ marginRight: '0.5em' }}><b>Yarn</b></label>
                        <OverlayTrigger placement="top" overlay={<Tooltip id="type-tooltip">Yarn indicates the weight (thickness) of the yarn</Tooltip>}>
                            <span style={{ cursor: 'pointer', position: 'relative', top: '-3px' }}>
                                <img
                                    src="/icons/info.png"
                                    width="20"
                                    height="20"
                                    alt="logo"
                                />
                            </span>
                        </OverlayTrigger>
                    </div>
                    <select name="yarn" id="yarn" value={selectedYarn} onChange={(e) => setSelectedYarn(e.target.value)}>
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

                <div className="filter-group">
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        <label htmlFor="size" style={{ marginRight: '0.5em' }}><b>Size</b></label>
                        <OverlayTrigger placement="top" overlay={<Tooltip id="type-tooltip">Size indicates how big the finished product is</Tooltip>}>
                            <span style={{ cursor: 'pointer', position: 'relative', top: '-3px' }}>
                                <img
                                    src="/icons/info.png"
                                    width="20"
                                    height="20"
                                    alt="logo"
                                />
                            </span>
                        </OverlayTrigger>
                    </div>
                    <select name="size" id="size3" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
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
            {/* <ReactTooltip /> */}
        </div>
    );
}

export default Patterns;