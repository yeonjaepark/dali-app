import React from 'react';

const VideoListItem = (props) => {
  const imgUrl = props.video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => props.onVideoSelect(props.video)}>
      <div><img src={imgUrl} alt="video" /></div>
      <div className="title">{props.video.snippet.title}</div>
    </li>
  );
};

export default VideoListItem;
