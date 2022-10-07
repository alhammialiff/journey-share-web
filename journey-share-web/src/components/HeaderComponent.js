import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }


    render() {

        return (
            <Navbar dark expand="md" className="apply-shadow">
                <div className="container">

                    <NavbarToggler onClick={this.toggleNav} />

                    <NavbarBrand className="mr-auto" href="/">
                        JourneyShare
                    </NavbarBrand>

                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="ml-auto mr-3">
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/socials">
                                    Socials
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>

        );
    }
}

export default Header;