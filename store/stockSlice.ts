import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Stock {
  name: string;
  symbol: string;
  price: number;
  currency: string;
  timestamp: string;
}

interface StockState {
  selectedStock: "BTC" | "ETH" | "USDT" | "BNB" | "SOL";
  stocks: Stock[];
}

const initialState: StockState = {
  selectedStock: "BTC",
  stocks: [],
};

const stockSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {
    setStocks(state, action: PayloadAction<Stock[]>) {
      const stocks = action.payload.filter(
        (stock) => stock.symbol === state.selectedStock
      );
      state.stocks = [...stocks, ...state.stocks].slice(0, 20);
    },
    setStocksData(state, action: PayloadAction<any>) {
      state.stocks = action.payload;
    },
    setSelectedStock(
      state,
      action: PayloadAction<"BTC" | "ETH" | "USDT" | "BNB" | "SOL">
    ) {
      state.selectedStock = action.payload;
    },
  },
});

export const { setStocks, setSelectedStock, setStocksData } =
  stockSlice.actions;

export default stockSlice.reducer;
