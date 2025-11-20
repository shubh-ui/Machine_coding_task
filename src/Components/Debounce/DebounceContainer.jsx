import { useState } from "react"
import useDebounce from "./useDebounce";

const DebounceContainer = () => {
    const [textValue, setTextValue] = useState("");
    const debounceValue = useDebounce(textValue, 2000)

    return (
        <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
            <input type="text" value={textValue} onChange={(e) => setTextValue(e.target.value)} />
            <div>Normal:{textValue}</div>
            <div>Debounce:{debounceValue}</div>
        </div>
    )
}

export default DebounceContainer;