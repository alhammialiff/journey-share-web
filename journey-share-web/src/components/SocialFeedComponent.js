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
import { ConfigureStore } from '../redux/configureStore';

const store = ConfigureStore();

export const SocialFeed = ({ activeSocialTab, toggleSocialTab }) => {

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
                    <Nav tabs className="justify-content-center">
                        <NavItem>
                            <NavLink className={activeSocialTab.activeTab == '0'? 'active':''} onClick={() => toggleTab('0')}>
                                <span className='fa fa-lg fa-user'></span> Friends
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={activeSocialTab.activeTab == '1'? 'active':''} onClick={() => toggleTab('1')}>
                                <span className='fa fa-lg fa-solid fa-bell'></span> Notifications
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={activeSocialTab.activeTab == '2'? 'active':''} onClick={() => toggleTab('2')}>
                                <span className='fa fa-lg fa-search'></span> Search Friends
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeSocialTab.activeTab}>
                        <TabPane tabId="0">
                            <Row>
                                <Col>
                                    <p>Tab 0</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="1">
                            <Row>
                                <Col>
                                    <p>Tab 1</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
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