import {useState} from 'react'
import Nav from './Nav'


const Header = () => {
  
    const [navBarMode, setNavBarMode] = useState("")

    return (
      <header className="header">
        
        <h1>HEADER</h1>
        <Nav />

      </header>
    )
}

export default Header;
