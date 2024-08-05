import React from "react";

import "../global.css";

const Hello = ({ data }) => {
  return <button>Hi {data?.title}</button>;
};

export default Hello;
