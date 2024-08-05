import React from "react";
import Hello from "./components/Hello";

const App = ({ name = "World" }) => {
  return <Hello title={name} />;
};

export default App;
