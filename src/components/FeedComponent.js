import React from 'react';
import { SocialPosts } from './SocialPostComponent';
import { Card, CardBody } from 'reactstrap';

export const Feed = ({ users, postComment, thisUser }) => {

    // Check user's friends
    const friendsList = users.USERS[0].header.friends;

    // Map friends var to find friend's data
    const friendsData = friendsList.map((friend, index) => {

        // Find friend data based on this user's friend list
        var findFriendsData = users.USERS.filter(user => {
            return friend.userName == user.header.profileName ? user : "";
        });

        return findFriendsData;
    });

    // Extract friends social post from friendsData (array) above
    var friendSocialPosts = friendsData.map((friendData, index) => {

        var friendPosts = friendData[0].body.socialPosts;

        return friendPosts;

    });

    console.log("friendSocialPosts", friendSocialPosts);

    // Flatten array from multi-dimensional to single dimension
    friendSocialPosts = friendSocialPosts.flat();

    console.log("friendSocialPosts", friendSocialPosts);

    // Retrieve this user's social posts
    var thisUserSocialPosts = users.USERS[0].body.socialPosts;

    // Retrieve all posts including this user's
    var allSocialPosts = [...friendSocialPosts, ...thisUserSocialPosts]

    // console.log("In Feed - thisUserSocialPosts - ", thisUserSocialPosts);
    console.log("In Feed - allSocialPosts - ", allSocialPosts);

    // Sort all posts by date
    allSocialPosts = allSocialPosts.sort((post1, post2) => new Date(post1.postHeader.dateTime) - new Date(post2.postHeader.dateTime));
    // console.log("sorted allSocialPost - ", allSocialPosts);

    // Map socialPosts with profilePic
    allSocialPosts = allSocialPosts.map((post, idx) => {

        // Filter user from USER that has the same profileName as post author
        var result = users.USERS.filter(item => item.header.profileName == post.postHeader.author);

        console.log("result", result);
        console.log("post", post);

        // Create new object and concat user's post data with filtered user's profilePic above
        // (This is a workaround to avoid mutating redux states on component level) 
        var appendedPost = {...post, profilePic: result[0].header.profilePic}

        return appendedPost;

    })

    console.log("In Feed - allSocialPosts - ", allSocialPosts);

    return (
        <div className='container'>
            <SocialPosts socialPostData={allSocialPosts} postComment={postComment} thisUser={thisUser} />
        </div>
    );

    
}

export default Feed;

