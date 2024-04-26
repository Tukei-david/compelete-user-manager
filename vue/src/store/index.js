import { createStore } from "vuex"
import axiosClient from "../axios"

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN')
        },
        notification: {
            show: false,
            type: null,
            message: null
        }
    },
    getters: {},
    actions: {
        async register ({ commit }, user) {
            const { data } = await axiosClient.post('register', user)
            commit('setUser', data)
            return data
        },
        async login ({ commit }, user) {
            const { data } = await axiosClient.post('/login', user)
            commit('setUser', data)
            return data
        },
        async logout({ commit }) {
            const response = await axiosClient.post('/logout')
            commit('logout')
            return response
        },
        async getCurrentUser({ commit }, user) {
            const { data } = await axiosClient.get('/user', user)
            commit('setUser', data)
            console.log('User', data);
            return data
        }
    },
    mutations: {
        setUser: (state, userData) => {
            state.user.token = userData.token
            state.user.data = userData.user
            sessionStorage.setItem('TOKEN', userData.token)
        },
        notify: (state, { message, type }) => {
            state.notification.show = true
            state.notification.type = type
            state.notification.message = message
            setTimeout(() => {
                state.notification.show = false
            }, 3000)
        }
    },
    modules: {}
})

export default store