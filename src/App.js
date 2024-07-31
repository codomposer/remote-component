import React from "react";
import Title from "./components/Title";

const App = ({ name = "World" }) => {
  return <Title>Hello {name}!</Title>;
};

export default App;
