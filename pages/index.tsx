import React, { useEffect } from "react";
import StockTable from "../components/StocksTables";
import StockModal from "@/components/StockModal";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchStocks } from "@/api/stocks";
import { setStocks, setStocksData } from "@/store/stockSlice";

interface Stock {
  name: string;
  symbol: string;
  price: number;
  currency: string;
  timestamp: string;
}

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.stocks.selectedStock);
  useEffect(() => {
    if (!selected) return;
    fetchStocks(selected, 20).then((stocks) => {
      dispatch(setStocksData(stocks));
    });
  }, [dispatch, selected]);
  return (
    <div className="">
      <h1 className="text-2xl text-center">Real-time Stock Prices</h1>

      <StockModal />

      <StockTable />
    </div>
  );
};

export default Home;
