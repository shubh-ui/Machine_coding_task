import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StarRating from "./Components/StarRating";
import InfiniteScroll from "./Components/InfiniteScroll";
import Cart from "./Components/Cart";
import CustomeInput from "./Components/CustomeInput";
import { useFetch } from "./Hooks/useFetch";

function App() {
  const [count, setCount] = useState(0);
  const {data, error, loading } = useFetch('https://dummyjson.com/products');
  console.log({data, error, loading});

  return (
    <>
      <div>
        {/* <StarRating /> */}
        {/* <InfiniteScroll /> */}
        {/* <Cart /> */}

        {/* <CustomeInput type="INPUT_NUMBER" /> */}

      </div>
    </>
  );
}

export default App;
