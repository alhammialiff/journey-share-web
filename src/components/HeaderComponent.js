import React, { Component, useEffect, useState } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export const MyAccountNavLink = ({windowSize}) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {

        function MyAccount() {
            setWindowWidth(window.innerWidth);
            console.log("innerWidth", windowWidth);
        }
        // Listen to resize event for any updates
        window.addEventListener('resize', MyAccount);
        
        // Remove resize eventlistener during component unmount
        return () => window.removeEventListener('resize', MyAccount);
        
    },[windowWidth]);

    return (
        <>
            <span>{windowWidth < 768? <span>My Account</span>:<span className='fa fa-user fa-lg'></span>}</span>
        </>
    );
}

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            windowSize: this.props.windowSize
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        console.log("windowSize", this.props.windowSize.windowSize);
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
                            <NavLink id="my-account-icon" className="nav-link" to="/home" data-toggle="dropdown"
                                data-target="#my-account-dropdown">
                                <MyAccountNavLink windowSize={this.props.windowSize} />
                            </NavLink>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>

        );
    }
}

export default Header;