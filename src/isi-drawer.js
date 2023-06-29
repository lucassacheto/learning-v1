
const body = document.body

window.onload = () =>  {
        
    const getISIContentPos = document.getElementById("ISI");
    const getISIDrawer = document.getElementById("isiDrawerWrapper");
    //console.log(getISIContentPos.offsetTop);

    document.addEventListener("scroll", () => {

        // (total body height - total view port) - height of the element

        const pageScrollSize = window.pageYOffset // how much the page scroll
        //console.log(pageScrollSize);

        const windowViewSize = window.innerHeight // size of the window view
        //console.log(windowViewSize);

        //const elementFromTop = getISIContentPos.offsetTop // element distance from the parent
        //console.log(getISIContentPos.offsetTop); 

        const elementHeight = getISIContentPos.offsetHeight // height of the element
        //console.log(getISIContentPos.offsetHeight); 
        
        const bodyHeight = body.scrollHeight // body height
        //console.log(body.scrollHeight); 

        //console.log( (body.scrollHeight - windowViewSize) - getISIContentPos.offsetHeight );
        if( pageScrollSize >= ((bodyHeight - windowViewSize) - elementHeight)){
            console.log("got it");
            getISIDrawer.classList.add("hide")
        }else{
            getISIDrawer.classList.remove("hide")
        }

    })

}
