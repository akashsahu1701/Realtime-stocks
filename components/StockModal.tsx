import React, { useState } from "react";

const StockModal = ({
  isOpen,
  onClose,
  onSelect,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (symbol: string) => void;
}) => {
  const [symbol, setSymbol] = useState("");

  const handleSubmit = () => {
    onSelect(symbol);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Select Stock/Crypto</h2>
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <button onClick={handleSubmit}>Select</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default StockModal;
