import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSelectedStock } from "@/store/stockSlice";
import React from "react";

const StockSelect = () => {
  const dispatch = useAppDispatch();
  const symbol = useAppSelector((state) => state.stocks.selectedStock);
  const setSymbol = (symbol: "BTC" | "ETH" | "USDT" | "BNB" | "SOL") => {
    dispatch(setSelectedStock(symbol));
  };

  return (
    <div className="flex ">
      <div>Choose a stock:</div>
      <select
        className="text-black ml-2 border-rounded"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      >
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="USDT">USDT</option>
        <option value="BNB">BNB</option>
        <option value="SOL">SOL</option>
      </select>
    </div>
  );
};

export default StockSelect;
