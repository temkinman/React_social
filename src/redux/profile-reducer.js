import Axios from 'axios'

const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
// const SET_USER_ID = 'SET_USER_ID';

let initialState = {
  posts: [
    { id: 1, message: "Hi, what's your name?", countLike: 0 },
    { id: 2, message: "How are you?", countLike: 10 },
    { id: 3, message: "What's your job?", countLike: 7 }
  ],
  newTextPost: '',
  profile: null, 
  // userId: 0
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: state.newTextPost,
        countLike: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newTextPost: ''
      };
    }
    case UPDATE_TEXT_POST: {
      return {
        ...state,
        newTextPost: action.newText
      };
    }

    case SET_USER_PROFILE: {
      return {...state,profile: action.profile}
    }

    // case SET_USER_ID: {
    //   return {...state, userId: action.userId}
    // }
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
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
//export const setUserId = (userId) => ({ type: SET_USER_ID, userId})

export const setProfileThunk = () => {
  return (dispatch)=>{
    let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).
            then(response => {
                this.props.setUserProfile(response.data);
            })
  }
}

export default profileReducer;