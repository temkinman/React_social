const SHOW_MORE = 'SHOW_MORE';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
  /*  { id: 1, userName: "AMNUSA", src: "https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/david.png", location: { country: 'USA', city: 'Uta' }, status: 'I am looking for a new job', folowed: false },
    { id: 2, userName: "IT-KAMASUTRA", src: "https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png", location: { country: 'Russia', city: 'Moscow' }, status: 'I am a good man', folowed: true },
    { id: 3, userName: "NOMAD", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQu2cza9liEWFa0WtQyPhbR1VOsvqGZpfntATqvSXXXo7swxco&s", location: { country: 'Canada', city: 'Toronto' }, status: 'I am a truck driver', folowed: true },
    { id: 4, userName: "Artem", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmVUSXuYTRN02SB4TLt-uQ5Kb-Rj7guE9uo4luZQmLw7wGrU2pZQ&s", location: { country: 'Belarus', city: 'Zhlobin' }, status: 'I will become a developer', folowed: true },
    { id: 5, userName: "Alex", src: "https://images.vector-images.com/clipart/xl/176/arab5.jpg", location: { country: 'USA', city: 'Washington' }, status: 'I am a sportman', folowed: false },
    { id: 6, userName: "Kolya", src: "https://images.vector-images.com/clipart/xl/176/arab5.jpg", location: { country: 'Belarus', city: 'Gomel' }, status: 'I love to fly', folowed: false }
  */]
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MORE:
      console.log('It is user-reducer SHOW MORE is DONE');
      return {
        ...state
      }
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, folowed: true }  // тут проверяем совпадают ли id и копируем поверхностно + меняем значение одного поля юзера
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map( u => {
          if (u.id === action.userId) {
            return { ...u, folowed: false }  // тут проверяем совпадают ли id и копируем поверхностно user + меняем значение одного поля юзера
          }
          return u;
        })
      }
    case SET_USERS: {
     // console.log("in Set_Users" + action.users);
      return {...state, users: [...action.users.items] } //склеиваем 2 массива
    }
    default: return state;
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const show_moreCreator = () => ({ type: SHOW_MORE })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export default userReducer;