import { useRef } from "react";
import { useOutSideClick } from "../../Hooks/useOutsideClick";

const Modal = ({content, isOpen, onClose}) => {

    const modalRef = useRef();

    useOutSideClick(modalRef, onClose);

    const modalContainerStyle = {
        maxWidth: "500px",
        padding:"1rem",
        border:"1px solid #000",
        position:"fixed",
        top:"50%",
        left:"50%",
        transform:"translate(-50%, -50%)",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"

    }
    if(!isOpen) {
        return;
    }
    return (
        <div ref={modalRef} style={modalContainerStyle}>
            <p>{content}</p>
            <button onClick={() => onClose()}>Close</button>
        </div>
    )
}

export default Modal;