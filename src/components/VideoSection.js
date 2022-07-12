import React, { useState, useRef } from "react";
import "../css/VideoSection.css";
import { FaPlay } from "react-icons/fa";
import videoposter from "../assets/videothumbnail.png";
import video from "../assets/Rashi300622.mp4";
import CardCarousal from "../components/CardCarousal";
// import { TbBrandWhatsapp } from "react-icons/tb";
// import "../css/TaggedSectionContainer.css";

const VideoSection = () => {
  const [play, setPlay] = useState(true);
  const videoRef = useRef(null);
  const iconRef = useRef();
  const textRef = useRef();
  const VideoContainerRef = useRef();
  // const cardRef = useRef();
  // const whtsapp = useRef();

  const playPausebuttonHandler = () => {
    if (play) {
      videoRef.current.play();
      iconRef.current.style.opacity = "0";
      iconRef.current.style.transition = " none 0.2s ease";
      textRef.current.style.opacity = "0";
      textRef.current.style.transition = " none 0.2s ease";
      VideoContainerRef.current.style.height = "100vh";
      VideoContainerRef.current.style.transition = "all 0.3s ease";

      setPlay(false);
    }
    if (!play) {
      setPlay(true);
      iconRef.current.style.opacity = "1";
      iconRef.current.style.transition = "none 0.8s easeOut";
      textRef.current.style.opacity = "1";
      textRef.current.style.transition = "none 0.8s easeOut";
      VideoContainerRef.current.style.height = "36rem";
      VideoContainerRef.current.style.transition = "all 0.3s ease";

      videoRef.current.pause();
    }
  };

  return (
    <div
      className="video-container"
      onClick={playPausebuttonHandler}
      ref={VideoContainerRef}
    >
      <video
        ref={videoRef}
        className="video"
        poster={videoposter}
        loop
        // controls
        width="100%"
        height="100%"
      >
        <source src={video} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <div className="playButtonCircle" ref={iconRef}>
        <FaPlay className="playIcon" onClick={playPausebuttonHandler} />
      </div>
      <div>
        <div ref={textRef} className="video-text">
          Shop My Closet
        </div>
        <CardCarousal />
      </div>
      {/* <div className="whatsapp-container">
        <TbBrandWhatsapp ref={whtsapp} size={"2.25rem"} color={"white"} />
      </div> */}
    </div>
  );
};

export default VideoSection;
