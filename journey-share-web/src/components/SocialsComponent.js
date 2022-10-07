// What do I need for socials component?
// 1. Socials Feed Component
// 1. Quick Update Card Component
// 2. Social Post Component
// Get user data -> display user data
// What kind of data?
// User profile data (Profile name, profile picture, )
import React from 'react';
import { Card, CardBody, Navbar, NavLink, NavItem, Nav, CardHeader, TabPane, TabContent, Row, Col } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
// import { toggleSocialTab } from '../redux/ActionCreators';
import { Feed } from './FeedComponent';
import { ConfigureStore } from '../redux/configureStore';
import { RenderMyProfileTab } from './MyProfileComponent';

const store = ConfigureStore();

export const Socials = ({ activeSocialTab, toggleSocialTab, users, windowSize }) => {
    console.log('In Social Feed - windowSize', windowSize);

    const toggleTab = (tabNum) => {
        // Set dispatcher to set toggleTab
        console.log('In Social Feed - activeSocialTab', activeSocialTab.activeTab);
        console.log('In Social Feed - tabPane', tabNum);
        toggleSocialTab(tabNum);
    }

    return (
        <div className='container'>
            {/* Socials feed nav component*/}
            <div className='row'>
                <div className='col-12 col-sm'>
                    {/* <Navbar navbar className="justify-content-center"> */}
                    <Nav tabs className="justify-content-center mt-1">
                        <NavItem>
                            <NavLink className={activeSocialTab.activeTab == '0' ? 'active' : ''} onClick={() => toggleTab('0')}>
                                <span className='fa fa-lg fa-list'></span> Feed
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={activeSocialTab.activeTab == '1' ? 'active' : ''} onClick={() => toggleTab('1')}>
                                <span className='fa fa-lg fa-user'></span> My Profile
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={activeSocialTab.activeTab == '2' ? 'active' : ''} onClick={() => toggleTab('2')}>
                                <span className='fa fa-lg fa-solid fa-bell'></span> Notifications
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={activeSocialTab.activeTab == '3' ? 'active' : ''} onClick={() => toggleTab('3')}>
                                <span className='fa fa-lg fa-search'></span> Search Friends
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeSocialTab.activeTab}>
                        {/* Feeds Tab Content */}
                        <TabPane tabId="0">
                            <Row>
                                <Col>
                                    <Feed users={users} />
                                </Col>
                            </Row>
                        </TabPane>
                        {/* My Profile Tab Content */}
                        <TabPane tabId="1">
                            <Row>
                                <Col>
                                    <RenderMyProfileTab users={users} />
                                </Col>
                            </Row>
                        </TabPane>
                        {/* Notificaton Tab Content */}
                        <TabPane tabId="2">
                            <Row>
                                <Col>
                                    <p>Tab 2</p>
                                </Col>
                            </Row>
                        </TabPane>
                        {/* Search Friends */}
                        <TabPane tabId="3">
                            <Row>
                                <Col>
                                    <p>Tab 2</p>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>

                    {/* </Navbar> */}
                </div>
            </div>
            {/* Social update view component */}
            <div className='row'>
                <div className='col-12 col-sm'>
                </div>
            </div>

        </div>
    );

}

export const RenderFeedTab = () => {

}

export default Socials;