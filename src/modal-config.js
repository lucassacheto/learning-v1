


export const modalConfig = (modalDataName, btnType) => {
    //console.log(modalDataName);
    
    const selectModal = document.querySelector(".modal#"+modalDataName)
    //console.log(selectModal);
    selectModal.setAttribute("style", "display: block")

    const modalOverlay = document.getElementById('modal-overlay')
    //console.log(modalOverlay);

    if(btnType == "closeModal") { 
        closeModal()
    } else{
        
        modalOverlay.addEventListener("click", () => {
            closeModal()
        })
        
        // Make body no scrollable
        document.body.setAttribute("style", "overflow: hidden")
    }

    // Close modal function
    function closeModal(){
        modalOverlay.remove();
        selectModal.setAttribute("style", "display: none")
        document.body.removeAttribute("style")
    }

    
}