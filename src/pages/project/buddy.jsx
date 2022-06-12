import React from "react";

const Buddy = (props) => {
  return (
    <div>
      Buddy
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/1pYcX_lvk3s"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Buddy;
