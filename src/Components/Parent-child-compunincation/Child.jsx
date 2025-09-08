import { useState } from "react";

const Child = ({handleParentState}) => {
    const [childCounter, setChildCounter] = useState(0);

    const handleChildState = () => {
        setChildCounter(prev => prev + 1);
    }

    return (
        <div>
            <div>
                <span>ChildCounter - {childCounter}</span>
                <button onClick={handleParentState}>ChangeParent</button>
            </div>
        </div>
    )
}

export default Child;