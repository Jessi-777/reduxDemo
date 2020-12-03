export const ALL_USERS = 'ALL_USERS'
export const FOLLOW_USER = 'FOLLOW_USERS'
export const UNFOLLOW_USER ='UNFOLLOW_USER'
export const addUsers = (users) => {
    return {
        type: ALL_USERS,
        payload:users
    }
}

export const followUsers = (id) => {
    console.log('here', id)
    return {
        type: FOLLOW_USER,
        payload:id
    }
}
export const unFollowUsers = (id) => {
    console.log('here', id)
    return {
        type: UNFOLLOW_USER,
        payload:id
    }
}