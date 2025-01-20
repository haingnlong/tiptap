import { FC } from "react";
import { ShadowLinkProps } from "./types";
import styles from './style.module.css';

export const ShadowLink: FC<ShadowLinkProps> = ({ title, url, ...props }) => (
  <a href={url} className={styles.link} {...props}>
    {title}
  </a>
);
