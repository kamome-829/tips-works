import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import initializeWeb3 from "./function/initializeWeb3";
import MenuBar from "./components/MenuBar";
import Web3 from "web3";
import Web3Context from "./context/Web3Context";
import getWalletAddress from "./function/getWalletAddress";

function App() {
  const [web3, setWeb3] = useState<Web3 | null>(null);

  useEffect(() => {
    initializeWeb3(setWeb3);
  }, []);

  const wallet = getWalletAddress(web3);
  console.log(wallet);

  return (
    <Web3Context.Provider value={web3}>
      <MenuBar />
      <Body />
    </Web3Context.Provider>
  );
}

export default App;
