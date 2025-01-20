import { FC } from "react";
import { Hero, TiptapSuite, ListSlider, Templates, UseCases } from "../../sections";

export const Home: FC = () => {
  return (
    <>
      <Hero />
      <TiptapSuite />
      <ListSlider />
      <Templates />
      <UseCases />
    </>
  );
};
