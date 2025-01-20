import { FC } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Home } from "./components/modules/Home";

const App: FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
