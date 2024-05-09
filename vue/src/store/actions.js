import axiosClient from "../includes/axios";

export function getCurrentUser({ commit }, data) {
    return axiosClient.get("/user", data).then(({ data }) => {
        console.log("Store getting user", data.data);
        commit("setUser", data.data);
        return data;
    });
}

export function login({ commit }, data) {
    return axiosClient.post("/login", data).then(({ data }) => {
        commit("setUser", data.user);
        commit("setToken", data.token);
        return data;
    });
}

export function logout({ commit }, data) {
    return axiosClient.post("/logout").then((response) => {
        commit("setToken", null);
        return response;
    });
}

export function getUsers({ commit }, { url = null } = {}) {
    url = url || "/users";

    commit("setUsersLoading", true);
    return axiosClient.get(url).then((res) => {
        console.log("res", res.data);
        commit("setUsersLoading", false);
        commit("setUsers", res.data);
        return;
    });
}

// const store = createStore({
//     state: {
//         user: {
//             data: {},
//             token: sessionStorage.getItem('TOKEN')
//         },
//         notification: {
//             show: false,
//             type: null,
//             message: null
//         }
//     },
//     getters: {},
//     actions: {
//         async register ({ commit }, user) {
//             const { data } = await axiosClient.post('register', user)
//             commit('setUser', data)
//             return data
//         },
//         async login ({ commit }, user) {
//             const { data } = await axiosClient.post('/login', user)
//             commit('setUser', data)
//             return data
//         },
//         async logout({ commit }) {
//             const response = await axiosClient.post('/logout')
//             commit('logout')
//             return response
//         },
//         async getCurrentUser({ commit }, user) {
//             const { data } = await axiosClient.get('/user', user)
//             commit('setUser', data)
//             console.log('User', data);
//             return data
//         }
//     },
//     mutations: {
//         setUser: (state, userData) => {
//             state.user.token = userData.token
//             state.user.data = userData.user
//             sessionStorage.setItem('TOKEN', userData.token)
//         },
//         notify: (state, { message, type }) => {
//             state.notification.show = true
//             state.notification.type = type
//             state.notification.message = message
//             setTimeout(() => {
//                 state.notification.show = false
//             }, 3000)
//         }
//     },
//     modules: {}
// })

// export default store
