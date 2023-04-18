import { useState } from "react"
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse } from "reactstrap"
import { NavLink as RRNavLink } from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = (): void => setIsOpen(!isOpen)

    return (
        <Navbar dark color="primary" expand="md">
            <NavbarBrand tag={RRNavLink} to="/">Home</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink tag={RRNavLink} to="/potions">Potions</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header