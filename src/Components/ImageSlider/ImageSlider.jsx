import { useEffect, useRef, useState } from "react"

const data = [
    {
        id:1,
        name:'Urope1',
        url:'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/11/20122137/bergen-1.jpeg?tr=w-1366,f-jpg,pr-true'
    },
    {
        id:2,
        name:'Urope2',
        url:'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/11/20122015/prague.jpeg?tr=w-1920'
    },
     {
        id:3,
        name:'Urope3',
        url:'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/11/20122022/barcelona.jpeg?tr=w-1920'
    }
]

export const ImageSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const timeRef = useRef()
    const startRolling = () => {
               timeRef.current = setInterval(() => {
            setActiveIndex((prev) => {
                if(prev == 2) {
                    return 0;
                }
                return prev + 1;
            })
        },3500);
    }

    const stopRolling = () => {
        clearInterval(timeRef.current)
    }
     useEffect(() => {
        startRolling()
        return () => {
            clearInterval(timeRef.current)
        }
    },[])

    console.log(activeIndex)

    return (
        <div style={{position:'relative', cursor:'pointer'}} onMouseOver={stopRolling} onMouseLeave={startRolling}>
            <Slide image={data[activeIndex].url} />
            <ConfigButton activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <SlideButtons activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
    )
}

const Slide = ({image}) => {
    return (
        <div>
            <img src={image} height={600} width={1200}/>
        </div>
    )
}

const ConfigButton = ({activeIndex, setActiveIndex}) => {
    const handlePrevious = () => {
        setActiveIndex((prev) => {
            if(prev == 0) {
                return 2;
            }
            return prev -1
        })
    }
    const handleNext = () => {
        setActiveIndex((prev) => {
            if(prev == 2) {
                return 0;
            }
            return prev + 1;
        })
    }
    return (
        <div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
             <button onClick={handlePrevious} style={{position:'absolute', top:'50%', left:'10px', cursor:'pointer'}}>Back</button>
            <button onClick={handleNext} style={{position:'absolute', top:'50%', right:'10px',cursor:'pointer'}}>Next</button>
            </div>
        </div>
    )
}

const SlideButtons = ({activeIndex, setActiveIndex}) => {
    return (
        <div style={{display:'flex', gap:'10px', position:'absolute', top:'90%', left:'45%'}}>
            {
                data.map((_, index) => {
                    return <div
                        onClick={() => setActiveIndex(index)}
                        key={index}
                        style={{
                            height:'20px',
                            width:'20px',
                            background: `${activeIndex == index ? '#000' : '#f0f0f0'}`,
                            borderRadius:'50%',
                            cursor:'pointer'
                        }}
                    ></div>
                })
            }
        </div>
    )
}