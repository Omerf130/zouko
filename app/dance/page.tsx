import Link from "next/link";
import classes from './page.module.scss'
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dance | Zouko",
  description: "Dance studio – zouk, movement, classes and connection.",
};

const page = () => {
    return (
        <main className={classes.root}>
            <section className={classes.danceContent}>
                <div className={classes.headers}>
                    <h1>לרקוד איתנו</h1>
                    <h2>מסיבות שקיעה בימי שבת - פוגשים את הקהילה עם מוזיקה סוחפת (לצד סרטון)
                        ההרשמה באיזון מגדרי בשביל להבטיח מקסימום הנאה!</h2>
                    <h2>ימי שבת – 18:00 עד 22:00 </h2>
                </div>
                <div className={classes.links}>
                    <Link className="navbar-link" href="/contact">
                        &lt;&lt;&lt; להרשמה
                    </Link>
                </div>
                <div className={classes.bottom}>
                    <h1>ממלאים פרטים אישיים
                        ומשריינים מקום בלו"ז</h1>
                </div>
            </section>
            <div className={classes.imageWrapper}>
                <Image
                className={classes.image}
                src="/pics/pic3.jpg"
                alt="Logo"
                width={150}
                height={150}
                unoptimized
            />
            </div>
        </main>
    )
}

export default page
