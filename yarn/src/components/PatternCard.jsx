import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function PatternCard({id, title, type, difficulty, sewing, length, yarn, size, image}) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`/pattern/${id}`);
    };

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body className="custom-font">
            <Card.Title><b>{title}</b></Card.Title>
            <Card.Text>
            <b>Plushy Type:</b> {type} <br />
            <b>Difficulty:</b> {difficulty} <br />
            <b>Sewing Level:</b> {sewing} <br />
            <b>Length:</b> {length} <br />
            <b>Yarn:</b> {yarn} <br />
            <b>Size:</b> {size}
            </Card.Text>
            <Button variant="primary" onClick={handleButtonClick} className="btn-custom">View Pattern</Button>
        </Card.Body>
        </Card>
    );
}

export default PatternCard;