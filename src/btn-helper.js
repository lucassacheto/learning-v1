import {modalConfig} from  './modal-config'

export const btnType = (e) => {
    
    console.log(e.target.dataset);

    const btnType = e.target.dataset.type;
    const modalDataName = e.target.dataset.name;
    switch (btnType) {
        case "modal":
            //console.log("Open the modal");

            // Creates a div before the closing body tag to add overlay
            let htmlBody = document.getElementById("root")
            let div = document.createElement("div");
            div.className = "modal-overlay";
            div.id = "modal-overlay";
            htmlBody.after(div);

            // Open the modal related
            modalConfig(modalDataName, btnType)

            break;
        case "closeModal":
            modalConfig(modalDataName, btnType)
            break;
        case "scrollToISI":
            console.log("Button will closeISI");
            const checkOverlay = document.getElementById("modal-overlay")
            if(checkOverlay == null){
                document.getElementById('ISI').scrollIntoView({
                    behavior: 'smooth'
                })
            }else{
                const checkModal = document.querySelectorAll(".modal")
                modalConfig(checkModal[0].id, "closeModal")
                document.getElementById('ISI').scrollIntoView({
                    behavior: 'smooth'
                })
            }
            
            break;
    }

}