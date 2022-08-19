import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import EditorView from "../views/EditorView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "editor",
    component: EditorView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
