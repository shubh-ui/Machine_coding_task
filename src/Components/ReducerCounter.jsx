import { useReducer } from "react";

const initialState = {
    firstCounter : 0,
    secondCounter: 10
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'Increment' :
            return {...state, firstCounter : state.firstCounter + 1};
        case 'Decrement' :
            return { ...state, firstCounter : state.firstCounter == 0 ?  0 : state.firstCounter - 1}
        case 'Increment2': 
            return {...state, secondCounter : state.secondCounter + 1}
        case 'Decrement2' :
            return {...state, secondCounter : state.secondCounter - 1}
        case 'Reset' :
            return initialState;
        default :
            return state;
    }
} 


const ReducerCounter = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>{count.firstCounter}</div>
            <div>{count.secondCounter}</div>
            <button onClick={() => dispatch({type: 'Increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'Decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'Increment2'})}>Increment Second</button>
            <button onClick={() => dispatch({type: 'Decrement2'})}>Decrement Second</button>
            <button onClick={() => dispatch({type: 'Reset'})}>Reset</button>
        </div>
    )
}

export default ReducerCounter;