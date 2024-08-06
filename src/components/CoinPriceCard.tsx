import React from "react";

interface Props {
  data: {
    coinName: string;
    coinSymbol: string;
    price: number;
    tvl: number;
    priceDelta24h: number;
    volume24h: number;
  };
}

const CoinPriceCard: React.FC<Props> = ({ data }) => {
  const { coinName, coinSymbol, price, tvl, priceDelta24h, volume24h } = data;

  const cardStyle = {
    backgroundColor: "#1E1E1E",
    color: "white",
    borderRadius: "8px",
    padding: "24px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "300px"
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px"
  };

  const coinInfoStyle = {
    display: "flex",
    alignItems: "center"
  };

  const iconStyle = {
    color: "#FFD700",
    marginRight: "8px"
  };

  const coinNameStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Roboto, sans-serif"
  };

  const symbolStyle = {
    fontSize: "14px",
    fontWeight: "500",
    fontFamily: "Roboto, sans-serif",
    color: "#A0A0A0"
  };

  const priceStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "Roboto, sans-serif",
    marginBottom: "4px"
  };

  const deltaStyle = {
    fontSize: "14px",
    color: priceDelta24h >= 0 ? "#4CAF50" : "#F44336"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginTop: "16px"
  };

  const labelStyle = {
    fontSize: "14px",
    color: "#A0A0A0",
    fontFamily: "Roboto, sans-serif"
  };

  const valueStyle = {
    fontWeight: "500",
    fontFamily: "Roboto, sans-serif"
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <div style={coinInfoStyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            style={iconStyle}
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m10-6a1 1 0 1 0-2 0v1H8a1 1 0 0 0 0 2h1v6H8a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1v1a1 1 0 1 0 2 0v-1c.493 0 1.211-.14 1.834-.588C16.51 15.925 17 15.126 17 14c0-.851-.281-1.516-.71-2c.429-.484.71-1.149.71-2c0-1.126-.491-1.926-1.166-2.412A3.23 3.23 0 0 0 14 7V6a1 1 0 1 0-2 0v1h-1zm0 5V9h3c.173 0 .456.06.666.212c.159.114.334.314.334.788s-.175.674-.334.789A1.25 1.25 0 0 1 14 11zm0 2h3c.173 0 .456.06.666.211c.159.115.334.315.334.789s-.175.674-.334.789A1.25 1.25 0 0 1 14 15h-3z"
              clipRule="evenodd"
            />
          </svg>
          <h2 style={coinNameStyle}>{coinName}</h2>
        </div>
        <span style={symbolStyle}>{coinSymbol}</span>
      </div>
      <div>
        <p style={priceStyle}>${price.toLocaleString()}</p>
        <p style={deltaStyle}>
          {priceDelta24h >= 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11.293 7.293a1 1 0 0 1 1.32-.083l.094.083l6 6l.083.094l.054.077l.054.096l.017.036l.027.067l.032.108l.01.053l.01.06l.004.057L19 14l-.002.059l-.005.058l-.009.06l-.01.052l-.032.108l-.027.067l-.07.132l-.065.09l-.073.081l-.094.083l-.077.054l-.096.054l-.036.017l-.067.027l-.108.032l-.053.01l-.06.01l-.057.004L18 15H6c-.852 0-1.297-.986-.783-1.623l.076-.084z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18 9c.852 0 1.297.986.783 1.623l-.076.084l-6 6a1 1 0 0 1-1.32.083l-.094-.083l-6-6l-.083-.094l-.054-.077l-.054-.096l-.017-.036l-.027-.067l-.032-.108l-.01-.053l-.01-.06l-.004-.057v-.118l.005-.058l.009-.06l.01-.052l.032-.108l.027-.067l.07-.132l.065-.09l.073-.081l.094-.083l.077-.054l.096-.054l.036-.017l.067-.027l.108-.032l.053-.01l.06-.01l.057-.004z"
              />
            </svg>
          )}
          {Math.abs(priceDelta24h).toFixed(2)}%
        </p>
      </div>
      <div style={gridStyle}>
        <div>
          <p style={labelStyle}>TVL</p>
          <p style={valueStyle}>${tvl.toLocaleString()}</p>
        </div>
        <div>
          <p style={labelStyle}>24h Volume</p>
          <p style={valueStyle}>${volume24h.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default CoinPriceCard;
