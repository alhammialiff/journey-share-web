import React from 'react';

const RenderFriendsSection = (props) => {
    var friends = props.thisUserFriends;
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

const RenderHeaderSection = ({ thisUserInfo }) => {
    
    var thisUserFriends = thisUserInfo.friends;
    console.log("thisUserFriends - ", thisUserFriends)

    return (
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
                                    <RenderFriendsSection thisUserFriends={thisUserFriends} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const RenderBodySection = ({users}) => {
    var socialPostData = users.USERS[0].body.socialPosts;
    var thisUserProfilePic = users.USERS[0].header.profilePic;
    var thisUserName = users.USERS[0].header.userName;
    var friends = users.USERS[0].header.friends;

    console.log("In RenderBodySection - ", users)
    return (

        <div id="social-post" className="container">
            <div className="row">
                <div className="col-12 col-sm">

                    {/* <!-- Social Post Header --> */}
                    <div id="social-post-header" className="row m-2 p-2">

                        {/* <!-- Post Profile Picture --> */}
                        <div className="col-12 col-sm-2 d-flex justify-content-center">
                            <img src={thisUserProfilePic} width="100" />
                        </div>

                        {/* <!-- Post Header --> */}
                        {/* <!-- align-items-center will make both elements center and overlapping of each other */}
                        {/* Use align-self-center --> */}
                        <div className="col-12 col-sm align-self-center">
                            <div className="row">
                                <div className="col-12 col-sm"><strong>{thisUserName}</strong> with Lalo S. and 5 others</div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm">at {socialPostData[0].postHeader.location}</div>
                            </div>
                            <div className="row">
                                <div id="datetime" className="col-12 col-sm">{socialPostData[0].postHeader.dateTime}</div>
                            </div>
                        </div>

                    </div>

                    {/* <!-- Social Post Body --> */}
                    <div id="social-post-body" className="row mt-2 pb-2">
                        <div className="col-12 col-sm">
                            {/* <!-- Post caption --> */}
                            <div className="row">
                                <div id="social-post-caption" className="col-12 col-sm offset-sm-2">
                                    <p>{socialPostData[0].postBody.caption}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm d-flex justify-content-center">
                                    <img src={socialPostData[0].postBody.image} class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>

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
        <div>
            <header id="profile-section-box" className="jumbotron jumbotron-fluid p-2">
                {/* <!-- Jumbotron - Profile --> */}
                <RenderHeaderSection thisUserInfo={thisUserInfo} />
            </header>
            <main id="main-box">
                <RenderBodySection users={users} />
            </main>
        </div>
    );
}

