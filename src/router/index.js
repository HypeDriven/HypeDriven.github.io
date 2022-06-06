import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../view/home_page";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    children: [
        { path: '', component: HomePage },
      ],
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;