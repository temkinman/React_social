const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';

let initialState = {
    posts: [
        { id: 1, message: "Hi, what's your name?", countLike: 0 },
        { id: 2, message: "How are you?", countLike: 10 },
        { id: 3, message: "What's your job?", countLike: 7 }
    ],
    newTextPost: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newTextPost,
                countLike: 0
            }
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newTextPost = '';
            return stateCopy;
        }
        case UPDATE_TEXT_POST: {
            let stateCopy = {...state};
            stateCopy.newTextPost = action.newText;
            return stateCopy;
        }
        default: return state;
    }

    return state;
}

export const addPostCreator = () => ({ type: ADD_POST })
export const updatePostCreator = (text) => {
    return {
        type: UPDATE_TEXT_POST,
        newText: text
    }
}

export default profileReducer;