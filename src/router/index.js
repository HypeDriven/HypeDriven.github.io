import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../view/home";
import CareerPage from "../view/career";

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
    name: "CareerPage",
    component: CareerPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;