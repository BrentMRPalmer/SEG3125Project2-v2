import React from 'react'
import '../styles.css'
import { Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();

  const handlePatternsClick = () => {
      navigate(`/patterns`);
  };

  const handleGuidesClick = () => {
    navigate(`/guides`);
  };

  const handleShareClick = () => {
    navigate(`/share`);
  };

  return (
    <div className="wrapper">
      <h1 className="centered-text"><b>WELCOME TO YARN REPOSITORYYY</b></h1>
      <h2 className="centered-text margin-b"> Home to all things cute and fluffy! </h2>
      <div className="grid-container">
        <img className="rounded-image" src="/images/bunny.png" />
        <div className="text-container">
          <div class="grid-item"><h3><strong>VIEW OUR PATTERNS</strong></h3></div>
          <div class="grid-item">Create your very own crochet plushy using one of our many custom patterns!</div>
          <Button variant="primary" onClick={handlePatternsClick} className="btn-custom">View Patterns</Button>
        </div>

        <div className="text-container">
          <div class="grid-item"><h3><strong>RECOMMENDED GUIDES</strong></h3></div>
          <div class="grid-item">Watch videos that we recommend to learn everything you need to know to get started!</div>
          <Button variant="primary" onClick={handleGuidesClick} className="btn-custom">View Guides</Button>
        </div>
        <img className="rounded-image" src="/images/bunny.png" />

        <img className="rounded-image" src="/images/bunny.png" />
        <div className="text-container">
          <div class="grid-item"><h3><strong>SHARE A PATTERN</strong></h3></div>
          <div class="grid-item">Have a pattern that you'd love to share with the world? Send it our way, and after a short review we will post it!</div>
          <Button variant="primary" onClick={handleShareClick} className="btn-custom">Share Pattern</Button>
        </div>
      </div>
    </div>
  );
}

export default Home