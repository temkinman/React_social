import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7f332eb3-f02c-470f-9798-2fd2a0f07f96"
    }
});

export const usersAPI = {
    getUsers(currentPage) {
        return instance.get(`users?page=${currentPage}`)
            .then(response => {
                return response.data;
            })
    },
    followUser(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    }

    // return usersAPI.loginUser().then(
    //     data => {
    //         if(data.resultCode === 0) {
    //             return instance.get(`profile/${data.data.id}`).
    //             // instance.get(`profile/2`).
    //             then(response => {
    //                 return response.data;
    //             })
    //         }
    //     }
    // )
}

export const authApi = {
    me() {
        return instance.get(`auth/me`)
    }
}

