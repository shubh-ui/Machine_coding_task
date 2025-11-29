import { useState } from "react";
import { data } from "./data";

const Accordian = () => {
    console.log(data)
    const [currentOpenIdx, setCurrentOpenIdx] = useState(1)
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div style={{border:'1px solid #000', padding:'20px'}}>
                {
                data.length > 0 && (
                    data.map((item, index) => {
                        return <div style={{border: "1px solid #000", marginBottom:'6px'}}>
                            <div style={{background:'#f0f0f0', 
                                        padding:'10px 6px', 
                                        display:'flex', 
                                        justifyContent:'space-between'}}
                                        onClick={() => setCurrentOpenIdx(index+1)}
                                        >
                                            <span>{item.question}</span> 
                                            <span>{currentOpenIdx == index +1 ? '-' : '+'}</span>
                            </div>
                            {currentOpenIdx == index + 1 && <div style={{padding:'6px 6px'}}>{item.ans}</div>}
                        </div>
                    })
                )
            }
            </div>
        </div>
    )
}

export default Accordian;