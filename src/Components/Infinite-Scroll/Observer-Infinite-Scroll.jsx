import { useEffect, useRef, useState } from "react";

const ObserverInfiniteScroll = () => {
    const [data, setData] = useState(new Array(60).fill(0));

    const arrRef = useRef([]);


    const loadMore = () => {
        let timer;

        clearTimeout(timer);

        timer = setTimeout(() => {
            setData(preData => [...preData, ...new Array(10).fill(0 )])
        }, 1000)
    }


    useEffect(() => {
        const observer = new IntersectionObserver((param) => {
            console.log(param[0]?.isIntersecting)
            if(param[0]?.isIntersecting) {
                observer.unobserve(param[0].target);
                loadMore();
            }
        });

        observer.observe(arrRef.current.at(-1));

        return () => {
            observer.disconnect()
        }

    },[data.length]);


      return (
        <div style={{
            height:'500px',
            width:'200px',
            border: '1px solid yellow',
            margin:'40px',
            overflow:'auto'
        }}
        >
            {
                data.map((_, index) => {
                    return (
                        <div key={index} style={{
                            height:'12px',
                            border:'1px solid #f0f0f0',
                            margin:'6px 0'
                        }}
                        ref={(el) => {
                            if(el) {
                                arrRef.current[index] = el
                            }
                        }}
                        >
                        {index + 1}
                    </div>
                    )
                })
            }
        </div>
    )
}

export default ObserverInfiniteScroll;