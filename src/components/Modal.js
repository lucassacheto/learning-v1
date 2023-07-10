import { useState, useEffect } from "react";


export const modalConfig = (modalName, modalAction, modalType, modalState, setModalState) => {
    
    //console.log(modalName, modalAction, modalType);

    // Creates a div before the closing body tag to add overlay
    const modalOverlay = document.getElementById('modal-overlay')
    
    if(!modalOverlay){
        let htmlBody = document.getElementById("root")
        let div = document.createElement("div");
        div.className = "modal-overlay";
        div.style.display = "block";
        div.id = "modal-overlay";
        htmlBody.after(div);
        document.body.setAttribute("style", "overflow: hidden")
        div.onclick = function (){
            div.remove()
            setModalState("close")
            document.getElementById(modalName).style.display = "none"

        }
    }

    switch (modalAction) {
        case "click":
            document.getElementById(modalName).style.display = "block"
            setModalState("open")
            //console.log("inside "+modalState);
            break;
        case "auto":
            console.log("auto");
            break;
        default:
            console.log("no modal");
    }

}

const Modal = ({modalName, modalAction, modalType}) => {
    
    const [modalState, setModalState] = useState("closed")

    function fncsetBtnType(e){
        //console.log(modalName);
        modalConfig(modalName, modalAction, modalType, modalState, setModalState)
    }   

    useEffect(() => {
        //console.log("modalName "+modalName);
        const createModalStructure = document.getElementById(modalName)
        const modalCustomContent = document.getElementById(modalName).innerHTML;
        
        //console.log("createModalStructure "+createModalStructure);
        //console.log("modalCustomContent "+modalCustomContent);
            createModalStructure.innerHTML = `
                <div class="modal-wrapper">
                    <div id="modalContent" class="modal-content">
                    `+modalCustomContent+`
                    </div>
                    <button class="btnCloseModal" data-type="closeModal" data-modalname=`+modalName+`>X</button>
                </div>
            `;
    }, []);

    if(modalState === "open"){

        const btnCloseModal = document.getElementsByClassName("btnCloseModal")
        //console.log(btnCloseModal.length);
        
        for (let i = 0; i < btnCloseModal.length; i++) {
            const elementsBtn = btnCloseModal[i];
            const elementsModal = document.getElementById(elementsBtn.parentElement.parentElement.id)
            //console.log(elementsModal);
            elementsBtn.addEventListener("click", (e) => {
                //console.log(elementsModal);
                elementsModal.style.display = "none"
                if(document.getElementById('modal-overlay')){
                    document.getElementById('modal-overlay').remove()
                }
                document.body.removeAttribute("style")
                
            })
        }
    }

    console.log("modal "+modalState);
    
    return(
        <>
            <button id="btnAction" onClick={fncsetBtnType} className="btn">Open Modal</button>
        </>
    )
}

export default Modal ;