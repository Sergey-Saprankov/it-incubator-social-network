import axios from "axios";

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true
})


export const userApi = {
   getUsers(currentPage: number = 1, pageSize: number = 5) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
          .then(response => response.data)
   },

   followedUser(id: number) {
      return instance.post(`follow/${id}`).then(response => response.data)
   },

   unfollowedUser(id: number) {
      return instance.delete(`follow/${id}`).then(response => response.data)
   }
}

