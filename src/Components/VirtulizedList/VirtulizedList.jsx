import { useState } from "react"

export const VirtulizedList = () => {
    const list = Array.from({length: 10000}, (_, index) => index + 1)
    return (
        <List list={list} height={500} width={200} itemHeight={35} />
    )
}

const List = ({list, height, width, itemHeight}) => {
    const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)])
    const visibleList = list.slice(indices[0], indices[1] + 1)

    const handleScroll = (e) => {
        const {scrollTop} = e.target;
        console.log(scrollTop)
        const newStartIndex = Math.floor(scrollTop /itemHeight);
        const newEndIndex = newStartIndex + Math.floor(height / itemHeight);
        setIndices([newStartIndex, newEndIndex]);
    }
    
    return (
        <div style={{height, width, background: 'gray', overflow: 'auto'}} onScroll={handleScroll}>
            <div style={{height: list.length * itemHeight, position:'relative'}}>
                {
                    visibleList.map((item, index) => {
                        return <div key={item} style={{
                                    height: itemHeight, 
                                    background:'coral', 
                                    borderTop:'2px solid gray',
                                    position:'absolute',
                                    top: (indices[0]+ index) * itemHeight,
                                    width:'100%',
                                    }}>
                                {item}
                            </div>
                    })
                }
            </div>
        </div>
    )
}