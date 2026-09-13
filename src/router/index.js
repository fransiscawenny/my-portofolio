import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import ProjectDetail from "../views/ProjectDetail.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/project/:slug",
        name: "project",
        component: ProjectDetail,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {
            top: 0,
            behavior: "instant",
        };
    },
});

export default router;
