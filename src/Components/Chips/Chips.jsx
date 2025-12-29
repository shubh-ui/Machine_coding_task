import { useState } from "react"

export const Chips = () => {
    const [chipText, setChipText] = useState("");
    const [chipsData, setChipsData] = useState([]);

    const handlekeyDown = (e) => {
        if(e.keyCode == 13) {
            const newChip = {
                id: Date.now(),
                text: chipText
            }

            setChipsData((prev) => ([...prev, newChip]));
            setChipText("");
        }
    }

    const handleRemoveChip = (id) => {
        setChipsData((prev) => {
            return prev.filter((ele) => ele.id !== id);
        })
    }
    return (
        <div style={{display:'flex', flexDirection:'column' ,alignItems:'center'}}>
            <div>
                <h3>Chip Input</h3>
                <input type="text" placeholder="Enter Chips" 
                       value={chipText} 
                       onChange={(e) => setChipText(e.target.value)}
                       onKeyDown={(e) => handlekeyDown(e) }/>
            </div>
            <div style={{ display:'flex',
                          flexDirection:'column',
                          gap:'20px',}}>
                {chipsData?.map((chip, index) => {
                    return <div key={index}
                                style={{
                                    background:'#f0f0f0',
                                    padding:'8px',
                                    display:'flex',
                                    gap:'20px',
                                    justifyContent:'space-between',
                                    borderRadius:'26px'
                                }}
                               >
                        <span>{chip.text}</span>
                        <span style={{color:'red', cursor:'pointer'}}
                              onClick={() => handleRemoveChip(chip.id)}>X</span>
                    </div>
                })}
            </div>
        </div>
    )
}