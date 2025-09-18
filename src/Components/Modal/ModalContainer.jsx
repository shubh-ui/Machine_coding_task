import { useState } from "react";
import Modal from "./modal"

const ModalContainer = () => {
    const [isOpen, setIsOpen] = useState(true);
    console.log(isOpen)

    const onClose = () => {
        setIsOpen(false)
    }
    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <Modal 
                content={"Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference here."} 
                isOpen={isOpen}
                onClose={onClose} 
                />
        </div>
    )
}

export default ModalContainer