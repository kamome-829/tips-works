import Web3 from "web3";

const initializeWeb3 = () => {
  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask is installed!");
  } else {
    console.log(
      "MetaMask is not installed. Please install the MetaMask extension to continue."
    );
  }
  const web3 = new Web3(window.ethereum);
};

export default initializeWeb3;
