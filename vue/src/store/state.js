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
    }
};
