import { MdOutlineClose } from "react-icons/md";

const Modal = ({content, btnType}) => {

    const modalState = {display: "none"}

    return(
        
        <div className="modal" style={modalState} id={content}>
            <div className="modal-wrapper">
                <div className="modal-content">
                    MODAL CONTENT
                </div>
                <button onClick={btnType} id="btnCloseModal"  className="btnCloseModal" data-type="closeModal" data-name={content}>X</button>
            </div>
        </div>
        
    )
}

export default Modal ;