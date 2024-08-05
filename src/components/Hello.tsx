import React from "react";

interface Props {
  title: string;
}

const Hello: React.FC<Props> = ({ title }) => {
  return <div>Hello {title}</div>;
};

export default Hello;
