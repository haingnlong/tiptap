import { ReactElement, ReactNode } from "react";

export type SliderProps = {
  children: ReactElement[];
  width?: string;
  duration?: number;
  toRight?: boolean;
};

export type SlideProps = {
  children: ReactNode;
  width?: string;
};
