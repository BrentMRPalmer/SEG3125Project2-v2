import React from 'react'
import { Container } from 'react-bootstrap';

const Video = ({title, url}) => {
  return (
    // <iframe width="560" height="315" src="https://www.youtube.com/embed/GZesdWQG9YA?si=55y-L8FL2QbKfA09" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
    <Container>
        <h4><b>{title}</b></h4>
        <div className="ratio ratio-16x9">
            <iframe src={url} title="How to Crochet" allowFullScreen></iframe>
        </div>
    </Container>

  );
}

export default Video;