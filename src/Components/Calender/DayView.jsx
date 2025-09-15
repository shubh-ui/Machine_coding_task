import DayTimeSlot from "./DayTimeSlot";
import { data } from "./data";
import Events from "./events";

const DayView = () => {

    const line = {
        position:'absolute',
        left:'5rem',
        top:'2rem',
        width:'2px',
        height:'100%',
        borderRight :'1px solid #000'
    }

    return (
        <div style={{position:'relative'}}>
            <div style={line}></div>
            <DayTimeSlot />
            <Events events={data} />
        </div>
    )
}

export default DayView;