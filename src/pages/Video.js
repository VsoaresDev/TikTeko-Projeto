import React, { useRef, useState } from "react";
import Videofooter from "./components/footer/VideoFooter";
import VideoSidebar from "./components/Sidebar/VideoSidebar2";
import "./video.css";

function Video({likes, messages, shares, name, description, music, url}) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>
      <VideoSidebar 
        likes={likes}
        messages={messages}
        shares={shares}
      />
      <Videofooter 
        name={name}
        description={description}
        music={music}
        src={url}

      />
    </div>
  );
}

export default Video;
