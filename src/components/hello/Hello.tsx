import React from "react";

interface Props {
  data: {
    title: string;
  };
}

const Hello: React.FC<Props> = ({ data }) => {
  return <div className="hello">Hello {data.title}</div>;
};

export default Hello;
