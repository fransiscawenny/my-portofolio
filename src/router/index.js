import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import ProjectDetail from "../views/ProjectDetail.vue";
import { getLenis } from "../composables/useLenis.js";

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
    scrollBehavior(to, from, savedPosition) {
        const lenis = getLenis() || window.lenis;

        if (savedPosition) {
            // If there's a saved browser history position (like clicking back)
            if (lenis) {
                lenis.scrollTo(savedPosition.top, { immediate: true });
                return false;
            }
            return savedPosition;
        }

        if (to.hash) {
            // If navigating to an anchor hash on the page
            if (lenis) {
                lenis.scrollTo(to.hash, { immediate: true });
                return false;
            }
            return { el: to.hash, behavior: "smooth" };
        }

        // Default behavior: Scroll to top on new page / detail view
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
            return false; // Tells vue-router not to use native jump
        }

        return { top: 0, behavior: "smooth" };
    },
});

export default router;
