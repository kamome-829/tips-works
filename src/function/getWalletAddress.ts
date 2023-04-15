import Web3 from "web3";

const getWalletAddress = async (web3: Web3 | null) => {
  if (web3) {
    try {
      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        const walletAddress = accounts[0];
        console.log("Wallet address:", walletAddress);
        return walletAddress;
      } else {
        console.log("No wallet connected.");
      }
    } catch (error) {
      console.error("Error getting wallet address:", error);
    }
  } else {
    console.log("Web3 is not initialized. Please connect your wallet first.");
  }
};

export default getWalletAddress;
