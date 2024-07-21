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
          <Video title="Learn how to crochet" url="https://www.youtube.com/embed/GZesdWQG9YA?si=55y-L8FL2QbKfA09"/>
          <Video title="Understand how to read a crochet pattern" url="https://www.youtube.com/embed/aBVRqv2LBZo?si=sC03bHYQfRwkwyN1"/>
          <Video title="Discover all about yarn" url="https://www.youtube.com/embed/MBAZViOmBlM?si=k4mkqKvdck5I5-vz"/>
          <Video title="Explore the tools" url="https://www.youtube.com/embed/QY0nVbonzK8?si=gPRdFC9H6C275MMw"/>
          <Video title="Find the best yarn and hook combos" url="https://www.youtube.com/embed/g3K4kWV0jto?si=ABwsprUj_regtb8x"/>
          <Video title="Locate where to buy yarn" url="https://www.youtube.com/embed/9DEIV57NNzw?si=cS4O3iI5MexWEblL"/>
          <Video title="Design your own pattern" url="https://www.youtube.com/embed/GszjIafB1ZQ?si=um7KPxBYRQIYm-zx"/>
          <Video title="Start your own crochet business" url="https://www.youtube.com/embed/YFL1dmd7iTk?si=DQdeQ_0tIMluJBCO"/>
        </div>
        <div className="extra-padding">
          <h2 className="centered-text"><b>How to Crochet</b></h2>
          <h6 className="centered-text">Learn how to crochet by watching these easy to follow videos!</h6>
        </div>
        <div className="video-container">
          <Video title="Magic Ring" url="https://www.youtube.com/embed/p298HxgsO1s?si=IVIt_bq_wNIYbX5x"/>
          <Video title="Chain, single crochet, double crochet" url="https://www.youtube.com/embed/1g7tLcKsVCc?si=h6rA6Qof_mktNcDU"/>
          <Video title="Half double crochet" url="https://www.youtube.com/embed/f9C1C21MNiM?si=gTpr1qBG1K-4VKv5"/>
          <Video title="Bobble stitch" url="https://www.youtube.com/embed/gvsHyyTsxQc?si=3ZCtAuigxndGd2w2"/>
          <Video title="Increases and decreases" url="https://www.youtube.com/embed/njFsqVsRr4M?si=aTsp7R_EtazC4kNR"/>
          <Video title="Colour changes" url="https://www.youtube.com/embed/36RYkxhq_Ok?si=TmjofDSnIAt4Roaq"/>
        </div>
        
    </div>
  );
}

export default Guides;