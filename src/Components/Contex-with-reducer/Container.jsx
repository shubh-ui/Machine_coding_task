import { createContext, useReducer } from "react";
import ComponentA from "./ComponentA";

const initialState = 0;
export const counterContext = createContext()


const reducer = (state, action) => {
    switch(action.type) {
        case 'Increment' :
            return state + 1;
        case 'Decrement' :
            return state - 1;
        case 'Reset' :
            return initialState;
        default :
        return state;
    }
}

const Container = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <counterContext.Provider value={{counter : count, counterDispatch: dispatch}}>
                <ComponentA />
            </counterContext.Provider>
            
        </>
    )
}

export default Container;