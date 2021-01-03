import React from "react";
import { withRouter } from "react-router-dom";

import "./style.scss";
function MenuItem({ title, linkUrl, imageUrl, size, history, match }) {
  const imageStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className="background-image" style={imageStyle} />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
