export function setUser(state, user) {
    state.user.data = user;
}

export function setToken(state, token) {
    state.user.token = token;

    if (token) {
        sessionStorage.setItem("TOKEN", token);
    } else {
        sessionStorage.removeItem("TOKEN");
    }
}

export function notify(state, { message, type }) {
    state.notification.show = true;
    state.notification.type = type;
    state.notification.message = message;
    setTimeout(() => {
        state.notification.show = false;
    }, 3000);
}

export function setUsers(state, data) {
    
    state.users.data = data.data;
    state.users.links = data.meta?.links;

}

export function setUsersLoading(state, loading) {
    state.users.loading = loading;
}
