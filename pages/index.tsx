import React, { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!selected) return;
    fetchStocks(selected, 20).then((stocks) => {
      dispatch(setStocksData(stocks));
    });
  }, [dispatch, selected]);
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl text-center">Real-time Stock Prices</h1>

      <button
        className="bg-blue-500 text-white left px-4 py-2 rounded mt-4 w-[200px] mr-2.5 mb-2.5"
        style={{ alignSelf: "end" }}
        onClick={() => setOpen(true)}
      >
        Choose Stock
      </button>

      <StockModal isOpen={open} onClose={() => setOpen(false)} />
      <StockTable />
    </div>
  );
};

export default Home;
