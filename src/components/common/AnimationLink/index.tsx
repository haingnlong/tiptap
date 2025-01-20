import { FC } from "react";
import styles from "./style.module.css";
import { AnimationButtonProps } from "./types";
import { NextArrow } from "../../../assets";

export const AnimationButton: FC<AnimationButtonProps> = ({
  url,
  title
}: AnimationButtonProps) => {
  return (
    <a href={url} className={styles.link}>
      <span>{title}</span>
      <img src={NextArrow} alt="next-arrow" width={12} />
    </a>
  );
};
