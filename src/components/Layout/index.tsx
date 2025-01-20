import { FC, ReactNode } from "react";
import styles from './style.module.css'
import Header from "./Header";

const Layout: FC<{children: ReactNode}> = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
