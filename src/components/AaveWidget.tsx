import React, { useState } from "react";

type Tab = "list" | "borrow" | "lend";

interface AssetListProps {
  assets: Record<string, string>[];
}

interface BorrowOrLendFormProps {
  assets: Record<string, string>[];
  type: "borrow" | "lend";
}

const styles = {
  container: {
    width: "400px",
    margin: "0 auto",
    padding: "16px",
    backgroundColor: "#1a202c",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)"
  },
  heading: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "16px",
    textAlign: "center" as const,
    color: "#fff"
  },
  buttonContainer: {
    display: "flex",
    marginBottom: "16px"
  },
  button: (isActive: boolean) => ({
    flex: 1,
    padding: "8px 0",
    fontSize: "14px",
    backgroundColor: isActive ? "#4f46e5" : "#2d3748",
    color: isActive ? "#fff" : "#a0aec0",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }),
  list: {
    marginBottom: "16px",
    listStyleType: "none" as const,
    padding: 0
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2d3748",
    padding: "8px",
    borderRadius: "4px",
    marginBottom: "8px"
  },
  listItemText: {
    fontWeight: "bold",
    color: "#fff"
  },
  listItemDetail: {
    fontSize: "12px",
    color: "#a0aec0"
  },
  form: {
    marginBottom: "16px"
  },
  formGroup: {
    marginBottom: "16px"
  },
  label: {
    display: "block",
    fontSize: "12px",
    fontWeight: "500",
    color: "#a0aec0",
    marginBottom: "4px"
  },
  select: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    backgroundColor: "#2d3748",
    color: "#fff",
    border: "1px solid #4a5568",
    borderRadius: "4px",
    outline: "none"
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    backgroundColor: "#2d3748",
    color: "#fff",
    border: "1px solid #4a5568",
    borderRadius: "4px",
    outline: "none"
  },
  submitButton: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    backgroundColor: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

const AssetList: React.FC<AssetListProps> = ({ assets }) => (
  <ul style={styles.list}>
    {assets.map(asset => (
      <li key={asset.name} style={styles.listItem}>
        <span style={styles.listItemText}>{asset.name}</span>
        <div>
          <span style={{ ...styles.listItemDetail, marginRight: "8px" }}>
            APY: {asset.apy}
          </span>
          <span style={styles.listItemDetail}>TVL: {asset.tvl}</span>
        </div>
      </li>
    ))}
  </ul>
);

const BorrowOrLendForm: React.FC<BorrowOrLendFormProps> = ({
  assets,
  type
}) => (
  <form style={styles.form}>
    <div style={styles.formGroup}>
      <label htmlFor={`${type}Asset`} style={styles.label}>
        Asset
      </label>
      <select name={`${type}Asset`} style={styles.select}>
        {assets.map(asset => (
          <option key={asset.name} value={asset.name}>
            {asset.name}
          </option>
        ))}
      </select>
    </div>
    <div style={styles.formGroup}>
      <label htmlFor={`${type}Amount`} style={styles.label}>
        Amount
      </label>
      <input type="number" name={`${type}Amount`} style={styles.input} />
    </div>
    <button type="submit" style={styles.submitButton}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </button>
  </form>
);

interface Props {
  data: {
    assets: Record<string, string>[];
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

const AaveWidget: React.FC<Props> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<Tab>("list");
  const { assets } = data;

  const renderTabContent = () => {
    switch (activeTab) {
      case "list":
        return <AssetList assets={assets} />;
      case "borrow":
        return <BorrowOrLendForm assets={assets} type="borrow" />;
      case "lend":
        return <BorrowOrLendForm assets={assets} type="lend" />;
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Aave Protocol</h1>
      <div style={styles.buttonContainer}>
        <button
          onClick={() => setActiveTab("list")}
          style={styles.button(activeTab === "list")}
        >
          List
        </button>
        <button
          onClick={() => setActiveTab("borrow")}
          style={styles.button(activeTab === "borrow")}
        >
          Borrow
        </button>
        <button
          onClick={() => setActiveTab("lend")}
          style={styles.button(activeTab === "lend")}
        >
          Lend
        </button>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default AaveWidget;
