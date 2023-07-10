
import { useState } from "react";
import "../tabs-config"

const Tabs = ({TabName}) => {

    const [tabContentName, setTabContentName] = useState("")

    function showTabContent(e){
        const getContentTab = document.getElementById(e.target.dataset.id)
        console.log(getContentTab);

        getContentTab.style.display = "block"
    }

    return (
        <div className="tabsWrapper">
            <div className="tabs-nav">
                <ul>
                    <li>
                        <button onClick={showTabContent} data-id={TabName}>{TabName}</button>
                    </li>
                </ul>
            </div>
        </div>       
    )
}

export default Tabs