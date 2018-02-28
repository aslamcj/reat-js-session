export const UPDATE_USER = 'users:updateUser'
export function updateUser(newUser) {
    console.log("User ACTION triggered", UPDATE_USER);
    return {
        type: UPDATE_USER,
        payLoad : {
            user: newUser
        }
    }
}