import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSelectedStock } from "@/store/stockSlice";

interface StockModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StockModal: React.FC<StockModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const symbol = useAppSelector((state) => state.stocks.selectedStock);
  const setSymbol = (symbol: "BTC" | "ETH" | "USDT" | "BNB" | "SOL") => {
    dispatch(setSelectedStock(symbol));
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[0]">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-4 rounded shadow-lg w-1/4 z-[10]">
        <h2 className="text-black mb-4">Choose a stock</h2>
        <div className="flex">
          <select
            className="text-black w-full p-2 px-4 ml-2 border rounded"
            value={symbol}
            onChange={(e) =>
              setSymbol(
                e.target.value as "BTC" | "ETH" | "USDT" | "BNB" | "SOL"
              )
            }
          >
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            <option value="USDT">USDT</option>
            <option value="BNB">BNB</option>
            <option value="SOL">SOL</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default StockModal;
