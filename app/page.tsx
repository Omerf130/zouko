import type { Metadata } from "next";
import classes from "./page.module.scss";
import VideoWithControls from "./components/VideoWithControls/VideoWithControls";

export const metadata: Metadata = {
  title: "Home | Zouko",
  description: "Dance studio – zouk, movement, classes and connection.",
};

export default function HomePage() {
  return (
    <main className={classes.root}>
      <VideoWithControls src="/videos/vid1.mp4" />
      <VideoWithControls src="/videos/vid2.mp4" />

      <section className={classes.heroSection}>
        <div>
          <img
            src="/logo/logo1.png"
            alt="Zouko Logo"
            className={classes.logo}
          />
        </div>

        <p className={classes.subtitle}>
          האקדמיה לריקוד זוגי בקצב הנשמה
        </p>

        <div className={classes.links}>
          <a href="/dance">&lt;&lt;&lt; לרקוד אתנו</a>

          <a href="/learn">
            ללמוד אתנו &gt;&gt;&gt;
            <span className={classes.dots}>
              <span></span>
              <span></span>
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
