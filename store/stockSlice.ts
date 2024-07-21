import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

interface StockState {
  stocks: any[];
}

const initialState: StockState = {
  stocks: [],
};

export const fetchStockData = createAsyncThunk(
  "stocks/fetchStockData",
  async (symbol: string) => {
    const response = await axios.get(
      `http://localhost:5000/api/stocks/${symbol}`
    );
    return response.data;
  }
);

const stockSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStockData.fulfilled, (state, action) => {
      state.stocks = action.payload;
    });
  },
});

export const selectStocks = (state: RootState) => state.stocks.stocks;
export default stockSlice.reducer;
