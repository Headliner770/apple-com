"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import Button from "../Button";

const Hero = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  const { type, title, subtitle, imageDesktop, imageMobile, altText, buttons } =
    data;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 998);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let additionalClass = "";
  if (type === "white") {
    additionalClass = styles["hero--white"];
  }

  return (
    <div className={`${styles.hero} ${additionalClass}`}>
      <div className={styles.hero__textContainer}>
        <h1 className={styles.hero__title}>{title}</h1>
        <p className={styles.hero__subtitle}>{subtitle}</p>

        <div className={styles.hero__links}>
          {buttons.map((button, index) => (
            <Button
              title={button.title}
              type={button.type}
              link={button.link}
              key={index}
            />
          ))}
        </div>
      </div>

      <figure
        className={styles.hero__imageContainer}
        role="img"
        aria-label="iPhone 17 Pro in cosmic orange finish, Pro Fusion camera system, 3 lenses, microphone, flash"
      >
        {isMobile ? (
          <Image
            src={imageMobile}
            alt={altText}
            fill
            objectFit="cover"
            quality={85}
            priority
          />
        ) : (
          <Image
            src={imageDesktop}
            alt={altText}
            fill
            objectFit="cover"
            quality={95}
            priority
          />
        )}
      </figure>
    </div>
  );
};

export default Hero;
