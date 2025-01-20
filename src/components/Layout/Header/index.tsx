import { FC } from "react";
import styles from "./style.module.css";
import { LinkListData } from "../../../constants";
import { Brand } from "../../../assets";
import NavHoverMenu from "./NavHoverMenu";
import NavBurger from "./NavBurger";
import { AnimationButton } from "../../common";

const Header: FC = () => {
  return (
    <div className={styles.navbar}>
      <header className={styles.header}>
        <a href="/">
          <img src={Brand} style={{ height: 20 }} alt="brand" />
        </a>
        <nav className={styles["nav-navigation"]}>
          <NavHoverMenu />
          {LinkListData.map((item) => (
            <a href={item.url} key={item.title} className={styles["nav-link"]}>
              <div>{item.title}</div>
            </a>
          ))}
        </nav>
        <nav className={styles["nav-action"]}>
          <a href="/" className={styles["nav-link"]}>
            <div>Contact sales</div>
          </a>
          <AnimationButton url="/" title="Sign in" />
        </nav>
        <div className={styles.burger}>
          <NavBurger />
        </div>
      </header>
    </div>
  );
};

export default Header;
