import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
  return (
    <div className="wrapper">
        <div>
            <h1 className="centered-text"><b>FAQ and Glossary</b></h1>
        </div>

        <div className="extra-padding">
          <h2 className="centered-text"><b>Frequently Asked Questions</b></h2>
          <h6 className="centered-text">Learn more about our history and what we offer!</h6>
        </div>

        <Accordion>
            <Accordion.Item eventKey="0" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>What is Yarn Repository?</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Yarn Repository is an online platform where you can find and share patterns, materials, and instructions for creating crochet plushies.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>How do I learn how to crochet?</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Visit our Guides page, where you can learn everything you need to in order to learn how to crochet! This includes the different types of stitches, how to read a pattern, the different types of yarn, among many other useful guides! Note that a full list of abbreviations is included below as well!
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>How do I navigate the site?</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                You can use the navigation bar at the top of the page to browse patterns, guides, and other resources.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>How do I submit my own pattern?</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                To submit your own pattern, click on the "Share" tab and fill out the submission form with all the required details. Thanks for sharing!
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>How long does it take to review a submission?</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                It takes our team roughly two weeks to review a submission. Thanks for submitting a pattern!
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>Are the patterns beginner friendly?</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                You can filter the patterns based on difficulty. We have plenty of easy patterns that could be done by a beginner. Good luck!
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>How can I search for a specific pattern?</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                On the patterns page, you can filter by type, difficulty, sewing level, length, yarn type, and size, to help you find what you're looking for.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>What materials do I need to start a pattern?</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Each pattern includes a list of required materials, such as yarn type, hook size, and additional accessories.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>Do I need any special skills to follow the patterns?</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Patterns range in difficulty from easy to hard. Each pattern specifies the skill level required. If you need to learn something, you can always head over to the guides page!
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>How are patterns reviewed before posting?</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Submitted patterns are reviewed by our team to ensure they meet our quality standards before being posted.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>Can I edit my submitted pattern?</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Once a pattern is submitted and approved, you cannot edit it directly. You can contact support for assistance with edits.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="11" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>How can I contact support?</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                You can email us at yarnrepo@gmail.com, or give us a call at (343) 540-9920!
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="12" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>How often are new patterns added?</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                New patterns are added regularly. Keep an eye on the Patterns page to find new creations!
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <div className="extra-padding">
          <h2 className="centered-text"><b>Glossary</b></h2>
          <h6 className="centered-text">Learn the abbreviations for crochet!</h6>
        </div>

        <Accordion>
            <Accordion.Item eventKey="0" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>MR/MC</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Magic ring / magic circle
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>sc</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Single crochet
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>st</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Stitch
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>inc</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Increase
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>dec</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Decrease
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>sc2tog</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Invisible decrease
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>ch</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Chain
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>bob</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Bobble Stitch
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>hdc</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Half double crochet
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>tr</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Treble crochet
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>flo</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Front loop only
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="11" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>blo</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Back loop only
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="12" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>slst</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Slip stitch
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="13" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>sk</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Skip the next stitch
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="14" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>rev slst</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Reverse slip stitch
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="15" className="custom-accordion-item">
                <Accordion.Header className="custom-accordion-item"><span><b>FO</b></span></Accordion.Header>
                <Accordion.Body className="custom-accordion-item">
                Fasten off
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
    </div>
  )
}

export default FAQ