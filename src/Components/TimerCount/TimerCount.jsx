import { useTimer } from "../../Hooks/useTimer"


export const TimerCount = () => {
    const {time, start, isRunning,stop} = useTimer(15)
    return(
        <div>
            <div>{isRunning ? <div>Time : {time}</div> : <h3>No Time is Running</h3>}</div>
            <div style={{display:'flex', gap:'20px', alignItems:'center', justifyContent:'center'}}>
                <button style={{padding:'14px'}} disabled={isRunning} onClick={start}>Start</button>
                <button style={{padding:'14px'}} disabled={!isRunning} onClick={stop}>Stop</button>
            </div>
        </div>
    )
}