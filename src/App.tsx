/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import TokenChart from "./components/tokenChart/TokenChart";
import Hello from "./components/hello/Hello";
import HelloWorld from "./components/helloWorld/HelloWorld";

const App: React.FC = () => {
  const mockData = {
    tokenSymbol: "ETH",
    price: 2000,
    mcp: 297386283596,
    tvl: 15422480302,
    volume24h: 16.67,
    seriesData: [
      [Date.UTC(2023, 0, 1), 1200],
      [Date.UTC(2023, 0, 2), 1250],
      [Date.UTC(2023, 0, 3), 1300],
      [Date.UTC(2023, 0, 4), 1280],
      [Date.UTC(2023, 0, 5), 1350],
      [Date.UTC(2023, 0, 6), 1380],
      [Date.UTC(2023, 0, 7), 1400],
      [Date.UTC(2023, 0, 8), 1390],
      [Date.UTC(2023, 0, 9), 1450],
      [Date.UTC(2023, 0, 10), 1500],
      [Date.UTC(2023, 0, 11), 1550],
      [Date.UTC(2023, 0, 12), 1600],
      [Date.UTC(2023, 0, 13), 1620],
      [Date.UTC(2023, 0, 14), 1650],
      [Date.UTC(2023, 0, 15), 1630],
      [Date.UTC(2023, 0, 16), 1680],
      [Date.UTC(2023, 0, 17), 1700],
      [Date.UTC(2023, 0, 18), 1720],
      [Date.UTC(2023, 0, 19), 1750],
      [Date.UTC(2023, 0, 20), 1780],
      [Date.UTC(2023, 0, 21), 1800],
      [Date.UTC(2023, 0, 22), 1850],
      [Date.UTC(2023, 0, 23), 1900],
      [Date.UTC(2023, 0, 24), 1950],
      [Date.UTC(2023, 0, 25), 2000],
      [Date.UTC(2023, 0, 26), 2050],
      [Date.UTC(2023, 0, 27), 2100],
      [Date.UTC(2023, 0, 28), 2120],
      [Date.UTC(2023, 0, 29), 2150],
      [Date.UTC(2023, 0, 30), 2200],
      [Date.UTC(2023, 0, 31), 2250]
    ]
  };

  return <TokenChart data={mockData} />;
};

export { App };
