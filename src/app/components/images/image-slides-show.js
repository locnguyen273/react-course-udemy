'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

import burgerImg from "@/assets/images/burger.jpg";
import curryImg from "@/assets/images/curry.jpg";
import dumplingsImg from "@/assets/images/dumplings.jpg";
import macncheeseImg from "@/assets/images/macncheese.jpg";
import pizzaImg from "@/assets/images/pizza.jpg";
import schnitzelImg from "@/assets/images/schnitzel.jpg";
import tomatoSaladImg from "@/assets/images/tomato-salad.jpg";
import classes from "@/components/images/image-slides-show.module.css";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

export default function ImageSlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.length > 0 &&
        images.map((item, index) => {
          return (
            <Image
              key={index}
              className={index === currentImageIndex ? classes.active : ""}
              src={item.image}
              alt={item.alt}
            />
          );
        })}
    </div>
  );
}
