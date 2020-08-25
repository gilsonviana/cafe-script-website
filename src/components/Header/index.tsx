import React from 'react'
import Container from 'react-bootstrap/Container'

import NavbarComponent from './Navbar'

interface Props {}

const Header: React.FunctionComponent<Props> = () => {
    return (
        <header className="header">
            <Container>
                <NavbarComponent />
            </Container>
        </header>
    )
}

export default Header