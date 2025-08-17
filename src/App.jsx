import { lazy, Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StarRating from "./Components/StarRating";
import InfiniteScroll from "./Components/InfiniteScroll";
import Cart from "./Components/Cart";
import CustomeInput from "./Components/CustomeInput";
import { useFetch } from "./Hooks/useFetch";
import DebounceFn from "./Components/DebounceFun";
import TraficContainer from "./Components/TraficLight/Trafic-Container";
import StarContainer from "./Components/Star_Rating/StartContainer";
import NestedCheckbox from "./Components/Nested_Checkbox/NestedCheckbox";
import AutoComplete from "./Components/AutoComplete/AutoComplete";
import InputCode from "./Components/InputCode";
import ReducerCounter from "./Components/ReducerCounter";
import Container from "./Components/Contex-with-reducer/Container";
  
const LazyComponent  = lazy(() => import('./Components/TraficLight/Trafic-Container'))

function App() {
  // const [count, setCount] = useState(0);
  // const {data, error, loading } = useFetch('https://dummyjson.com/products');
  // console.log({data, error, loading});


  return (
    <>
      <div>
        {/* <StarRating /> */}
        {/* <InfiniteScroll /> */}
        {/* <Cart /> */}

        {/* <CustomeInput type="INPUT_NUMBER" /> */}

        {/* <DebounceFn /> */}

        {/* <TraficContainer /> */}

        {/* <Suspense fallback={<p> Loading...</p>}>
          <LazyComponent />
        </Suspense> */}

        {/* <NestedCheckbox /> */}

        {/* <AutoComplete /> */}
        
        {/* <InputCode /> */}

        {/* <ReducerCounter /> */}

        <Container />
      </div>
    </>
  );
}

export default App;
