import { ALL_USERS, FOLLOW_USER, UNFOLLOW_USER } from './actions'

const initialState = {
    users: [],
    followUsers:[]

}

export const userReducer = (state = initialState, action) => {
    console.log('I am here')
    switch (action.type) {
        case ALL_USERS:
            return {
                ...state,
                users:action.payload
            }
        case FOLLOW_USER:
            
            let followUser = state.users.find(user => user.id === action.payload)
            let newfollowUser = { ...followUser, following: true }
            console.log(newfollowUser, 'check')
            let filteredUsers = state.users.filter(user => user.id !== action.payload)
            console.log(filteredUsers)
            console.log([...state.followUsers, newfollowUser])
            return {
                ...state,
                followUsers: [...state.followUsers, newfollowUser],
                users:filteredUsers
            }
        case UNFOLLOW_USER:
            
            let unfollowUser = state.followUsers.find(user => user.id === action.payload)
            let newunfollowUser = { ...unfollowUser, following: false }
            console.log(newunfollowUser, 'check')
            let newfilteredUsers = state.followUsers.filter(user => user.id !== action.payload)
            console.log(newfilteredUsers)
            console.log([...state.followUsers, newunfollowUser])
            return {
                ...state,
                followUsers: [...newfilteredUsers],
                users:[...state.users, newunfollowUser]
            }
        default:
            return {
                ...state
            }
    }
}