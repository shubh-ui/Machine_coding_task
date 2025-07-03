import { useState, useEffect } from "react"
import Light from "./light"

const TraficContainer = () => {
    const [currentLight, setCurrentLight] = useState(0)
    const [timer, setTimer] = useState(0);
    const [auto, setAuto] = useState(false);
    
    // Move config to the top so it's available in useEffect
    const config = {
        light: ['red', 'yellow', 'green'],
        duration: {
            red: 5,
            yellow: 3,
            green: 2
        }
    }

    useEffect(() => {
        let intervalId;
        
        if(auto) {
            intervalId = setInterval(() => {
                setTimer(prevValue => {
                    const newTime = prevValue + 1;
                    const lightTime = config.duration[config.light[currentLight]];
                    
                    if (newTime >= lightTime) {
                        // Reset timer when switching lights
                        setTimer(0);
                        setCurrentLight(prevLight => {
                            const newLight = prevLight + 1;
                            // Fix: should be < 3 since array has 3 elements (indices 0,1,2)
                            if (newLight < 3) {
                                return newLight;
                            } else {
                                return 0;
                            }
                        });
                        return 0; // Reset timer to 0
                    }
                    return newTime; // Return the updated timer value
                });
            }, 1000);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [currentLight, config, auto]); // Add dependencies

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', gap:'20px'}}>
            <div>
                <Light config={config} currentLight={config.light[currentLight]} />
            </div>
            <div>Timer: {timer}</div> {/* Optional: show current timer */}
            <button onClick={() => setAuto(prevValue => !prevValue)}>
                {auto ? 'Stop' : 'Start'}
            </button>
        </div>
    )
}

export default TraficContainer