import React from 'react'
import { Container } from 'react-bootstrap';

const Video = ({title, url}) => {
  return (
    <Container>
        <h4><b>{title}</b></h4>
        <div className="ratio ratio-16x9">
            <iframe src={url} title={title} aria-label={`Video titled ${title}`} allowFullScreen></iframe>
        </div>
    </Container>
  );
}

export default Video;