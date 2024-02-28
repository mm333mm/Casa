import { createRouter, createWebHistory } from "vue-router";
import index from "../views/index-i.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: index
    }
  ]
});

export default router;
