import Link from "next/link";
import Image from "next/image";

import classes from "@/components/meals/meal-item.module.css";

export default function MealItem({ title, slug, image, summary, creator }) {
  return <article className={classes.meal}>
    <header>
      <Image src={image} alt={title} width={500} height={500} />
      <div className={classes.headerText}>
        <h2>{title}</h2>
        <p>by {creator}</p>
      </div>
    </header>
    <div className={classes.content}>
      <p className={classes.summary}>{summary}</p>
      <div className={classes.actions}>
        <Link href={`/meals/${slug}`}>View Details</Link>
      </div>
    </div>
  </article>
}