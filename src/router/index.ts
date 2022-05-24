import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/job-results",
    name: "JobResults",
    component: () => import("@/views/JobResults.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
