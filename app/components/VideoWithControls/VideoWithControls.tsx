"use client";
import { useRef } from "react";
import classes from "./VideoWithControls.module.scss";

type Props = {
  src: string;
};

export default function VideoWithControls({ src }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={classes.wrapper}>
      <video
        ref={videoRef}
        className={classes.video}
        src={src}
        loop
        muted
        autoPlay
        playsInline
      />
    </div>
  );
}
