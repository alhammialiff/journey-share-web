// What do I need for socials component?
// 1. Socials Feed Component
// 1. Quick Update Card Component
// 2. Social Post Component
// Get user data -> display user data
// What kind of data?
// User profile data (Profile name, profile picture, )
import React, { useState, useEffect } from 'react';
import { Card, CardBody, Navbar, NavLink, NavItem, Nav, CardHeader, TabPane, TabContent, Row, Col } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
// import { toggleSocialTab } from '../redux/ActionCreators';
import { Feed } from './FeedComponent';
import { RenderMyProfileTab } from './MyProfileComponent';
import { getComments } from '../shared/comments';


export const Socials = ({ activeSocialTab, toggleSocialTab, users, windowSize, postComment, thisUser }) => {
    console.log('In Social Feed - windowSize', windowSize);
    console.log('In Social Feed - thisUser', thisUser);

    // Set initial backendComments to obtain from localStorage (Essential for persisting states/data)
    // This useState will be passed down to:
    // (1) Feed -> SocialPost -> Comments &... 
    // (2) RenderMyProfileTab -> RenderBodySection -> SocialPosts -> Comments
    const [backendComments, setBackendComments] = useState(JSON.parse(window.localStorage.getItem('BACKEND_COMMENTS')));
    console.log("Initial backend Comment", backendComments);

    const toggleTab = (tabNum) => {
        // Set dispatcher to set toggleTab
        console.log('In Social Feed - activeSocialTab', activeSocialTab);
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
                                    <Feed users={users} postComment={postComment} thisUser={users.USERS[0]} backendComments={backendComments} setBackendComments={setBackendComments} />
                                </Col>
                            </Row>
                        </TabPane>
                        {/* My Profile Tab Content */}
                        <TabPane tabId="1">
                            <Row>
                                <Col>
                                    <RenderMyProfileTab users={users} postComment={postComment} backendComments={backendComments} setBackendComments={setBackendComments} />
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