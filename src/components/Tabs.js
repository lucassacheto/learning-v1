
import { createElement, useState, useEffect } from "react";

const Tabs = ({TabName, TabNum}) => {


    useEffect( () => {
        
        console.log(TabNum);
        const getBody = document.getElementById("tabs-nav")

        for (let i = 0; i < TabNum; i++) {
            let contentObj = {}
            let tabDiv = document.createElement("button");
            tabDiv.className = "tab-"+TabName+i;
            tabDiv.innerHTML = "tab-"+TabName+i
            tabDiv.onclick = () => {
                addClick(TabName+i)
            }
            //getBody.append(tabDiv)
            contentObj[i] = tabDiv
            getBody.append(contentObj[i])
            setTabContent(current => [...current, contentObj[i].className]);

        }

        function addClick(e){
            console.log("addClick "+e);
            const getTabContent =  document.getElementById("tab-"+e);
            const getAllTabContent = document.getElementsByClassName("tab-content")
            
            for (let i = 0; i < getAllTabContent.length; i++) {
                getAllTabContent[i].style.display = "none"
            }
            getTabContent.style.display = "block"

        }
        
        const getContentOutside = document.getElementById("tabs-nav")
        console.log(getContentOutside);

    },[])

    
    
    const [tabContent, setTabContent] = useState([])

    function TabContentCreation({name, className}){
        return createElement("div", {id: name, className: className, style: {display: 'none'}}, "you have to create "+name+".js file inside /tabs folder")
        //const createElementTest = createElement("div",{className: 'btnTabs', name: name, style: '', key: name}, name)
        //console.log(createElementTest);
    }
   
    return (
        <div className="tabsWrapper">
            <div id="tabs-nav" className="tabs-nav">
                
                {console.log("tabContent: "+tabContent)}
                
                {/* <button onClick={showTabContent} data-id={TabName}>{TabName}</button> */}
            </div>
            <>
            { 
                tabContent.map( (i) => createElement(TabContentCreation, {name: i, key: i, className: "tab-content"}) )
            }
            
            </>
        </div>
    )
}

export default Tabs