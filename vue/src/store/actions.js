import axiosClient from "../includes/axios";

export function getCurrentUser({ commit }, data) {
    return axiosClient.get("/user", data).then(({ data }) => {
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

export function register({ commit }, data) {
    return axiosClient.post('register', data).then(({ data }) => {
        commit("setUser", data.user)
        return data
    })
}

export function logout({ commit }, data) {
    return axiosClient.post("/logout").then((response) => {
        commit("setToken", null);
        return response;
    });
}

export function forgotPassword({ commit }, data) {
    return axiosClient.post("/forgot-password", data)
}

export function resetPassword({ commit }, data) {
    return axiosClient.post("/reset-password", data)
}

export function getUsers({ commit }, { url = null } = {}) {
    url = url || "/users";
    commit("setUsersLoading", true);
    return axiosClient.get(url).then((res) => {
        commit("setUsersLoading", false);
        commit("setUsers", res.data);
        return;
    });
}

export function deleteUser({ commit }, id) {
    return axiosClient.delete(`/users/${id}`)
}

export function saveUser({ commit }, user) {
    if (user.id) {
        return axiosClient.put(`/users/${user.id}`, user)
    } else {
        return axiosClient.post('/users', user)
    }
}