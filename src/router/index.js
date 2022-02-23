import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../view/home";
import CareersPage from "../view/careers";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    children: [
        { path: '', component: HomePage },
      ],
  },
  {
    path: "/careers",
    name: "CareersPage",
    component: CareersPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;