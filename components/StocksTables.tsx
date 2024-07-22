import React, { useEffect } from "react";
import io from "socket.io-client";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setStocks } from "../store/stockSlice";

interface Stock {
  name: string;
  symbol: string;
  price: number;
  currency: string;
  timestamp: string;
}

const StockTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const stocks = useAppSelector((state) => state.stocks.stocks);

  useEffect(() => {
    const socket = io("http://localhost:8080");

    socket.on("stocks", (stocks: Stock[]) => {
      dispatch(setStocks(stocks));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  return (
    <table className="w-full text-center">
      <thead className="bg-gray-800 text-white">
        <tr className="text-left">
          <th className="w-1/6 pl-5 py-2">Sr No.</th>
          <th className="w-1/6">Name</th>
          <th className="w-1/6">Symbol</th>
          <th className="w-1/6">Price</th>
          <th className="w-1/6">Currency</th>
          <th className="w-1/6">Timestamp</th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {stocks.map((stock, index) => (
          <tr className="border-b  text-left" key={index}>
            <td className="pl-10 py-1 font-bold text-black">{index + 1}</td>
            <td className="px-1 text-black">{stock.name}</td>
            <td className="px-1 text-black">{stock.symbol}</td>
            <td className="px-1 text-black">{stock.price}</td>
            <td className="px-1 text-black">{stock.currency}</td>
            <td className="px-1 text-black">
              {new Date(stock.timestamp).toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockTable;
