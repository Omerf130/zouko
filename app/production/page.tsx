import Image from "next/image";
import classes from "./page.module.scss";
import Link from "next/link";
import { CONSTS } from "../_consts/consts";

const page = () => {
  const {HEADER, CONTENT1, CONTENT2, BUTTON} = CONSTS.PRODUCTION;

  return (

    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.logoWrapper}>
          <Image
            className={classes.logo}
            src="/logo/logo1.png"
            alt="Logo"
            width={150}
            height={150}
          unoptimized
          />
        </div>
        <h1>{HEADER}</h1>
      </div>
      <div className={classes.content}>
        <h2>{CONTENT1}</h2>
        <h2>{CONTENT2}</h2>
      </div>
      <div className={classes.actions}>
        <Link className="button-primary" href="/contact">
          {BUTTON}
        </Link>
      </div>
    </div>
  )
}

export default page
