import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StarRating from "./Components/StarRating";
import InfiniteScroll from "./Components/InfiniteScroll";
import Cart from "./Components/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <StarRating /> */}
        {/* <InfiniteScroll /> */}
        <Cart />
      </div>
    </>
  );
}

export default App;
