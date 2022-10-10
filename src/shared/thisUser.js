export const thisUser = {
    header: {
        userName: 'John Doe',
        profilePic: '/assets/images/jesse-pinkman.png',
        country: 'Japan',
        journeyShared: 4,
        mostRecentJourney: 'K2, Nepal',
        friends: [{
            userName: 'Saul Goodman',
            profilePic: '/assets/images/saul-goodman.jfif',
            followDate: '06/05/2022',
            pageVisited: 0
        }, {
            userName: 'Lalo Salamanca',
            profilePic: '/assets/images/lalo-salamanca.jpg',
            followDate: '06/06/2022',
            pageVisited: 0
        }, {
            userName: 'Kim Wexler',
            profilePic: '/assets/images/kim-wexler.jpg',
            followDate: '06/07/2022',
            pageVisited: 0
        }]
    },
    body: {
        socialPosts: [{
            id: 0,
            postHeader: {
                author: "John Doe",
                taggedFriends: ["Lalo S.", "Kim W.", "Saul G."],
                location: "Annapurna Base Camp, Nepal",
                dateTime: "2022-06-06 07:21:00"
            },
            postBody: {
                caption: "Conquered! Honoured to join this expedition with these lovely people!",
                image: "/assets/images/annapurna-base-camp.jfif",
                reactions: {
                    like: 0,
                    love: 0,
                    laugh: 0,
                    celebrate: 0,
                    support: 0
                },
                comments: [{
                    author:'Test author 1',
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
                },{
                    author:'Test author 2',
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
                } ]
            }
        }, {
            id: 1,
            postHeader: {
                author: "John Doe",
                taggedFriends: [],
                location: "MacRitchie Nature Reserve, Singapore",
                dateTime: "2022-08-07 10:21:00"
            },
            postBody: {
                caption: "Saturday morning routine - will be putting this trek up for sharing for whoever's interested!",
                image: "/assets/images/macritchie-reservoir.jpg",
                reactions: {
                    like: 0,
                    love: 0,
                    laugh: 0,
                    celebrate: 0,
                    support: 0
                },
                comments: [{
                    author:'Test author 1',
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
                },{
                    author:'Test author 2',
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
                } ]
            }
        }]
    }
}