import React from "react";

/**
 * Pop up modal for forms etc.
 * @param {*} props props
 * @returns a modal
 */
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