import { useEffect, useMemo, useState } from "react"

export const GridLight = () => {
    const BoxData = [
        [1,1,1],
        [0,1,0],
        [0,1,0]
    ]
    return (
        <div>
            <Light boxlight={BoxData} />
        </div>
    )
}


const Light = ({boxlight}) => {
    const light = useMemo(() => boxlight.flat());
    const [selected, setSelected] = useState(new Set());
    const [unloading, setUnloading] = useState(false)
    // console.log(light)
    const lightLen = light.filter((el) => el == 1).length

    const handleClick = (index) => {
        setSelected((prev) => {
            const newSet = new Set(prev)
            newSet.add(index)
            return newSet;
        })
    }

    const unLoad = () => {
      const keys = Array.from(selected.keys());
      setUnloading(true);
      const removeNextKey = () => {
      console.log(keys)

        if(keys.length) {
        const currentKey = keys.shift();

            setSelected((prev) => {
                const updatedcopy = new Set(prev);
                updatedcopy.delete(currentKey);
                return updatedcopy;
            })
            setTimeout(removeNextKey, 500)
        } else {
            setUnloading(false)
        }
      }
      setTimeout(removeNextKey, 100)
    }

    useEffect(() => {
        if(selected.size == lightLen) {
                console.log("all selected")
                unLoad()
                
            }
    },[selected, lightLen])

    // console.log(selected)
    return (
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,50px)', gap:'14px'}}>
            {
                light.map((l, index) => {
                    const isVisible = l == 1;
                    const isSelected = selected.has(index)
                    console.log(isVisible)
                    return <div
                        key={`${l}-${index}`}
                        onClick={() => handleClick(index)}
                        style={{
                            height:'40px',
                            width:'40px',
                            border:'1px solid gray',
                            cursor:'pointer',
                            background: isSelected? 'green' : '',
                            pointerEvents: unloading ? 'none' : 'auto',
                            visibility: isVisible ? 'block': 'hidden'
                        }}
                    ></div>
                })
            }
        </div>
    )
}