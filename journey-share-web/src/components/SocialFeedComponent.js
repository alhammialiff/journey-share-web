// What do I need for socials component?
// 1. Socials Feed Component
// 1. Quick Update Card Component
// 2. Social Post Component
// Get user data -> display user data
// What kind of data?
// User profile data (Profile name, profile picture, )
import React from 'react';
import { Card, CardBody, Navbar, NavItem, Nav, CardHeader } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export const SocialFeed = () => {

    return (
        <div className='container'>
            {/* Socials feed nav component*/}
            <div className='row'>
                <div className='col-12 col-sm'>
                    <Navbar navbar className="justify-content-center">
                        <Nav>
                            <NavItem>
                                <NavLink className="nav-link" to="socials/friends">
                                    <span className='fa fa-lg fa-user'></span> Friends
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="socials/notifications">
                                    <span className='fa fa-lg fa-solid fa-bell'></span> Notifications
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="socials/friends">
                                    <span className='fa fa-lg fa-search'></span> Search Friends
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </Navbar>
                </div>
            </div>
            {/* Social update view component */}
            <div className='row'>
                <div className='col-12 col-sm'>
                    {/* Social Post Component */}
                    <Card>
                        <CardHeader>
                            Card Header
                        </CardHeader>
                        <CardBody>
                            Card Content
                        </CardBody>
                    </Card>
                </div>
            </div>

        </div>
    );

}

export default SocialFeed;