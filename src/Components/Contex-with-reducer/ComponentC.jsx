const ComponentC = ({counter, counterDispatch}) => {
    console.log(counterDispatch)
    return (
        <div>
            {counter}
            <button onClick={() => counterDispatch({type:'Increment'})}>Increment</button>
        </div>
    )
}

export default ComponentC;