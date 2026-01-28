"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./HeroCarousel.module.css";

// each image now has its own overlay text
const slides = [
  {
    src: "/banner_images/banner1.png",
    title: "Everything your pet needs",
    subtitle: "Food, toys, and happiness delivered",
  },
  {
    src: "/banner_images/banner2.jpeg",
    title: "Pamper your furry friend",
    subtitle: "Comfortable beds, cozy clothes, and more",
  },
  {
    src: "/banner_images/banner3.jpg",
    title: "Healthy treats, happy pets",
    subtitle: "Organic snacks and supplements for your pets",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div className={styles.slide} key={i}>
            <Image
              src={slide.src}
              alt={`Banner ${i + 1}`}
              fill
              priority={i === 0}
            />
            <div className={styles.overlay}>
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
