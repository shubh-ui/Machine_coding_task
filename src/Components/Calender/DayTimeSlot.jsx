const DayTimeSlot = () => {
    const slots =  Array.from({length:24} , (_, i) => i);

    const daySlot = {
        width: '100%',
        height: '5rem',
        borderBottom:'1px solid #000',
        display:'flex',
        alignItems:'center',
        
    }

    console.log(slots)
    return (
        <>
        {
            slots.map((slot) => {
                return <div key={slot} style={daySlot}>
                    {slot} : 00
                </div>
            })
        }
        </>
    )
}

export default DayTimeSlot;