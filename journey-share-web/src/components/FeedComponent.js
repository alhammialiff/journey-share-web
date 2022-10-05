import React from 'react';
import { SocialPosts } from './SocialPostComponent';
import { Card, CardBody } from 'reactstrap';

export const Feed = ({ users }) => {

    // 1. Check friends
    const friendsList = users.USERS[0].header.friends;
    // console.log("In Feed - Check friends ", friendsList);
    // console.log("In Feed - Check user header key ", Object.keys(users.USERS[0].header["userName"]));

    // 2. Consolidate all friends posts into an array



    // Map friends var to find friend's data
    const friendsData = friendsList.map((friend, index) => {

        // Find friend data based on this user's friend list
        var findFriendsData = users.USERS.filter(user => {
            return friend.userName == user.header.userName ? user : "";
        });

        return findFriendsData;
    });
    
    console.log("In feed - friendsData, ", friendsData);

    // Extract friends' social post object and append profilePic key in each social post header
    var friendSocialPosts = friendsData.map((friendData, index) => {

        var friendPosts = friendData[0].body.socialPosts;

        friendPosts.map(post => post.postHeader.profilePic = friendData[0].header.profilePic);
        console.log('In Feed - friendPosts', friendPosts, "index", index);
        return friendPosts;

    });

    // Flatten array from multi-dimensional to single dimension
    // console.log("In Feed - friendSocialPost (before flatten) - ", friendSocialPosts);
    friendSocialPosts = friendSocialPosts.flat();
    // console.log("In Feed - friendSocialPost (after flatten) - ", friendSocialPosts);

    // Retrieve this user's social posts
    var thisUserSocialPosts = users.USERS[0].body.socialPosts;
    
    // Retrieve all posts including this user's
    var allSocialPosts = [...friendSocialPosts,...thisUserSocialPosts] 
    
    // console.log("In Feed - thisUserSocialPosts - ", thisUserSocialPosts);
    // console.log("In Feed - allSocialPosts - ", allSocialPosts);

    // Sort all posts by date
    allSocialPosts = allSocialPosts.sort((post1, post2) => new Date(post1.postHeader.dateTime) - new Date(post2.postHeader.dateTime));
    console.log("sorted allSocialPost - ", allSocialPosts);

    return (
        <>
            <SocialPosts socialPostData={allSocialPosts}/>
        </>
    );
}

export default Feed;

