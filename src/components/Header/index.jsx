import React from 'react'
import {Link} from 'react-router-dom'

import {ReactComponent as Logo} from '../../assets/crown.svg.svg'

import './style.scss';

export default function Header() {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/shop">CONTACT</Link>
                <Link className="option" to="/signin">SIGN IN</Link>
            </div>

        </div>
    )
}
