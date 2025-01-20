import { FC } from "react";
import styles from "./style.module.css";
import { SliderListData } from "../../../constants";
import { ListItem } from "./SliderItem";

export const ListSlider: FC = () => {
  return (
    <section className={styles["list-slider-section"]}>
      {SliderListData.map((item) => (
        <ListItem text={item.text} duration={item.duration} toRight={item.toRight} key={item.text} />
      ))}
    </section>
  );
};
