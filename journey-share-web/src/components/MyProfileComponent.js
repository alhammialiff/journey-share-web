import React from 'react';
import { SocialPosts } from './SocialPostComponent';
import { Card, CardBody } from 'reactstrap';

const RenderFriendsSection = (props) => {
    var friends = props.thisUserFriends;
    var renderFriendCard = friends.map(friend => {
        return (
            <Card key={friends.indexOf(friend)} className="mr">
                {/* <div className='card-header h-100'> */}
                <img id="friends-section-image" className="card-img-top" width="100px" height="100px" src={friend.profilePic} alt="" />
                {/* </div> */}
                <CardBody id="friends-section-card-body">
                    <p className="card-text">{friend.userName}</p>
                </CardBody>
            </Card>
        );
    })

    return (
        <>
            {renderFriendCard}
        </>
    );
}

const RenderHeaderSection = ({ thisUserInfo }) => {

    var thisUserFriends = thisUserInfo.friends;
    console.log("thisUserFriends - ", thisUserFriends)

    return (
        <div id="profile-section" className="container p-4">
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
                                    <img className="img-fluid profile-pic" width="150" src={thisUserInfo.profilePic} alt="" />
                                </div>
                            </div>
                            {/* <!-- Profile Name --> */}
                            <div className="row">
                                <div className="col-12 col-sm-12 d-flex justify-content-center">
                                    <h4>{thisUserInfo.userName}</h4>
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
                                    <h5>Friends</h5>
                                </div>
                            </div>

                            {/* <!-- Friends--> */}
                            <div className="row">
                                <div className="col-12 col-sm-12 d-flex justify-content-center mb-3">
                                    <div className='card-deck'>
                                        <RenderFriendsSection thisUserFriends={thisUserFriends} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const RenderBodySection = ({ users }) => {
    var socialPostData = users.USERS[0].body.socialPosts;

    // Map user profilePic under postHeader object data
    socialPostData.map(post => post.postHeader.profilePic = users.USERS[0].header.profilePic);
    console.log("In RenderBodySection - socialPostData", socialPostData);

    return (


        <SocialPosts socialPostData={socialPostData} />


    );
}

export const RenderMyProfileTab = ({ users }) => {
    console.log("In RenderMyProfileTab - users", users);
    var thisUserInfo = users.USERS[0].header;
    return (
        // <!-- Header -->
        <div id="my-profile-page" className='container'>
            <div className='row'>
                <div className='col-12 col-sm'>
                    <header id="profile-section-box">
                        {/* <!-- Jumbotron - Profile --> */}
                        <RenderHeaderSection thisUserInfo={thisUserInfo} />
                    </header>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-sm'>
                    <main id="main-box">
                        <div className='container p-2'>
                            <RenderBodySection users={users} />
                        </div>
                    </main>
                </div>
            </div>
        </div>

    );
}

