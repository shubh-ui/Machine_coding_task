import { useEffect, useRef, useState } from "react"

export const useTimer = (initialTime) => {
    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false)
    const timerRef = useRef()
    const stop = () => {
        clearInterval(timerRef.current)
        timerRef.current = null;
        setIsRunning(false)
    }

    useEffect(() => {
        return () => { clearInterval(timerRef.current) }
    },[])

    const start = () => {
        if(isRunning || time < 1) return;
        setIsRunning(true)
        timerRef.current = setInterval(() =>{
            setTime((prev) => {
                if(prev <= 1) {
                    clearInterval(timerRef.current)
                    setIsRunning(false)
                    return 0;
                }
                return prev -1;
            })
            
        }, 1000)
    }

    return {
        time,
        isRunning,
        start,
        stop
    }
}

//0bcc99