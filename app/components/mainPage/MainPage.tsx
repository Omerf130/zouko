'use client'
import React from 'react'
import VideoWithControls from '../VideoWithControls/VideoWithControls'
import classes from "./MainPage.module.scss";
import Link from 'next/link';
import useIsMobile from '@/app/hooks/useIsMobile';

const MainPage = () => {
    const isMobile = useIsMobile();

    return (
        <>
            <VideoWithControls src="/videos/vid1.mp4" />
            {!isMobile && <VideoWithControls src="/videos/vid2.mp4" />}

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
                    <Link className="home-link" href="/dance">
                        &lt;&lt;&lt; לרקוד אתנו
                    </Link>

                    <Link className="home-link" href="/learn">
                        ללמוד אתנו &gt;&gt;&gt;
                    </Link>
                </div>
            </section>
        </>
    )
}

export default MainPage
