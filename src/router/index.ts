import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: () => import("@/views/JobResults.vue")
  },
  {
    path: "/jobs/results/:jobId",
    name: "Job",
    component: () => import("@/views/JobResults.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
