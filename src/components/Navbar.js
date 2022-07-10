import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Button from './Button'
/*
* Need buttons
* clicks
* handle clicks
* 
*
*/


function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect( () => {
        showButton();
    }, [])
 
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Space Invaders <i className="fab fa-typo3"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/high-scores' className='nav-links' onClick={closeMobileMenu}>
                            High Scores
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>START GAME</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar