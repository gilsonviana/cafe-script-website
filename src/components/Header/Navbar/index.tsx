import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './style.css'

interface Props {}

const NavbarComponent: React.FunctionComponent<Props> = () => {
    return (
        <Navbar>
            <Navbar.Brand>
                <img src={require('../../../assets/logo.svg')} alt="logotipo"/>
            </Navbar.Brand>
            <Nav className="theme-navbar m-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <div></div>
        </Navbar>
    )
}

export default NavbarComponent