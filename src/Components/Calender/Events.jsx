const Events = ({ events }) => {
  return (
    <>
      {
        events.map((e, index) => {
          const startHour = e.startTime.split(':')[0];
          const startMinute = e.startTime.split(':')[1];
          const endHour = e.endTime.split(':')[0];
          const endMinute = e.endTime.split(':')[1];
          const top = startHour * 5 + (startMinute/60) * 5;
          const height = (endHour - startHour) * 5 + ((endMinute - startMinute)/60) * 5;

          console.log(top, height)

          const eventStyle = {
            position:'absolute',
            top:`${top}rem`,
            height:`${height}rem`,
            width:`calc(100% - 5rem)`,
            left:'6rem',
            background: 'darkturquoise'
          }

          return (
            <div  key={e.id || index} style={eventStyle}>
              <h3>{e.title}</h3>
            </div>
          );
        })
      }
    </>
  );
}

export default Events;
