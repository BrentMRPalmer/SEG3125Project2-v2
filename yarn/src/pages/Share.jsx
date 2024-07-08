import { React, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const Share = () => {
  const [type, setType] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [sewing, setSewing] = useState('All');
  const [length, setLength] = useState('All');
  const [yarn, setYarn] = useState('All');
  const [size, setSize] = useState('All');
  const [materials, setMaterials] = useState('');
  const [instructions, setInstructions] = useState('');

  const [show, setShow] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      type,
      difficulty,
      sewing,
      length,
      yarn,
      size,
      materials,
      instructions,
    };
    console.log(formData);
    setSubmittedData(formData);
    handleShow();

    setType('All');
    setDifficulty('All');
    setSewing('All');
    setLength('All');
    setYarn('All');
    setSize('All');
    setMaterials('');
    setInstructions('');
  }

  return (
    <div className="wrapper">
      <Form onSubmit={handleSubmit}>
        <div className="padding">
          <h1 className="centered-text"><b>Share a Design</b></h1>
          <h4 className="centered-text">We will review your wonderful creation and post it!</h4>
        </div>

        {/* Select Characteristics */}
        <div className="padding">
          <h4 className="centered-text "><b>Select Characteristics</b></h4>
        </div>
        <div className="filter-container filter-aes">
          <div className="filter-group">
              <label for="type"><b>Plushy Type:</b></label>
              {' '}
              <select name="type" id="type" value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="All">All</option>
                  <option value="Animal">Animal</option>
                  <option value="Plant">Plant</option>
                  <option value="Object">Object</option>
              </select>
          </div>

          <div className="filter-group">
              <label for="difficulty"><b>Difficulty:</b></label>
              {' '}
              <select name="difficulty" id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                  <option value="All">All</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
              </select>
          </div>

          <div className="filter-group">
              <label for="sewing"><b>Sewing Level:</b></label>
              {' '}
              <select name="sewing" id="sewing"  value={sewing} onChange={(e) => setSewing(e.target.value)}>
                  <option value="All">All</option>
                  <option value="None">None</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
              </select>
          </div>

          <div className="filter-group">
              <label for="length"><b>Length:</b></label>
              {' '}
              <select name="length" id="length" value={length} onChange={(e) => setLength(e.target.value)}>
                  <option value="All">All</option>
                  <option value="1 hour">1 hour</option>
                  <option value="2 hours">2 hours</option>
                  <option value="3 hours">3 hours</option>
                  <option value="4 hours">4 hours</option>
                  <option value="5+ hours">5+ hours</option>
              </select>
          </div>

          <div className="filter-group">
              <label for="yarn"><b>Yarn Type:</b></label>
              {' '}
              <select name="yarn" id="yarn" value={yarn} onChange={(e) => setYarn(e.target.value)}>
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
              <label for="size"><b>Size:</b></label>
              {' '}
              <select name="size" id="size3" value={size} onChange={(e) => setSize(e.target.value)}>
                  <option value="All">All</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
              </select>
          </div>
        </div>

        {/* Materials and Instructions */}
        <div className="padding">
          <h4 className="centered-text "><b>Enter Materials and Instructions</b></h4>
        </div>
        <Form.Group className="mb-3" controlId="formBasicComment">
            <Form.Label className="filter-aes"><b>Enter Materials</b></Form.Label>
            <Form.Control as="textarea" rows={5} value={materials} onChange={(e) => setMaterials(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicComment">
            <Form.Label className="filter-aes"><b>Enter Instructions</b></Form.Label>
            <Form.Control  as="textarea" rows={10} value={instructions} onChange={(e) => setInstructions(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" type="submit" className="btn-custom">
            Share
        </Button>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h2><b>Submission Confirmation</b></h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Submission Details</h4>
          {submittedData && (
            <div className="custom-font">
              <p><b>Type:</b> {submittedData.type}</p>
              <p><b>Difficulty:</b> {submittedData.difficulty}</p>
              <p><b>Sewing Level:</b> {submittedData.sewing}</p>
              <p><b>Length:</b> {submittedData.length}</p>
              <p><b>Yarn Type:</b> {submittedData.yarn}</p>
              <p><b>Size:</b> {submittedData.size}</p>
              <p><b>Materials:</b> {submittedData.materials}</p>
              <p><b>Instructions:</b> {submittedData.instructions}</p>
            </div>
          )}
          <h4>Thank you for submitting a pattern!</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="btn-custom">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  )
}

export default Share