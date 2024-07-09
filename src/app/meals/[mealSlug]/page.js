import classes from "@/meals/[mealSlug]/page.module.css";
import Image from "next/image";

export default function MealDetailPage() {
  return <>
    <header className={classes.header}>
      <div className={classes.image}>
        <Image fill />
      </div>
      <div className={classes.headerText}>
        <h1>TITLE</h1>
        <p className={classes.creator}>
        </p>
      </div>
    </header>
    <main></main>
  </>
}