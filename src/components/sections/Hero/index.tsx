import { FC, useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import { TypeAnimation } from "react-type-animation";
import { BrandLogoListData } from "../../../constants";
import { AnimationButton, Slider } from "../../common";

export const Hero: FC = () => {
  const [isIntersecting, setIntersecting] = useState<boolean>(true);
  const [lastRefHeight, setLastRefHeight] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  useEffect(() => {
    if (!isIntersecting && ref.current) {
      setLastRefHeight(ref.current.offsetHeight);
    }
  }, [isIntersecting]);

  return (
    <section className={styles["hero-section"]}>
      <div className={styles["image-background-deco"]}>
        <img
          src="https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/6580b17f35510ffc21541053_gradient-noise-green-red.png"
          alt="background-img"
          loading="lazy"
          width={896}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.main}>
          <span>The editor suite to build products with</span>
          {isIntersecting ? (
            <div ref={ref}>
              <TypeAnimation
                sequence={[
                  "real-time synchronisation",
                  2500,
                  "amazing content experience",
                  2500,
                  "whiteboard collaboration",
                  2500,
                  "real-time editing",
                  2500,
                  "AI-powered content",
                  2500,
                  "version control efficiency",
                  2500,
                ]}
                wrapper="span"
                speed={5}
                className={styles["typing-text"]}
                repeat={Infinity}
              />
            </div>
          ) : (
            <div style={{ height: lastRefHeight }} />
          )}
        </div>
        <div className={styles.description}>
          Tiptap is the headless and open source editor framework. Integrate
          over 100+ extensions and paid features like collaboration and AI
          agents to create the UX you want
        </div>
        <div className={styles["link-group"]}>
          <AnimationButton url="/" title="Sign up free" />
          <a href="/">Try it live</a>
        </div>
      </div>
      <Slider duration={80}>
        {BrandLogoListData.map((item, index) => (
          <Slider.Slide>
            <img src={item.imgUrl} alt="img" key={index} />
          </Slider.Slide>
        ))}
      </Slider>
    </section>
  );
};
