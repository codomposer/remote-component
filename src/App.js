import React from "react";
import CoinPriceCard from "./components/CoinPriceCard";

const App = () => {
  const data = {
    coinName: "Bitcoin",
    coinSymbol: "BTC",
    price: 29384.52,
    tvl: 584729103,
    priceDelta24h: 2.5,
    volume24h: 28947362891
  };

  return <CoinPriceCard data={data} />;
};

export default App;
