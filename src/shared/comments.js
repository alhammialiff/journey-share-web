export const getComments = async () => {
    return [{
        author: 'Test author 1',
        rootComment: true,
        commentId: 0,
        parentId: 0,
        replyId: null,
        profilePic: '/assets/images/kim-wexler.jpg',
        commentDate: '2022-06-07 19:31:59',
        reactions: {
            like: 0,
            love: 1,
            laugh: 0,
            celebrate: 0,
            support: 0
        },
        text: "Let's have this planned, you can be our guide :p"
    }, {
        author: 'Test author 2',
        rootComment: true,
        commentId: 1,
        parentId: 0,
        replyId: null,
        profilePic: '/assets/images/lalo-salamanca.jpg',
        commentDate: '2022-06-07 19:31:59',
        reactions: {
            like: 0,
            love: 0,
            laugh: 0,
            celebrate: 1,
            support: 0
        },
        text: "Majestic..."
    }, {
        author: 'Test author 1',
        rootComment: true,
        commentId: 0,
        parentId: 1,
        replyId: null,
        profilePic: '/assets/images/kim-wexler.jpg',
        commentDate: '2022-06-07 19:31:59',
        reactions: {
            like: 0,
            love: 1,
            laugh: 0,
            celebrate: 0,
            support: 0
        },
        text: "Let's have this planned, you can be our guide :p"
    }, {
        author: 'Test author 2',
        rootComment: true,
        commentId: 1,
        parentId: 1,
        replyId: null,
        profilePic: '/assets/images/lalo-salamanca.jpg',
        commentDate: '2022-06-07 19:31:59',
        reactions: {
            like: 0,
            love: 0,
            laugh: 0,
            celebrate: 1,
            support: 0
        },
        text: "Majestic..."
    }, {
        author: 'Test author 1',
        rootComment: true,
        commentId: 0,
        parentId: 2,
        replyId: null,
        profilePic: '/assets/images/kim-wexler.jpg',
        commentDate: '2022-06-07 19:31:59',
        reactions: {
            like: 0,
            love: 1,
            laugh: 0,
            celebrate: 0,
            support: 0
        },
        text: "Let's have this planned, you can be our guide :p"
    }, {
        author: 'Test author 2',
        rootComment: true,
        commentId: 1,
        parentId: 2,
        replyId: null,
        profilePic: '/assets/images/lalo-salamanca.jpg',
        commentDate: '2022-06-07 19:31:59',
        reactions: {
            like: 0,
            love: 0,
            laugh: 0,
            celebrate: 1,
            support: 0
        },
        text: "Majestic..."
    }, {
        author: 'Test author 1',
        rootComment: true,
        commentId: 0,
        parentId: 3,
        replyId: null,
        profilePic: '/assets/images/kim-wexler.jpg',
        commentDate: '2022-06-07 19:31:59',
        reactions: {
            like: 0,
            love: 1,
            laugh: 0,
            celebrate: 0,
            support: 0
        },
        text: "Let's have this planned, you can be our guide :p"
    }, {
        author: 'Test author 2',
        rootComment: true,
        commentId: 1,
        parentId: 3,
        replyId: null,
        profilePic: '/assets/images/lalo-salamanca.jpg',
        commentDate: '2022-06-07 19:31:59',
        reactions: {
            like: 0,
            love: 0,
            laugh: 0,
            celebrate: 1,
            support: 0
        },
        text: "Majestic..."
    }, {
        author: 'Test author 1',
        rootComment: true,
        commentId: 0,
        parentId: 4,
        replyId: null,
        profilePic: '/assets/images/kim-wexler.jpg',
        commentDate: '2022-06-07 19:31:59',
        reactions: {
            like: 0,
            love: 1,
            laugh: 0,
            celebrate: 0,
            support: 0
        },
        text: "Let's have this planned, you can be our guide :p"
    }, {
        author: 'Test author 2',
        rootComment: true,
        commentId: 1,
        parentId: 4,
        replyId: null,
        profilePic: '/assets/images/lalo-salamanca.jpg',
        commentDate: '2022-06-07 19:31:59',
        reactions: {
            like: 0,
            love: 0,
            laugh: 0,
            celebrate: 1,
            support: 0
        },
        text: "Majestic..."
    }, {
        author: 'Test author 1',
        rootComment: true,
        commentId: 0,
        parentId: 5,
        replyId: null,
        profilePic: '/assets/images/kim-wexler.jpg',
        commentDate: '2022-06-07 19:31:59',
        reactions: {
            like: 0,
            love: 1,
            laugh: 0,
            celebrate: 0,
            support: 0
        },
        text: "Let's have this planned, you can be our guide :p"
    }, {
        author: 'Test author 2',
        rootComment: true,
        commentId: 1,
        parentId: 5,
        replyId: null,
        profilePic: '/assets/images/lalo-salamanca.jpg',
        commentDate: '2022-06-07 19:31:59',
        reactions: {
            like: 0,
            love: 0,
            laugh: 0,
            celebrate: 1,
            support: 0
        },
        text: "Majestic..."
    }];
};

var commentIdGen = Math.floor(Math.random() * 100000);
var replyIdGen = Math.floor(Math.random() * 100000);


export const createComments = async (thisUser, text, parentId = null, profilePic) => {

    var comment = {
        author: thisUser,
        rootComment: true,
        commentId: commentIdGen,
        parentId: parentId,
        replyId: replyIdGen,
        profilePic: profilePic,
        commentDate: '2022-06-07 19:31:59',
        reactions: {
            like: 0,
            love: 1,
            laugh: 0,
            celebrate: 0,
            support: 0
        },
        text: text
    }

    console.log("New comment created-", comment);






    return comment;

}
