import {useEffect, useState} from 'react'

const Menu = () => {
  
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
        <ul className="menu">
          My links:
          {
            data ? data.map(
              function(data) {
                return (
                  <li id={data.id} key={data.id}>{data.name}</li>
                )
              }    
            ) : ''
          } 
        </ul>
    )
}

export default Menu;