import React from 'react'
import Video from '../components/Video';

const Guides = () => {
  return (
    <div className="wrapper">
        <div>
            <h1 className="centered-text"><b>Recommended Videos</b></h1>
        </div>
        <div className="extra-padding">
          <h2 className="centered-text"><b>General Information</b></h2>
          <h6 className="centered-text">Welcome to the wonderful world of crochet!</h6>
        </div>
        <div className="video-container">
          <Video title="How to crochet" url="https://www.youtube.com/embed/GZesdWQG9YA?si=55y-L8FL2QbKfA09"/>
          <Video title="How to crochet" url="https://www.youtube.com/embed/GZesdWQG9YA?si=55y-L8FL2QbKfA09"/>
          <Video title="How to crochet" url="https://www.youtube.com/embed/GZesdWQG9YA?si=55y-L8FL2QbKfA09"/>
          <Video title="How to crochet" url="https://www.youtube.com/embed/GZesdWQG9YA?si=55y-L8FL2QbKfA09"/>
          <Video title="How to crochet" url="https://www.youtube.com/embed/GZesdWQG9YA?si=55y-L8FL2QbKfA09"/>
          <Video title="How to crochet" url="https://www.youtube.com/embed/GZesdWQG9YA?si=55y-L8FL2QbKfA09"/>
        </div>
        <div className="extra-padding">
          <h2 className="centered-text"><b>How to Crochet</b></h2>
          <h6 className="centered-text">Learn how to crochet by watching these easy to follow videos!</h6>
        </div>
        <div className="video-container">
          <Video title="How to crochet" url="https://www.youtube.com/embed/GZesdWQG9YA?si=55y-L8FL2QbKfA09"/>
          <Video title="How to crochet" url="https://www.youtube.com/embed/GZesdWQG9YA?si=55y-L8FL2QbKfA09"/>
          <Video title="How to crochet" url="https://www.youtube.com/embed/GZesdWQG9YA?si=55y-L8FL2QbKfA09"/>
          <Video title="How to crochet" url="https://www.youtube.com/embed/GZesdWQG9YA?si=55y-L8FL2QbKfA09"/>
          <Video title="How to crochet" url="https://www.youtube.com/embed/GZesdWQG9YA?si=55y-L8FL2QbKfA09"/>
          <Video title="How to crochet" url="https://www.youtube.com/embed/GZesdWQG9YA?si=55y-L8FL2QbKfA09"/>
        </div>
        
    </div>
  );
}

export default Guides;