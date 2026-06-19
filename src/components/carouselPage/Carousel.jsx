"use client";
import "./carousel.css"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel () {
  const images = [
    "/man-img4.jpg",
    "/man-img6.jpg",
    "/man-img5.jpg",   
    "/man-img3.jpg" ,  
     
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <Image
        src={images[current]}
        alt="slider image"
        fill
        priority
        className="img-slides"
        sizes="(max-width: 768px) 100vw, 50vw"

      />
    </div>
  );
}