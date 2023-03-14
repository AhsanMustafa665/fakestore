import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menubar from "./Components/Shared/Menubar";
import AllProducts from "./Components/AllProducts/AllProducts";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init();
  }, []);
  const setCartCount = () => setCount(count + 1);
  // console.log(count);
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <AllProducts setCartCount={setCartCount}></AllProducts>
    </div>
  );
}

export default App;
