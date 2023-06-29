import '../isi-drawer'

const ISI = ({btnType}) => {
    return (
        <>
        <div className="ISI" id="ISI">
                <h2>IMPORTANT SAFETY INFO</h2>
                <p>When this is visible because we’ve scrolled down far enough, the sticky ISI disappears</p>
        </div>
        <div id="isiDrawerWrapper" className="isiDrawerWrapper">
            <div className="isiDrawer">
                <h2>IMPORTANT SAFETY INFO</h2>
                <p>3 visible lines of copy should always be visible in here</p>
                <button className='btnCloseISI' onClick={btnType} data-type="scrollToISI">+</button>
            </div>
        </div>
        </>
    )
}

export default ISI;