import type { Metadata } from "next";
import classes from "./page.module.scss";
import MainPage from "./components/mainPage/MainPage";


export const metadata: Metadata = {
  title: "Home | Zouko",
  description: "Dance studio – zouk, movement, classes and connection.",
};

export default function HomePage() {
  return (
    <main className={classes.root}>
     <MainPage/>
    </main>
  );
}
