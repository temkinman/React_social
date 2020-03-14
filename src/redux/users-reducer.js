const SHOW_MORE = 'SHOW_MORE';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_NUMBERS_USERS = 'SET_NUMBERS_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  users: [],
  countTotalUsers: 19,
  currentPage: 2,
  sizePage: 5,
  isFetching: false
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

    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      }
    }
    default: return state;
  }
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const show_more = () => ({ type: SHOW_MORE })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setTotalUsers = (totalCount) => ({ type: SET_NUMBERS_USERS, totalCount })
export const setCurrentPage = (currentPage) => ( {type: SET_CURRENT_PAGE, currentPage} )
export const setFetching = (isFetching) => ( {type: TOGGLE_IS_FETCHING, isFetching} )
export default userReducer;