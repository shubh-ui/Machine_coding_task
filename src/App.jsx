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
// import NestedCheckbox from "./Components/Nested_Checkbox/NestedCheckbox";
import AutoComplete from "./Components/AutoComplete/AutoComplete";
import InputCode from "./Components/InputCode";
import ReducerCounter from "./Components/ReducerCounter";
import Container from "./Components/Contex-with-reducer/Container";
import ParentChildComunicationContainer from "./Components/Parent-child-compunincation/Parent";
import OTP from "./Components/OTP/OTP";
import UserForm from "./Forms/UserForm";
import DefaultInfiniteScroll from "./Components/Infinite-Scroll/Default-Infinite-Scroll";
import ObserverInfiniteScroll from "./Components/Infinite-Scroll/Observer-Infinite-Scroll";
import TicTacToe from "./Components/Tic-Tac-Toe/TicTacToe";
import NestedCheckBox from "./Components/Nested-Checkbox_v2/NestedCheckboxV2";
import TraficLightV2 from "./Components/TraficLight_v2/TraficLightV2";
import CustomMemo from "./Components/CustomMemo";
import DayView from "./Components/Calender/DayView";
import ModalContainer from "./Components/Modal/ModalContainer";
import ProgressContainer from "./Components/Progress/ProgressContainer";
import CommentContainer from "./Components/Nested-Comments/CommentContainer";
import PostInfiniteScroll from "./Components/Infinite-Scroll/PostInfiniteScroll";
import TicTacToeV2 from "./Components/TIcTacToeVersion2/TicTacToe";
import DebounceContainer from "./Components/Debounce/DebounceContainer";

  
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

        {/* <Container /> */}

        {/* <ParentChildComunicationContainer /> */}

        {/* <OTP /> */}

        {/* <UserForm /> */}

        {/* <DefaultInfiniteScroll /> */}

        {/* <ObserverInfiniteScroll /> */}

        {/* <TicTacToe /> */}

        {/* <NestedCheckBox /> */}

        {/* <TraficLightV2 /> */}

        {/* <CustomMemo /> */}

        {/* <DayView /> */}
        
        {/* <ModalContainer /> */}

        {/* <ProgressContainer /> */}

        {/* <CommentContainer /> */}

        {/* <PostInfiniteScroll /> */}

        {/* <TicTacToeV2 /> */}

        <DebounceContainer />
      </div>
    </>
  );
}

export default App;
