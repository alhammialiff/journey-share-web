import React from 'react';
import { SocialPosts } from './SocialPostComponent';
import { Card, CardBody } from 'reactstrap';

// [KIV for Friends Section Component]
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

const RenderProfileStats = ({ users }) => {
    console.log("In RenderProfileStats - user", users);
    var noOfFollowers = users.header.friends.length;
    var noOfFollowing = users.header.friends.length;
    var noOfPosts = users.body.socialPosts.length;

    const profileStats = [noOfPosts, noOfFollowers, noOfFollowing];
    console.log("In RenderProfileStats - profileStats ", profileStats);

    const renderStats = profileStats.map(stat => {
        return (
            <div id="friends-stats" className="col-4 col-sm d-flex justify-content-center">
                <a href=''>{stat}</a>
            </div>
        )
    })

    return (
        <>
            {renderStats}
        </>
    );
}

const RenderHeaderSection = ({ thisUserInfo }) => {

    var thisUserFriends = thisUserInfo.header.friends;
    console.log("thisUserFriends - ", thisUserFriends)

    return (
        <div id="profile-section" className="container p-4 apply-shadow">
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
                                    <img className="img-fluid profile-pic" width="150" src={thisUserInfo.header.profilePic} alt="" />
                                </div>
                            </div>
                            {/* <!-- Profile Name --> */}
                            <div className="row">
                                <div className="col-12 col-sm-12 d-flex justify-content-center">
                                    <h4>{thisUserInfo.header.userName}</h4>
                                </div>
                            </div>
                            {/* <!-- Profile Info --> */}
                            <div className="row">
                                <div className="col-12 col-sm-12 d-flex justify-content-center">
                                    <ul id="user-info" className="list-group list-group-flush text-center">
                                        <li><strong>{thisUserInfo.header.country}</strong></li>
                                        <li>Journey Shared: <strong>{thisUserInfo.header.journeyShared}</strong></li>
                                        <li>Most Recent Journey: <strong>{thisUserInfo.header.mostRecentJourney}</strong></li>
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

                            {/* <!-- Post/Follower/Following Stat --> */}
                            <div className="row">
                                <RenderProfileStats users={thisUserInfo} />
                            </div>

                            {/* <!-- Post/Follower/Following Header--> */}
                            <div id="friends-header" className="row">
                                <div className="col-4 col-sm d-flex justify-content-center">
                                    Posts
                                </div>
                                <div className="col-4 col-sm d-flex justify-content-center">
                                    Followers
                                </div>
                                <div className="col-4 col-sm d-flex justify-content-center">
                                    Following
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
    var thisUserInfo = users.USERS[0];
    console.log("thisUserInfooo - ", thisUserInfo);
    return (
        // <!-- Header -->
        <div id="my-profile-page" className='container'>
            <div className='row'>
                <div className='col-12 col-sm p-0'>
                    <header id="profile-section-box">
                        {/* <!-- Jumbotron - Profile --> */}
                        <RenderHeaderSection thisUserInfo={thisUserInfo} />
                    </header>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-sm p-0'>
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

