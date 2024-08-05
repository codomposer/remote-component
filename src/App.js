import React from "react";
import Hello from "./components/Hello";

const App = ({ name = "World" }) => {
  const data = {
    title: name
  };

  return <Hello data={data} />;
};

export default App;
