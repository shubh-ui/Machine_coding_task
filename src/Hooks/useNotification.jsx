import React, { useCallback, useState } from "react";
import Notification from "../Components/Notification";

const useNotification = () => {
  const [notifications, setNotifications] = useState([]);


  const handleClose = (id) => {
    setNotifications(preNotifications=> preNotifications.filter(notification => notification.id != id))
  }

  let timer;
  const triggerNotification = useCallback((notificationProps) => {
    clearTimeout(timer)
    const id = Date.now();
    setNotifications(preNotifications => [...preNotifications, {...notificationProps, id}]);
     timer =setTimeout(() => {
        handleClose(id)
    }, notificationProps.duration);
  },[]);

  console.log({notifications})
  const NotificationComponent = notifications.map((notification, index) => (
    <div   style={{
        position: "absolute", // Absolute position for each notification
        top: `${10 + index * 50}px`, // Offset each notification by 50px
        right: "10px", // Right-aligned notifications
      }} key={notification.id}>
      <Notification {...notification} onClose={() => handleClose(notification.id)} />
    </div>
  ));

  return {triggerNotification, NotificationComponent}
};

export default useNotification;
