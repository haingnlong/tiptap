import { FC } from "react";
import styles from "./style.module.css";
import { TiptapSuiteData } from "../../../constants";
import { NextArrow } from "../../../assets";

export const TiptapSuite: FC = () => {
  return (
    <section className={styles["tiptap-suite-section"]}>
      <div className={styles["heading-content"]}>
        <span>Tiptap Suite</span>
        <span>Create your editor</span>
        <span>with the features you want</span>
        <span>
          Tiptap's extension-based architecture puts you in control. Choose from
          a wide range of over 100+ Core, Pro, and Cloud extensions, or build
          and integrate your own.
        </span>
      </div>
      <div className={styles.list}>
        {TiptapSuiteData.map((item) => (
          <a href={item.url} className={styles["link-item"]} key={item.title}>
            <div>
              <img src={item.icon} alt="icon" loading="lazy" />
            </div>
            <div>
              <div>
                <span className={styles["item-title"]}>{item.title}</span>
                <div className={styles["item-list"]}>
                  {item.tags.map((tag) => (
                    <div key={tag} className={styles["item-tag"]}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <span className={styles["item-description"]}>
                {item.description}
              </span>
            </div>
            <div className={styles['animation-link']}>
              <span>Learn more</span>
              <img src={NextArrow} alt="next-arrow" width={12} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
