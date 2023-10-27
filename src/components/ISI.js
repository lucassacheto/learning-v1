//import '../isi-drawer'
import {useEffect} from 'react'


const ISI = () => {
   
    useEffect(() => {
        const body = document.body
        //console.log(body);

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

    }, []);
    

    function scrollToISI(){
        console.log("Button will closeISI");
        const checkOverlay = document.getElementById("modal-overlay")
        if(checkOverlay == null){
            //console.log("no");
            document.getElementById('ISI').scrollIntoView({
                behavior: 'smooth'
            })
        }else{
            //console.log("yes");
            document.body.removeAttribute("style")
            document.getElementById('ISI').scrollIntoView({
                behavior: 'smooth'
            })
        }
    }
    
    return (
        <>
        <div className="ISI" id="ISI">
                <h2>IMPORTANT SAFETY INFO</h2>
                <p>When this is visible because we’ve scrolled down far enough, the sticky ISI disappears</p>
        </div>
        <div id="isiDrawerWrapper" className="isiDrawerWrapper">
            <div className="isiDrawer">
                <h2>IMPORTANT SAFETY INFO</h2>
                <p>3 visible lines of copy should always be visible in here. 3 visible lines of copy should always be visible in here</p>
                <button className='btnCloseISI' onClick={scrollToISI} data-type="scrollToISI">+</button>
            </div>
        </div>
        </>
    )
}

export default ISI;