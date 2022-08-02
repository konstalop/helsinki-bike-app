import React from "react";

const Modal = (props) =>  {
    return (props.trigger) ? (
        <div className="modal">
            <div className="modal-inner">           
                {props.children}
            </div>
        </div>
    ) : ""
}

export default Modal