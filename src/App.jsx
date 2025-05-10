import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StarRating from "./Components/StarRating";
import InfiniteScroll from "./Components/InfiniteScroll";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <StarRating /> */}
        <InfiniteScroll />
      </div>
    </>
  );
}

export default App;
