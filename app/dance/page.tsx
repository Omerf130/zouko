import Link from "next/link";
import classes from "./page.module.scss";

const page = () => {
  return (
    <main className={classes.root}>
      <section className={classes.content}>
        <div className={classes.textWrapper}>
          <div className={classes.top}>
            <h1>לרקוד איתנו</h1>
            <h2>מסיבות שקיעה בימי שבת - פוגשים את הקהילה עם מוזיקה סוחפת (לצד סרטון)
              ההרשמה באיזון מגדרי בשביל להבטיח מקסימום הנאה!</h2>
            <h2>ימי שבת – 18:00 עד 22:00 </h2>
          </div>
          <div className={classes.center}>

            <Link className={classes.danceLink} href="/contact">
              &lt;&lt;&lt; להרשמה
            </Link>
          </div>
          <div className={classes.bottom}>
            <h1>ממלאים פרטים אישיים
              ומשריינים מקום בלו"ז</h1>
          </div>
        </div>
          <div className={classes.imageWrapper}>
            <img src="/pics/pic3.jpg" alt="" />
          </div>
      </section>
    </main>
  )
}

export default page
