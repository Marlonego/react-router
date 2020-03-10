import React from 'react'
import {Link} from 'react-router-dom'
 
export default function Nav() {
    return (
       
            <header>
          <h1>About me </h1>
          <ul style={{display:'flex', justifyContent:'space-around'}}>
          <li> <Link to="/">Me</Link></li>
          <li><Link to="/hobbies">Hobbies</Link></li>
          <li><Link to="/contact"> Contact</Link></li>

          </ul>


          </header>        
        
    )
}
