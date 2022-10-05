import React from 'react';


export const SocialPosts = ({ socialPostData, thisUserProfilePic, thisUserName }) => {
    
    // [Debug]
    // console.log("Date ",socialPostData.map((socialPost) => socialPost.postHeader.dateTime));
    // console.log("Date Object: ",socialPostData.map((socialPost) => new Date(socialPost.postHeader.dateTime)));
    
    console.log("Sort social post: ", socialPostData.sort((post1,post2) => new Date(post2.postHeader.dateTime) - new Date(post1.postHeader.dateTime)));

    const RenderSocialPost = socialPostData.map(socialPost => {

        return (
            <div className="row">

                {/* This whole div block can be iterate using map based on no. of posts */}
                <div className="col-12 col-sm">

                    {/* <!-- Social Post Header --> */}
                    <div id="social-post-header" className="row m-2 p-2">

                        {/* <!-- Post Profile Picture --> */}
                        <div className="col-12 col-sm-2 d-flex justify-content-center">
                            <img src={socialPost.postHeader.profilePic} width="100" />
                        </div>

                        {/* <!-- Post Header --> */}
                        {/* <!-- align-items-center will make both elements center and overlapping of each other */}
                        {/* Use align-self-center --> */}
                        <div className="col-12 col-sm align-self-center">
                            <div className="row">
                                <div className="col-12 col-sm"><strong>{socialPost.postHeader.author}</strong> with Lalo S. and 5 others</div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm">at {socialPost.postHeader.location}</div>
                            </div>
                            <div className="row">
                                <div id="datetime" className="col-12 col-sm">{socialPost.postHeader.dateTime}</div>
                            </div>
                        </div>

                    </div>

                    {/* <!-- Social Post Body --> */}
                    <div id="social-post-body" className="row mt-2 pb-2">
                        <div className="col-12 col-sm">
                            {/* <!-- Post caption --> */}
                            <div className="row">
                                <div id="social-post-caption" className="col-12 col-sm offset-sm-2">
                                    <p>{socialPost.postBody.caption}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm d-flex justify-content-center">
                                    <img src={socialPost.postBody.image} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    )

    return (
        <>
            {RenderSocialPost}
        </>
    );
}

export default SocialPosts;