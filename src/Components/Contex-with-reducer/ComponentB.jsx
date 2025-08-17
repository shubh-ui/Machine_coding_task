import ComponentC from "./ComponentC";

const ComponentB = ({counter, counterDispatch}) => {
    return (
        <ComponentC counter={counter} counterDispatch={counterDispatch} />
    )
}

export default ComponentB;