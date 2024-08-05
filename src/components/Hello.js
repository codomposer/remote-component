import React from "react";

const Hello = ({ data }) => {
  return (
    <button
      style={{
        backgroundColor: "#3498db",
        color: "#ffffff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "2px",
        fontSize: "16px",
        cursor: "pointer",
        transition: "background-color 0.3s ease"
      }}
      onMouseEnter={e => (e.target.style.backgroundColor = "#2980b9")}
      onMouseLeave={e => (e.target.style.backgroundColor = "#3498db")}
    >
      Hi {data?.title}
    </button>
  );
};

export default Hello;
