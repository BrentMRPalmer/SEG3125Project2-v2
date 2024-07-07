import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../styles.css';

const Pattern = ({ patternData }) => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate(`/patterns`);
    };

    const { id } = useParams();
    const pattern = patternData.find((p) => p.id === parseInt(id));

    return (
        <div className="wrapper">
            <Button variant="primary" onClick={handleButtonClick}>
                <img
                src="/icons/arrow.png"
                width="25"
                height="25"
                className="d-inline-block align-top"
                alt="logo"
                />
                {' '}
                Back to Patterns
            </Button>
            <h1 className="centered-text"><b>{pattern.title}</b></h1>
            <div className="image-container">
                <img className="rounded-image" src={pattern.image} />
            </div>
            <h1 className="centered-text"><b>Characteristics</b></h1>
            <div className="characteristics-container padding">
                <p><b>Plushy Type:</b> {pattern.type} </p>
                <p><b>Difficulty:</b> {pattern.difficulty}</p>
                <p><b>Sewing Level:</b> {pattern.sewing}</p>
                <p><b>Length:</b> {pattern.length}</p>
                <p><b>Yarn:</b> {pattern.yarn}</p>
                <p><b>Size:</b> {pattern.size}</p>
            </div>
            <h1 className="centered-text"><b>What You'll Need</b></h1>
            <div className="custom-body-font padding">
                <ul>
                    {pattern.tools.map( (tool, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: tool }}></li>
                    ))}
                </ul>
            </div>
            <h1 className="centered-text"><b>Instructions</b></h1>
            <div className="custom-body-font padding">
                {pattern.instructions.map( (instruction, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: instruction }}></p>
                ))}
            </div>
            
    </div>
    );
}

export default Pattern;