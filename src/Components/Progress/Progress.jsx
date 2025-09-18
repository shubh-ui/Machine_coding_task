import { useState, useEffect } from "react";

const Progress = ({progress}) => {
    const [animatedProgressValue, setAnimatedProgressValue] = useState(0);

    useEffect(() => {
        setTimeout(() => setAnimatedProgressValue(progress), 100);
    },[])

    const progressValue = animatedProgressValue - 100;



    console.log(progressValue)
    const ProgressContainer = {
        width:'100%',
        border:'1px solid #000',
        height:'20px',
        borderRadius: '10px',
        overflow:'hidden',
        margin:'10px 0'
    }

    const progressStyle = {
        background:'green',
        // width :`${progress}%`,
        transform: `translateX(${progressValue}%)`,
        height:'20px',
        color:'#fff',
        textAlign:'right',
        transition: '1s ease-in'
    }

    return (
        <div style={ProgressContainer}>
            <div style={progressStyle}
                 role="progressbar"
                 aria-valuemin={0}
                 aria-valuemax={100}
                 aria-valuenow={progress}>{progress}%</div>
        </div>
    )
}

export default Progress