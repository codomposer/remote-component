import React from "react";
import Title from "./components/Title";

interface Props {
  name?: string;
}

const App: React.FC<Props> = ({ name = "World" }) => {
  return <Title>Hello {name}!</Title>;
};

export { App };
