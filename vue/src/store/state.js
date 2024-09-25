export default {
    user: {
        data: {},
        token: sessionStorage.getItem("TOKEN"),
    },
    notification: {
        show: false,
        type: null,
        message: null,
    },
    users: {
        loading: false,
        data: [],
        links: [],
        from: null,
        to: null,
        page: 1,
        limit: null,
        total: null,
        last_page: null
    },
    profile: {
        data: {}
    }
};
