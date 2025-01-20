import { FC, useEffect, useState, Fragment, cloneElement } from "react";
import { SlideProps, SliderProps } from "./types";
import styles from "./style.module.css";

export const Slider: FC<SliderProps> & { Slide: FC<SlideProps> } = ({
  children,
  width = "200px",
  duration = 40,
  toRight = false,
}) => {
  const [elementId, setElementId] = useState<string>("");

  // Generate a random string ID for keyframes
  const generateElementId: Function = (): string => {
    let id = "";
    const charList =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 10; i++) {
      id += charList.charAt(Math.floor(Math.random() * charList.length));
    }
    return id;
  };

  useEffect(() => {
    setElementId(generateElementId());
  }, []);

  useEffect(() => {
    if (!children.length) return;

    // Calculate the total translation value based on children length and width
    const totalTranslateX = `calc(${toRight ? "" : "-"}${width} * ${
      children.length
    })`;

    // Dynamically create the CSS keyframes for the animation
    const style = document.createElement("style");
    const keyFrames = `
      @keyframes slider_logo_slider_${elementId} {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(${totalTranslateX});
        }
      }`;

    style.innerHTML = keyFrames;
    document.getElementsByTagName("head")[0].appendChild(style);

    // Cleanup the created styles on component unmount
    return () => {
      document.getElementsByTagName("head")[0].removeChild(style);
    };
  }, [toRight, width, children, elementId]);

  return (
    <div className={styles.slider}>
      <div id={`slider_wrapper_${elementId}`}>
        <div
          style={{
            display: "flex",
            animation: `slider_logo_slider_${elementId} ${duration}s linear infinite`,
            width: `calc(${width} * ${children.length * 6})`,
          }}
          id={`slider_${elementId}`}
        >
          {children.map((child, i) => (
            <Fragment key={i}>{cloneElement(child, { width })}</Fragment>
          ))}
          {children.map((child, i) => (
            <Fragment key={i}>{cloneElement(child, { width })}</Fragment>
          ))}
          {children.map((child, i) => (
            <Fragment key={i}>{cloneElement(child, { width })}</Fragment>
          ))}
          {children.map((child, i) => (
            <Fragment key={i}>{cloneElement(child, { width })}</Fragment>
          ))}
          {children.map((child, i) => (
            <Fragment key={i}>{cloneElement(child, { width })}</Fragment>
          ))}
          {children.map((child, i) => (
            <Fragment key={i}>{cloneElement(child, { width })}</Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

const Slide: FC<SlideProps> = ({ children, width = "200px", ...props }) => {
  return (
    <div
      className={styles.slide}
      style={{
        width: width,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

Slider.Slide = Slide;
