export const connectWallet = async () => {
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log("Connected wallet address:", accounts[0]);
  } catch (error) {
    console.error("User rejected connection:", error);
  }
};
