import { useEffect } from "react";
import "./App.css";
import Body from "./components/Body";
import initializeWeb3 from "./function/initializeWeb3";

function App() {
  useEffect(() => {
    initializeWeb3();
  }, []);
  return <Body />;
}

export default App;
