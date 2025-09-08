import { useRef, useState } from "react"
import Child from "./Child";

const ParentChildComunicationContainer = () => {
    return <Parent />
}

const Parent = () => {
    const [parentCounter , setParentCounter] = useState(0);
    const childRef = useRef(null);

    const handleParentState = () => {
        setParentCounter(prev => prev + 1);
    }

    const changeChildState = () => {
        if(childRef.current) {
            console.log(childRef.current)
        }
    }

    return (
        <div>
            <div>
                <span>ParentCounter - {parentCounter }</span>
                <button onClick={changeChildState}>ChangeChild</button>

                <Child ref={childRef} handleParentState={handleParentState} />
            </div>
        </div>
    )
}

export default ParentChildComunicationContainer;