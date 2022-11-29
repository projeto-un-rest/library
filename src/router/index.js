import { createRouter, createWebHashHistory } from "vue-router";
import { store } from "@/store";

import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";

import BookDetails from "@/views/BookDetails.vue";
import MyBooks from "@/views/MyBooks.vue";

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            public: true
        }
    },

    {
        path: "/",
        name: "Home",
        component: Home
    },

    {
        path: "/book/:id",
        name: "BookDetails",
        component: BookDetails
    },

    {
        path: "/my-books",
        name: "MyBooks",
        component: MyBooks
    }
]

const router = createRouter({
    routes: routes,
    history: createWebHashHistory()
});

router.beforeEach((routerTo, routerFrom, next) => {
    
    if(!routerTo.meta.public && !store.state.user.token) {
        next({ name: "Login" });
    }

    next();
});

export default router;