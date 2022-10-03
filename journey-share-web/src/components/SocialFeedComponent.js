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

export const SocialFeed = ({ activeSocialTab, toggleSocialTab, users }) => {

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
                                    <p>Tab 0</p>
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

export const RenderMyProfileTab = ({ users }) => {
    console.log("In RenderMyProfileTab - users", users);
    var thisUserInfo = users.USERS[0].header;
    return (
        // <!-- Header -->
        <header id="profile-section-box" className="jumbotron jumbotron-fluid p-3">
            {/* <!-- Jumbotron - Profile --> */}
            <div id="profile-section" className="container p-2">
                {/* <!-- Profile --> */}
                <div className="row">
                    {/* <!-- My Profile Section --> */}
                    <div className="col-12 col-sm">
                        {/* <!-- Profile Picture --> */}
                        <div className="row">
                            <div className="col-12 col-sm">
                                {/* <!-- Profile Image --> */}
                                <div className="row">
                                    <div className="col-12 col-sm-12 d-flex justify-content-center">
                                        <img id="profile-pic" className="img-fluid" width="300" src={thisUserInfo.profilePic} alt="" />
                                    </div>
                                </div>
                                {/* <!-- Profile Name --> */}
                                <div className="row">
                                    <div className="col-12 col-sm-12 d-flex justify-content-center">
                                        <h3>{thisUserInfo.userName}</h3>
                                    </div>
                                </div>
                                {/* <!-- Profile Info --> */}
                                <div className="row">
                                    <div className="col-12 col-sm-12 d-flex justify-content-center">
                                        <ul id="user-info" className="list-group list-group-flush text-center">
                                            <li className="list-group-item"><strong>{thisUserInfo.country}</strong></li>
                                            <li className="list-group-item">Journey Shared: <strong>{thisUserInfo.journeyShared}</strong></li>
                                            <li className="list-group-item">Most Recent Journey: <strong>{thisUserInfo.mostRecentJourney}</strong></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* <!-- Friends List --> */}
                    {/* <!-- d-flex align-items-center work on this div below --> */}
                    <div id="friends-section-box" className="col-12 col-sm d-flex align-items-center justify-content-center">
                        <div className="row d-flex justify-content-center">
                            <div id="friends-section" className="col-11 col-sm">

                                {/* <!-- Friends List Header --> */}
                                <div className="row">
                                    <div className="col-12 col-sm-12 d-flex justify-content-center">
                                        <h4>Friends</h4>
                                    </div>
                                </div>

                                {/* <!-- Friends--> */}
                                <div className="row">
                                    <div className="col-12 col-sm-12 d-flex justify-content-center mb-3">
                                        {/* <div className="card mr-1">
                                            <img className="img-fluid" src="" width="100" alt="" />
                                            <div className="card-body">
                                                <h6 className="card-text">Saul G.</h6>
                                            </div>
                                        </div>
                                        <div className="card mr-1">
                                            <img className="img-fluid" src="" width="100" alt="" />
                                            <div className="card-body">
                                                <h6 class="card-text">Lalo S.</h6>
                                            </div>
                                        </div>
                                        <div className="card mr-1">
                                            <img className="img-fluid" src="" width="100" alt="" />
                                            <div className="card-body">
                                                <h6 className="card-text">Mike E.</h6>
                                            </div>
                                        </div> */}
                                        <RenderFriendsSection users={users} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </header>
    );
}

const RenderFriendsSection = (props) => {
    var friends = props.users.USERS[0].header.friends;
    var renderFriendCard = friends.map(friend => {
        return (
            <div key={friends.indexOf(friend)} className="card mr-1">
                <img className="img-fluid" src={friend.profilePic} width="100" alt="" />
                <div className="card-body">
                    <h6 className="card-text">{friend.userName}</h6>
                </div>
            </div>
        );
    })
    console.log("friends:", friends);

    return (
        <>
            {renderFriendCard}

        </>
    );
}

export const RenderFeedTab = () => {

}

export default SocialFeed;