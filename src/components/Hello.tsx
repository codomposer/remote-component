import React from "react";

interface Props {
  data: {
    title: string;
  };
}

const Hello: React.FC<Props> = ({ data }) => {
  return <div>Hello {data.title}</div>;
};

export default Hello;
