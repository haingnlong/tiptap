import { FC, useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import { Slider } from "../../../common";
import { ListItemProps } from "./types";

export const ListItem: FC<ListItemProps> = ({
  text,
  duration = 20,
  toRight = false,
  ...props
}) => {
  const [textWidth, setTextWidth] = useState<number>(500);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current && setTextWidth(ref.current.offsetWidth);
  }, []);

  return (
    <Slider
      duration={duration}
      toRight={toRight}
      width={`${textWidth.toString()}px`}
      {...props}
    >
      <Slider.Slide>
        <div ref={ref}>
          <div className={styles.text}>{text}</div>
        </div>
      </Slider.Slide>
      <Slider.Slide>
        <div className={styles["transparent-text"]}>{text}</div>
      </Slider.Slide>
    </Slider>
  );
};
