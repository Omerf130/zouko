import { Metadata } from "next";
import VideoWithControls from "../components/VideoWithControls/VideoWithControls";
import classes from "./page.module.scss";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Others | Zouko",
  description: "Dance studio – zouk, movement, classes and connection.",
};

const page = () => {
  return (
    <main className={classes.root}>
      <section className={classes.content}>
        <div className={classes.headers}>
        xdbubu, tjro
        </div>
        <div className={classes.media}>
          <div className={classes.videoWrapper}>
           <VideoWithControls src="/videos/vid1.mp4" />
          </div>
          <div className={classes.imageWrapper}>
            <img src="/icons/icon6.png" alt="" />
          </div>
        </div>
        <div className={classes.links}>
          <Link className="navbar-link" href="/contact">
            &lt;&lt;&lt; להרשמה
          </Link>
          <Link className="navbar-link" href="/about">
            &lt;&lt;&lt; למידע נוסף
          </Link>
        </div>
      </section>
    </main>
  )
}

export default page
