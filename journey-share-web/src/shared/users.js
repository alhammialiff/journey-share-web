export const USERS = [{
    header: {
        userName: 'John Doe',
        profilePic: '/assets/images/jesse-pinkman.png',
        country: 'Japan',
        journeyShared: 4,
        mostRecentJourney: 'K2, Nepal',
        friends: [{
            userName: 'Saul G.',
            profilePic: '/assets/images/john-doe.png',
            followDate: '06/05/2022',
            pageVisited: 0
        }, {
            userName: 'Lalo S.',
            profilePic: '/assets/images/john-doe.png',
            followDate: '06/06/2022',
            pageVisited: 0
        }, {
            userName: 'Kim W.',
            profilePic: '/assets/images/john-doe.png',
            followDate: '06/07/2022',
            pageVisited: 0
        }],
    },
    body: {
        socialPosts: [{
            postHeader: {
                taggedFriends: ["Lalo S.", "Kim W.", "Saul G."],
                location: "Annapurna Base Camp, Nepal",
                dateTime: "7.21am, 22/06/2022"
            },
            postBody: {
                caption: "Conquered! Honoured to join this expedition with these lovely people!",
                image: "/assets/images/annapurna-base-camp.jfif"
            }
        }]
    }
}]