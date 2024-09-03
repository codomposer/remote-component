import React, { useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";

interface Props {
  data: {
    tokenSymbol: string;
    price: number;
    mcp: number;
    tvl: number;
    volume24h: number;
    seriesData: number[][];
  };
}

// Custom dark theme
Highcharts.setOptions({
  chart: {
    backgroundColor: "#26272B80",
    style: {
      color: "#9c9f9e"
    }
  },
  title: {
    style: {
      color: "#FAC515"
    }
  },
  xAxis: {
    labels: {
      style: {
        color: "#9c9f9e"
      }
    },
    lineColor: "#51525C",
    tickColor: "#51525C"
  },
  yAxis: {
    labels: {
      style: {
        color: "#9c9f9e"
      }
    },
    lineColor: "#51525C",
    tickColor: "#51525C",
    gridLineColor: "#333337"
  },
  tooltip: {
    backgroundColor: "#26272B",
    style: {
      color: "#FAC515"
    }
  },
  legend: {
    itemStyle: {
      color: "#9c9f9e"
    },
    itemHoverStyle: {
      color: "#FAC515"
    }
  },
  plotOptions: {
    series: {
      dataLabels: {
        color: "#FAC515"
      },
      color: "#85E13A"
    }
  },
  navigator: {
    series: {
      color: "#85E13A",
      lineColor: "#85E13A"
    }
  },
  scrollbar: {
    barBackgroundColor: "#51525C",
    barBorderRadius: 7,
    buttonArrowColor: "#FAC515",
    buttonBackgroundColor: "#333337",
    buttonBorderRadius: 7,
    rifleColor: "#FAC515",
    trackBackgroundColor: "#3F3F46" // lightBgColor
  }
});

const StockChart: React.FC<Props> = ({ data }) => {
  const options: Highcharts.Options = {
    title: {
      text: `${data.tokenSymbol} Price Chart`
    },
    rangeSelector: {
      selected: 1
    },
    series: [
      {
        type: "line",
        name: `${data.tokenSymbol} Price`,
        data: [...data.seriesData],
        tooltip: {
          valueDecimals: 2
        }
      }
    ]
  };

  const containerStyle: React.CSSProperties = {
    width: "900px",
    maxWidth: "900px",
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: "#18181B",
    fontFamily: "Darker Grotesque"
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  };

  const textStyle: React.CSSProperties = {
    color: "white",
    margin: "8px 0px 8px 0px"
  };

  const priceStyle: React.CSSProperties = {
    color: "#4ade80",
    margin: "0px",
    fontSize: "32px",
    fontWeight: "bold"
  };

  const highChartContainerStyle: React.CSSProperties = {
    padding: "10px 0px 10px 0px"
  };

  const badgeStyle: React.CSSProperties = {
    backgroundColor: "#4ade80",
    color: "white",
    padding: "4px 8px",
    borderRadius: "4px"
  };

  const formatNumberWithCommas = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300..900&display=swap');
        `}
      </style>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <div>
            <h2 style={textStyle}>ETH</h2>
            <p style={priceStyle}>${data.price}</p>
            <p style={textStyle}>
              Market cap: ${formatNumberWithCommas(data.mcp)} | Trading volume:
              ${formatNumberWithCommas(data.tvl)}
            </p>
          </div>
          <div style={badgeStyle}>+{data.volume24h}%</div>
        </div>
        <div style={highChartContainerStyle}>
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={"stockChart"}
            options={options}
          />
        </div>

        <Trade />
      </div>
    </>
  );
};

const Trade: React.FC = () => {
  const tradeContainerStyle: React.CSSProperties = {
    color: "white",
    padding: "16px 0px"
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: "600",
    margin: "0px 0px 10px 0px"
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "8px"
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "8px",
    border: "1px solid #374151",
    borderRadius: "4px",
    backgroundColor: "#26272B",
    color: "white",
    outline: "none"
  };

  const buttonStyle: React.CSSProperties = {
    flex: 1,
    padding: "8px 16px",
    borderRadius: "4px",
    color: "white",
    border: "none",
    cursor: "pointer"
  };

  const buyButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: "#10B981"
  };

  const sellButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: "#EF4444"
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: "flex",
    gap: "16px"
  };

  const [amount, setAmount] = useState("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAmount(e.target.value);
  };

  const handleBuy = () => {
    // Handle buy action
  };

  const handleSell = () => {
    // Handle sell action
  };

  return (
    <div style={tradeContainerStyle}>
      <h2 style={headingStyle}>Trade ETH</h2>
      <div style={{ marginBottom: "16px" }}>
        <label htmlFor="amount" style={labelStyle}>
          Amount:
        </label>
        <input
          type="text"
          id="amount"
          name="amount"
          pattern="^\d+$"
          style={inputStyle}
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
        />
      </div>
      <div style={buttonContainerStyle}>
        <button onClick={handleBuy} style={buyButtonStyle}>
          Buy ETH
        </button>
        <button onClick={handleSell} style={sellButtonStyle}>
          Sell ETH
        </button>
      </div>
    </div>
  );
};

export default StockChart;
