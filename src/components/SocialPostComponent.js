import React from 'react';
import { Button, ButtonGroup, InputGroup, InputGroupText } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';


export const SocialPosts = ({ socialPostData, thisUserProfilePic, thisUserName }) => {

    // [Debug]
    // console.log("Date ",socialPostData.map((socialPost) => socialPost.postHeader.dateTime));
    // console.log("Date Object: ",socialPostData.map((socialPost) => new Date(socialPost.postHeader.dateTime)));

    console.log("Sort social post: ", socialPostData.sort((post1, post2) => new Date(post2.postHeader.dateTime) - new Date(post1.postHeader.dateTime)));

    const RenderSocialPost = socialPostData.map(socialPost => {

        return (
            <div className="row">

                {/* This whole div block can be iterate using map based on no. of posts */}
                <div id="social-post" className="col-12 offset-lg-2 col-lg-8 apply-shadow mt-2">

                    {/* <!-- Social Post Header --> */}
                    <div id="social-post-header" className="row mx-0">

                        {/* <!-- Post Profile Picture --> */}
                        <div className="col-12 col-sm-2">
                            <img className="profile-pic" src={socialPost.postHeader.profilePic} width="100" />
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
                                <div id="social-post-caption" className="col-12 col-sm mx-1">
                                    <p>{socialPost.postBody.caption}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div id="social-post-media" className="col-12 col-sm d-flex justify-content-center">
                                    <img src={socialPost.postBody.image} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-2 mb-2'>
                        <div className='col-12 col-md'>
                            <Form id='comment-section' model='comment'>
                                <div id='comment-control' className='row'>
                                        <ButtonGroup className='col-12 col-md-12 btn-group-sm' role='group'>
                                            <Button type='button' className='col btn-light'> Like </Button>
                                            <Button type='button' className='col btn-light'> Love </Button>
                                            <Button type='button' className='col btn-light'> Laugh </Button>
                                            <Button type='button' className='col btn-light'> Celebrate </Button>
                                            <Button type='button' className='col btn-light'> Support </Button>
                                            <Button type='button' className='col btn-light'> Share </Button>
                                        </ButtonGroup>
                                </div>
                                <div className='row'>
                                    <div id='comment-textbox' className='col-12 col-md'>
                                        <InputGroup>
                                            <Control.text
                                                model=".location"
                                                className="form-control"
                                                id="location"
                                                name="location"
                                                placeholder="Comments..." />
                                        </InputGroup>
                                    </div>
                                </div>
                            </Form>
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