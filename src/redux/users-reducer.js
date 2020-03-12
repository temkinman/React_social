const SHOW_MORE = 'SHOW_MORE';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_NUMBERS_USERS = 'SET_NUMBERS_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
  users: [],
  countTotalUsers: 19,
  currentPage: 2,
  sizePage: 5
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
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, folowed: false }  // тут проверяем совпадают ли id и копируем поверхностно user + меняем значение одного поля юзера
          }
          return u;
        })
      }
    case SET_USERS: {
      // console.log("in Set_Users" + action.users);
      return { ...state, users: [...action.users.items] } //склеиваем 2 массива
    }
    case SET_NUMBERS_USERS: {
      return {
        ...state,
        countTotalUsers: action.totalCount
      }
    }

    case SET_CURRENT_PAGE: {
      console.log("SET_CURRENT_PAGE = " + action.currentPage)
      return {
        ...state,
        currentPage: action.currentPage
      }
    }
    default: return state;
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const show_moreCreator = () => ({ type: SHOW_MORE })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setTotalUsersAC = (totalCount) => ({ type: SET_NUMBERS_USERS, totalCount })
export const setCurrentPageAC = (currentPage) => ( {type: SET_CURRENT_PAGE, currentPage} )
export default userReducer;