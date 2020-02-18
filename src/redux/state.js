let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, what's your name?", countLike: 0 },
            { id: 2, message: "How are you?", countLike: 10 },
            { id: 3, message: "What's your job?", countLike: 7 }
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, userName: "Dima" },
            { id: 2, userName: "Vasya" },
            { id: 3, userName: "Petya" },
            { id: 4, userName: "Alex" },
            { id: 5, userName: "Roma" },
        ],
        messages: [
            { id: 1, message: "Hi!" },
            { id: 2, message: "Hello my friend!" },
            { id: 3, message: "Dou you speak English?" },
            { id: 4, message: "Yo" },
            { id: 5, message: "Yo" },
        ]
    }
}

export default state;