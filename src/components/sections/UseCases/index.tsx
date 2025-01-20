import { FC } from "react";
import styles from "./style.module.css";
import { SliderTab } from "./SliderTab";

export const UseCases: FC = () => {
  return (
    <section className={styles["use-cases-section"]}>
      <div className={styles["heading-content"]}>
        <span>Use cases</span>
        <span>Make your own</span>
        <span>editor experience</span>
        <span>
          Tiptap's dev experience and extensions library make customization easy.
          Powering over 3 million editors, chances are, you're typing in Tiptap
          every day already.
        </span>
      </div>
      <SliderTab />
    </section>
  );
};
