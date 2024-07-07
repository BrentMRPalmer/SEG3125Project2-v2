import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PatternCard({title, type, difficulty, sewing, length, yarn, size, image}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <b>Plushy Type:</b> {type} <br />
          <b>Difficulty:</b> {difficulty} <br />
          <b>Sewing Level:</b> {sewing} <br />
          <b>Length:</b> {length} <br />
          <b>Yarn:</b> {yarn} <br />
          <b>Size:</b> {size}
        </Card.Text>
        <Button variant="primary">View Pattern</Button>
      </Card.Body>
    </Card>
  );
}

export default PatternCard;