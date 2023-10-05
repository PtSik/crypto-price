import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Coin } from "./types";
import { SAMPLE_COINS } from "./components/data/mock-coins";

function App() {
  const [selectedCoin, setSelectedCoin] = useState<Coin>();

  return (
    <div>
      <Sidebar />
      <div className="fixed right-0 w-3/4">
        <button
          onClick={() => {
            setSelectedCoin(SAMPLE_COINS[0]);
          }}
        >
          Select Bitcoin
        </button>

        <h1>{selectedCoin?.name}</h1>
        <h1>{selectedCoin?.current_price}</h1>
      </div>
    </div>
  );
}

export default App;
