import { createRouter, createWebHashHistory } from "vue-router";

import Login from "@/views/Login.vue";

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login
    }
]

const router = createRouter({
    routes: routes,
    history: createWebHashHistory()
});

export default router;