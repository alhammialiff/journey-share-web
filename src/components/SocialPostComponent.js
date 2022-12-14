import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup, InputGroup, InputGroupText } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { appendProfilePic } from '../redux/ActionCreators';
import { createComments } from '../shared/comments';
import { getComments } from '../shared/comments';

const mapDispatchToProps = {
    appendProfilePic
};

export const SocialPosts = ({ socialPostData, profilePic, postComment, thisUser, dispatch, backendComments, setBackendComments }) => {

    // Create a copy of socialPosts because socialPostData is read-only (will throw error)
    var socialPosts = [...socialPostData];
    console.log("socialPosts", socialPosts);
    console.log("thisUser", thisUser);
    socialPosts.sort((post1, post2) => new Date(post2.postHeader.dateTime) - new Date(post1.postHeader.dateTime))

    // const handleSubmitComment = (values) => {
    //     console.log("In handleSubmitComment - values,", values);
    //     console.log("In handleSubmitComment - thisUser,", thisUser);
    //     const authorName = thisUser[0].header.profileName;
    //     const authorProfilePic = thisUser[0].header.profilePic;

    //     // this.props.appendProfilePic('/assets/images/lalo-salamanca.jpg');

    //     // const authorProfilePic = thisUser[0].header.profilePic;
    //     // const authorProfilePic = '/assets/images/lalo-salamanca.jpg';
    //     const dateTime = new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
    //     const dummyReaction = {
    //         like: 0,
    //         love: 1,
    //         laugh: 0,
    //         celebrate: 0,
    //         support: 0
    //     }

    //     postComment(authorName, authorProfilePic, dateTime, dummyReaction, values.comment);

    // }

    const handleSubmitComment = (values) => {

    }

    const RenderSocialPost = socialPosts.map(socialPost => {

        return (
            <div key={socialPost.postId} className="row">

                {/* This whole div block can be iterate using map based on no. of posts */}
                <div id="social-post" className="col-12 offset-lg-2 col-lg-8 apply-shadow mt-2">

                    {/* <!-- Social Post Header --> */}
                    <div id="social-post-header" className="row mx-0">

                        {/* <!-- Post Profile Picture --> */}
                        <div className="col-12 col-sm-2">
                            <img className="profile-pic" src={socialPost.profilePic} width="100" />
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
                            <Form id='comment-section' model='comment' onSubmit={(values) => handleSubmitComment(values)}>
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
                                {/* <div className='row'>
                                    <div id='comment-textbox' className='col-12 col-md'>
                                        <InputGroup>
                                            <Control.text
                                                model=".comment"
                                                className="form-control col-10"
                                                id="comment"
                                                name="comment"
                                                placeholder="Comments..." />
                                            <Button type='submit' className='col-2 btn-sm btn-light'> Post </Button>
                                        </InputGroup>
                                    </div>
                                </div> */}
                            </Form>

                            {/* Comment Component */}
                            <CommentSection parentId={socialPost.postId} thisUser={thisUser} backendComments={backendComments} setBackendComments={setBackendComments} />
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

export const CommentSection = ({ parentId, thisUser, backendComments, setBackendComments }) => {
    const [text, setText] = useState("");
    var filteredComments = [];
    var displayComments;
    console.log("In Comments - backendComments", backendComments);

    // (Replaced with mounting data directly into useState(here))
    // useEffect(() => {
    //     console.log("Initial backendComment:", backendComments);
    //     if (backendComments == "" || backendComments == undefined ) {
    //         getComments().then((data) => {
    //             setBackendComments(data);
    //         });
    //     } else {
    //         const data = window.localStorage.getItem('BACKEND_COMMENTS');
    //         setBackendComments(JSON.parse(data));
    //     }
    // }, []);

    if (backendComments != undefined) {

        useEffect(() => {
            console.log("Activated");
            console.log(backendComments);

            // Store backendComments in local storage for persistence
            window.localStorage.setItem('BACKEND_COMMENTS', JSON.stringify(backendComments));

            // 
            filteredComments = backendComments.filter((comment) => parentId == comment.parentId);
            console.log(filteredComments);
        }, [backendComments]);

    }

    const getBackendComments = async () => {
        if (backendComments != undefined) {
            console.log("backendComments -- ", backendComments);
            return backendComments;

        }
    }

    const updateBackendComments = async (comment) => {
        if (backendComments != undefined) {
            let data = [...backendComments, comment];
            setBackendComments(data);
            window.localStorage.setItem('BACKEND_COMMENTS', JSON.stringify(data));
            return backendComments;
        }
    }

    const addComment = (text, parentId) => {
        console.log(thisUser);
        const author = thisUser.header.profileName;

        createComments(author, text, parentId, thisUser.header.profilePic)
            .then((comment) => updateBackendComments(comment))
            .then(() => getBackendComments());
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(text, parentId);
        addComment(text, parentId);
    }

    // Filter comments with same ID as post and display onto view

    if (backendComments != undefined) {

        displayComments = backendComments
            .filter((comment) => {
                console.log("parentId:", parentId);
                console.log("comment.parentId:", comment.parentId);
                return parentId == comment.parentId ? comment : "";
            })
            .map((filteredComment) => {
                return (
                    <div key={filteredComment.commentId} id="social-post-comment" className='row mx-0 mb-1 p-1'>
                        <div className="col-4 col-sm-2">
                            <img className="profile-pic" src={filteredComment.profilePic} width="80" />
                        </div>
                        <div className="col col-sm">
                            <div className='row'>
                                <div className='col col-sm'>
                                    <strong>{filteredComment.author}</strong>  {filteredComment.commentDate}
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-sm'>
                                    {filteredComment.text}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });


        console.log("displayComments, ", displayComments);

    }

    return (
        <>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className='row'>
                    <div id='comment-textbox' className='col-12 col-md mb-2'>
                        <InputGroup>
                            <textarea
                                className="form-control col-10"
                                id="comment"
                                value={text}
                                name="comment"
                                placeholder="Comments..."
                                onChange={(e) => setText(e.target.value)} />
                            <Button type='submit' className='col-2 btn-sm btn-light'> Post </Button>
                        </InputGroup>
                    </div>
                </div>
            </form>
            {displayComments != undefined && (displayComments)}

        </>

    )
}

export default connect(mapDispatchToProps)(SocialPosts);