import { useContext } from "react";
import ComponentB from "./ComponentB";
import { counterContext } from "./Container";

const ComponentA = () => {
    const {counter , counterDispatch} = useContext(counterContext)
    return (
        <ComponentB counter={counter} counterDispatch={counterDispatch} />
    )
}

export default ComponentA;