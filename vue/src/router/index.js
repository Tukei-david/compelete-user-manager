import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import Profile from "../views/Profile.vue";
import Settings from "../views/Settings.vue";
import Users from "../views/Users.vue";
import DefaultLayout from "../components/layouts/DefaultLayout.vue";
import store from "../store";

const routes = [
    {
        path: "/",
        redirect: "/dashboard",
        name: "Dashboard",
        component: DefaultLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: "/dashboard",
                name: "Dashboard",
                component: Dashboard,
            },
            {
                path: "/profile",
                name: "Profile",
                component: Profile,
            },
            {
                path: "/settings",
                name: "Settings",
                component: Settings,
            },
            {
                path: "/users",
                name: "Users",
                component: Users,
            },
        ],
    },
    {
        path: "/login",
        name: "Login",
        meta: { isGuest: true },
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        meta: { isGuest: true },
        component: Register,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


router.beforeEach((to, from, next) => {
    if ( to.meta.requiresAuth && !store.state.user.token ) {
        next({ name: 'Login' })
    } else if ( store.state.user.token && to.meta.isGuest ) {
        next({ name: 'Dashboard' })
    } else {
        next()
    }
})

export default router;
