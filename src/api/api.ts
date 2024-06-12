import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '51250efa-9e41-4cb3-9aed-249ae42e2b4b'},
})

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method, please user profileApi object!')
        return profileApi.getProfile(userId)
    },
}

export const profileApi = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: any) {
        return instance.put(`profile/status/`, {status})
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append('image', photoFile)

        return instance.put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
    },
    saveProfile(profile: any) {
        return instance.put(`profile`, profile)
    },
}

export const authApi = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}