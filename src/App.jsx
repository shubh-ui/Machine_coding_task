import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StarRating from "./Components/StarRating";
import InfiniteScroll from "./Components/InfiniteScroll";
import Cart from "./Components/Cart";
import CustomeInput from "./Components/CustomeInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <StarRating /> */}
        {/* <InfiniteScroll /> */}
        {/* <Cart /> */}

        <CustomeInput type="INPUT_NUMBER" />
      </div>
    </>
  );
}

export default App;
