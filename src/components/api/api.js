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
    }
}
