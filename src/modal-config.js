


export const modalConfig = (modalDataName, btnType) => {
    console.log(modalDataName, btnType);
    
    const selectModal = document.querySelector(".modal#"+modalDataName)
    
    const modalOverlay = document.getElementById('modal-overlay')
    //console.log(modalOverlay);

    switch (btnType) {
        case "modal":
            //console.log(selectModal);
            selectModal.setAttribute("style", "display: block")
            document.body.addEventListener( "click", (e) => {
                //console.log(e.target.id);
                if(e.target.id == modalDataName){
                    closeModal() 
                }
            })
            // Make body no scrollable
            document.body.setAttribute("style", "overflow: hidden")
        break;
        case "closeModal":
            closeModal()    
        break;
    }

    // Close modal function
    function closeModal(){
        modalOverlay.remove();
        selectModal.setAttribute("style", "display: none")
        document.body.removeAttribute("style")
    }

    
}
