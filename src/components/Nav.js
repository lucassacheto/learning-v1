import {useEffect, useState} from 'react'
import { MdMenu, MdOutlineClose } from "react-icons/md";

const Menu = () => {
  
  function setNavOpen(e){
    console.log(e);
    
    if(navStatus === "open"){
      setNavStatus("close")
    }else{
       setNavStatus("open")
    }
    
  }

  const [navStatus, setNavStatus] = useState("close")

  const [data, setData] = useState(null)
    useEffect( () => {
        fetch('./menu.json').then(
            function(res) {
            return res.json();
            }
        ).then( function(data){
            setData(data)
        }).catch(
            function (err) {
            console.log(err, ' error');
            }
        )
    }, []);

    return (
        <>
        <button id="btnNavControl" onClick={setNavOpen} className=" btnNavControl"> 
          { navStatus == "close" && <MdMenu /> }
          { navStatus == "open" && <MdOutlineClose /> }
        </button>
        
        <ul className={navStatus + " menu"}>
          <li>My links:</li>
          {
            data ? data.map(
              function(data) {
                return (
                  <li id={data.id} key={data.id}><a href={data.url}>{data.name}</a></li>
                )
              }    
            ) : ''
          }
        </ul> 
        </>
    )
}

export default Menu;