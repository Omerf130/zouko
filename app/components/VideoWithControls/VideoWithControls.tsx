"use client";

import { useRef, useState } from "react";
import classes from "./VideoWithControls.module.scss";

type Props = {
  src: string;
};

export default function VideoWithControls({ src }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;

    if (playing) {
      vid.pause();
      setPlaying(false);
    } else {
      vid.play();
      setPlaying(true);
    }
  };

  return (
    <div className={classes.wrapper}>
      <video
        ref={videoRef}
        className={classes.video}
        src={src}
        loop
        muted
        playsInline
      />

      <button onClick={togglePlay} className={classes.playPause}>
        {playing ? (
          <svg viewBox="0 0 20 20" fill="currentColor">
            <rect x="4" y="4" width="4" height="12" />
            <rect x="12" y="4" width="4" height="12" />
          </svg>
        ) : (
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 4l12 6-12 6V4z" />
          </svg>
        )}
      </button>
    </div>
  );
}
