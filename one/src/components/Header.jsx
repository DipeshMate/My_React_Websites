import React from 'react'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

const Header = () => {
  return (
    <nav>
        {/*left side*/}
        <h1>Dipesh Dev</h1>
        {/*Right side*/}
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/contact"}>Contact</Link>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <Link to={"/services"}>Services</Link>
            
        </main>
    </nav>
  )
}

export default Header