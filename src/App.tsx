import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import initializeWeb3 from "./function/initializeWeb3";
import MenuBar from "./components/MenuBar";
import Web3 from "web3";
import Web3Context from "./context/Web3Context";
import getWalletAddress from "./function/getWalletAddress";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function App() {
  const [web3, setWeb3] = useState<Web3 | null>(null);

  useEffect(() => {
    initializeWeb3(setWeb3);
  }, []);

  const wallet = getWalletAddress(web3);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Web3Context.Provider value={web3}>
        <MenuBar />
        <Body />
      </Web3Context.Provider>
    </LocalizationProvider>
  );
}

export default App;
