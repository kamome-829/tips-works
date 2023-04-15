import { createContext } from "react";
import Web3 from "web3";

const Web3Context = createContext<Web3 | null>(null);

export default Web3Context;
