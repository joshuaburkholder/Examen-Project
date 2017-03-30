import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

const VideoDetail = ({video}) => {
  if (!video) {
    return (<div>Loading...</div>)
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div>
    <div className="wholepageXXX">
      <div id="video-background">
        <iframe className="embed-responsive-item" frameBorder="0" src={url} allowFullScreen></iframe>
      </div>



      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
      </div>
      <div className="buttonLinks">
          <DropdownButton bsSize="large" bsStyle="warning" title="more mindfulness">
            <MenuItem href="http://www.catholicfamilyfaith.com/2015/09/weekly-examen.html" target="_blank">Weekly Family Examen</MenuItem>
            <MenuItem href="http://www.faith5.org/" target="_blank">Faith 5 for Families</MenuItem>
            <MenuItem href="http://www.ignatianspirituality.com/24449/take-lord-receive-work-career-suscipe" target="_blank">Work & Career</MenuItem>
            <MenuItem href="http://www.ignatianspirituality.com/24672/the-money-examen" target="_blank">Money Examen </MenuItem>
            <MenuItem divider />
            <MenuItem href="http://www.ignatianspirituality.com/ignatian-prayer/the-examen" target="_blank">About Examen</MenuItem>
          </DropdownButton>
      </div>
      </div>
  )
};

export default VideoDetail;