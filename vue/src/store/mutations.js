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
    
    state.users = {
        ...state.users,
        data: data.data,
        links: data.meta?.links,
        page: data.meta.current_page,
        last_page: data.meta.last_page,
        limit: data.meta.per_page,
        to: data.meta.to,
        total: data.meta.total,
        from: data.meta.from
    }

}

export function setUsersLoading(state, loading) {
    state.users.loading = loading;
}
