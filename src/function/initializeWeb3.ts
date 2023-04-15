import Web3 from "web3";

type SetWeb3Function = React.Dispatch<React.SetStateAction<Web3 | null>>;

const initializeWeb3 = (setWeb3: SetWeb3Function) => {
  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask is installed!");
    const web3 = new Web3(window.ethereum);
    setWeb3(web3);
  } else {
    console.log(
      "MetaMask is not installed. Please install the MetaMask extension to continue."
    );
  }
};

export default initializeWeb3;
