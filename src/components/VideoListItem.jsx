import React, { Component } from 'react';

const VideoListItem = ({ video }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title

  return (
    <li className="list-group-iten">
      <div className="video-list media">
        <div className="media-left">
          <img  src={imageUrl}
                alt="video"
                className="media-object" />
        </div>

        <div className="media-body">
          <div className="media-heading">
            { title }
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
