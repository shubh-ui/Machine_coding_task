import { useState } from "react";
import { useCustomeMemo } from "../Hooks/useCustomMemo";

  const expensiveCalculation = (e) => {
        console.log("Calling expensive caluculation");
        for(let i = 0; i < 100000; i++) {};
    }

const CustomMemo = () => {
    const [count , setCount] = useState(0);
    const [text, setText] = useState("")

    const value = useCustomeMemo(() => expensiveCalculation(count), [count]) 

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <span>Count: {count}</span>
            <span>Text : {text}</span>
            <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Enter text" />
            <button onClick={() => setCount(pre => pre + 1)}>Increment</button>
        </div>
    )
}

export default CustomMemo;