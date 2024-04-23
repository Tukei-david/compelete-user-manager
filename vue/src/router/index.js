import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import Profile from "../views/Profile.vue";
import Settings from "../views/Settings.vue";
import Users from "../views/Users.vue";
import DefaultLayout from "../components/layouts/DefaultLayout.vue";

const routes = [
    {
        path: "/",
        redirect: "/dashboard",
        name: "Dashboard",
        component: DefaultLayout,
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
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
