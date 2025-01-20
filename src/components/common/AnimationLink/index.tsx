import { FC } from "react";
import styles from "./style.module.css";
import { AnimationButtonProps } from "./types";
import { NextArrow } from "../../../assets";

export const AnimationButton: FC<AnimationButtonProps> = ({
  url,
  title,
  isTransparent = false,
}: AnimationButtonProps) => {
  return (
    <a
      href={url}
      className={
        isTransparent
          ? styles["transparent-link"] + " " + styles.link
          : styles.link
      }
    >
      <span>{title}</span>
      <img src={NextArrow} alt="next-arrow" width={12} />
    </a>
  );
};
