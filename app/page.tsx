"use client";

import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchStockData, selectStocks } from "../store/stockSlice";
import StockModal from "../components/StockModal";

const Home = () => {
  // const dispatch = useDispatch();
  // const stocks = useSelector(selectStocks);
  const stocks: Array<Object> = [];
  const [selectedStock, setSelectedStock] = useState("GOOG");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   dispatch(fetchStockData(selectedStock));
  //   const interval = setInterval(() => {
  //     return dispatch(fetchStockData(selectedStock));
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [dispatch, selectedStock]);

  return (
    <div>
      <h1>Real-time Stock Prices</h1>
      <button onClick={() => setIsModalOpen(true)}>Change Stock/Crypto</button>
      <StockModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={(symbol) => setSelectedStock(symbol)}
      />
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock: any) => (
            <tr key={stock._id}>
              <td>{stock.symbol}</td>
              <td>{stock.price}</td>
              <td>{new Date(stock.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
