import { useState } from "react";

const DefaultInfiniteScroll = () => {

    const [data, setData] = useState(new Array(60).fill(0));

    const loadMore = () => {
        let timer;
        if(timer) clearTimeout(itimerd);
        timer = setTimeout(() => {
            setData(preData => [...preData, ...new Array(10).fill(0)]);
        }, 1000)
    }

    const threshHold = 20;

    const handleScroll = (event) => {
        const scrollTop = event.target.scrollTop;
        const clientHeight = event.target.clientHeight;
        const scrollHeight = event.target.scrollHeight;
        const remaningScroll = scrollHeight - (scrollTop + clientHeight);
        console.log(remaningScroll)
        if(remaningScroll < threshHold) {
            loadMore();
        }
    }


    return (
        <div style={{
            height:'500px',
            width:'200px',
            border: '1px solid yellow',
            margin:'40px',
            overflow:'auto'
        }}
        onScroll={(e) => handleScroll(e)}
        >
            {
                data.map((_, index) => {
                    return (
                        <div key={index} style={{
                            height:'12px',
                            border:'1px solid #f0f0f0',
                            margin:'6px 0'
                        }}>
                        {index + 1}
                    </div>
                    )
                })
            }
        </div>
    )
}

export default DefaultInfiniteScroll;