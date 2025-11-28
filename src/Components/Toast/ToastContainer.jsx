import { useState } from "react";
import Toast from "./Toast";

const ToastContainer = () => {
    const [toastData, setToastData] = useState([])

    const removeToast = (id) => {
        setToastData(preData => {
            return preData.filter(toast => toast.id !== id)
        });
     }

    const addToast = () => {
        let newId = Date.now();
        const newPost = {
            id: newId,
            title : `Information regarding Toast ${newId}`
        }

        setToastData((preData => {
            return[...preData, newPost]
        }))

        setTimeout(() => {
           removeToast(newId) 
        }, 4000);
        
    }
    return (
        <div style={{position:'relative'}}>
            <div style={{position:'absolute', top:'16px', right:'16px', display:'flex', flexDirection:'column', gap:'10px'}}>
                {toastData.length > 0 && toastData.map((toast) => <Toast toast={toast} />)}
            </div>
            <div style={{display:'flex', height:'96vh',justifyContent:'center', alignItems:'center'}}>
                <button onClick={addToast}>Send Toast</button>
            </div>
        </div>
    )
}
export default ToastContainer;