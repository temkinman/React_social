let rerenderEntireTree = () => {
    console.log("State changed!");
} 

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, what's your name?", countLike: 0 },
            { id: 2, message: "How are you?", countLike: 10 },
            { id: 3, message: "What's your job?", countLike: 7 }
        ],
        newTextPost: ''
    },
    dialogsPage: {
        dialogs: [
            { id: 1, userName: "Dima", src: "https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/david.png" },
            { id: 2, userName: "Vasya", src: "https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png" },
            { id: 3, userName: "Petya", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQu2cza9liEWFa0WtQyPhbR1VOsvqGZpfntATqvSXXXo7swxco&s" },
            { id: 4, userName: "Alex", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmVUSXuYTRN02SB4TLt-uQ5Kb-Rj7guE9uo4luZQmLw7wGrU2pZQ&s" },
            { id: 5, userName: "Roma", src: "https://images.vector-images.com/clipart/xl/176/arab5.jpg" },
            { id: 6, userName: "XXX", src: "https://images.vector-images.com/clipart/xl/176/arab5.jpg" }
        ],
        messages: [
            { id: 1, message: "Hi!" },
            { id: 2, message: "Hello my friend!" },
            { id: 3, message: "Dou you speak English?" },
            { id: 4, message: "Yo" },
            { id: 5, message: "Yo" }
        ]
    },
    sideBar: {
        navItems: ["Profile", "Messages", "News", "Music", "Friends", "Settings"]
    }
}

export default state;

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newTextPost,
        countLike: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newTextPost = '';
    rerenderEntireTree(state);
}

export const updateTextPost = (newText) => {
    state.profilePage.newTextPost = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}