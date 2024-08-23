import React from "react";
import AaveWidget from "./components/AaveWidget";

const App: React.FC = () => {
  const mockData = {
    assets: [
      {
        name: "DAI",
        apy: "2.5%",
        tvl: "$100M"
      },
      {
        name: "USDC",
        apy: "2.5%",
        tvl: "$100M"
      },
      {
        name: "ETH",
        apy: "2.5%",
        tvl: "$100M"
      },
      {
        name: "WBTC",
        apy: "2.5%",
        tvl: "$100M"
      },
      {
        name: "AAVE",
        apy: "2.5%",
        tvl: "$100M"
      }
    ]
  };

  return <AaveWidget data={mockData} />;
};

export { App };
