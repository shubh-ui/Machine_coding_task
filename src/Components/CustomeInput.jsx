import { useEffect, useState } from "react";

const CustomeInput = ({type}) => {
    return (
        <div>
            <RenderField type={type}/>
        </div>
    )
}

export default CustomeInput;


const RenderField = ({type}) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(null);
    const maxValueText = 10;
    const numRange = [1, 30];

    useEffect(()=>{
        console.log("calling useeffect")
        if(type == "INPUT_TEXT" && value?.length > maxValueText) {
            setError(`The Max value for input is ${maxValueText}`);
        } else if(type == 'INPUT_NUMBER' && value !== "" && (value < numRange[0] || value > numRange[1])) {
            setError(`The Number should be in between ${numRange[0]} to ${numRange[1]}`);
        } else {
            setError(null)
        }
    },[value])

    switch(type) {
        case 'INPUT_TEXT' : 
            return (
                <>
                  <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} placeholder="Enter a text"/>
                  <span>{error?.length > 0 && error}</span>
                </>
            )
        case 'INPUT_NUMBER' :
            return (
                <>
                    <input type="number" placeholder="Enter a number" value={value} onChange={(e) => setValue(e.target.value)}/>
                    <span>{error?.length > 0 && error}</span>
                </>
            )
        default :
            return (
                <input type="text" />
            )
    }
}