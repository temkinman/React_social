const SHOW_MORE = 'SHOW_MORE';
const FOLLOW = 'FOLLOW';

let initialState = {
  users: [
    { id: 1, userName: "AMNUSA", src: "https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/david.png", location: { country: 'USA', city: 'Uta' }, status: 'I am looking gor a new job' },
    { id: 2, userName: "IT-KAMASUTRA", src: "https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png", location: { country: 'Russia', city: 'Moscow' }, status: 'I am a good man' },
    { id: 3, userName: "NOMAD", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQu2cza9liEWFa0WtQyPhbR1VOsvqGZpfntATqvSXXXo7swxco&s", location: { country: 'Canada', city: 'Toronto' }, status: 'I am a truck driver' },
    { id: 4, userName: "Artem", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmVUSXuYTRN02SB4TLt-uQ5Kb-Rj7guE9uo4luZQmLw7wGrU2pZQ&s", location: { country: 'Belarus', city: 'Zhlobin' }, status: 'I will become a developer' },
    { id: 5, userName: "Alex", src: "https://images.vector-images.com/clipart/xl/176/arab5.jpg", location: { country: 'USA', city: 'Washington' }, status: 'I am a sportman' },
    { id: 6, userName: "Kolya", src: "https://images.vector-images.com/clipart/xl/176/arab5.jpg", location: { country: 'Belarus', city: 'Gomel' }, status: 'I love to fly' }
  ],
  testUser: { id: 999, nameTest: 'First' },
  userFollow: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MORE:
      console.log('It is user-reducer SHOW MORE is DONE');
      return {
        ...state
      }
    case FOLLOW:
      console.log(action.userFollow + ' FOLLOW');
      return {
        ...state
      }
    default: return state;
  }
}

export const followUserCreator = (userName) => ({
  type: FOLLOW,
  userFollow: userName
})
export const show_moreCreator = () => ({ type: SHOW_MORE })
export default userReducer;