import classes from "./page.module.scss";
import Link from "next/link";
import { CONSTS } from "../_consts/consts";
import Image from "next/image";


const page = () => {
  const { HEADER, CONTENT1, CONTENT2, HEADER2, LOGO1, LOGO2, LOGO3, LOGO4, LOGO5, HEADER3, CONTENT3 } = CONSTS.ABOUT;

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <div className={classes.header}>
          <Image
            className={classes.image}
            src="/logo/logo1.png"
            alt="Logo"
            width={150}
            height={150}
            unoptimized />

          <div className={classes.title}>{HEADER}</div>
        </div>
        <div className={classes.content1}>{CONTENT1}</div>
        <div className={classes.content2}>{CONTENT2}</div>
      </div>
      <div className={classes.middle}>
        <div className={classes.middleTitle}>{HEADER2}</div>
        <div className={classes.icons}>
          <div className={classes.iconsTop}>
            <div className={classes.iconWrapper}>
              <Image className={classes.image}
                src="/icons/icon5.png"
                alt="Logo"
                width={100}
                height={150}
                unoptimized />
              <div className={classes.text}>{LOGO1}</div>
            </div>
            <div className={classes.iconWrapper}>
              <Image className={classes.image}
                src="/icons/icon2.png"
                alt="Logo"
                width={150}
                height={150}
                unoptimized />
              <div className={classes.text}>{LOGO2}</div>
            </div>
            <div className={classes.iconWrapper}>
              <Image className={classes.image}
                src="/icons/icon1.png"
                alt="Logo"
                width={100}
                height={150}
                unoptimized />
              <div className={classes.text}>{LOGO3}</div>
            </div>
          </div>
          <div className={classes.iconsBottom}>
            <div className={classes.iconWrapper}>
              <Image className={classes.image}
                src="/icons/icon4.png"
                alt="Logo"
                width={120}
                height={150}
                unoptimized />
              <div className={classes.text}>{LOGO4}</div>
            </div>
            <div className={classes.iconWrapper}>
              <Image className={classes.image}
                src="/icons/icon3.png"
                alt="Logo"
                width={150}
                height={120}
                unoptimized />
              <div className={classes.text}>{LOGO5}</div>
            </div>
          </div>


        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.content}>
          <h1 className={classes.bottomTitle}>{HEADER3}</h1>
          <div className={classes.bottomText}>{CONTENT3}</div>
        </div>
        <Image className={classes.image}
          src="/pics/pic3.jpg"
          alt="Logo"
          width={150}
          height={150}
          unoptimized />
      </div>
    </div>
  )
}

export default page
