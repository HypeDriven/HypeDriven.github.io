import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../view/home_page";
import AboutUsPage from "../view/about_us_page";
import ContactUsPage from "../view/contact_us_page";

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
    path: "/about-us",
    name: "AboutUsPage",
    component: AboutUsPage,
    children: [
        { path: '', component: AboutUsPage },
      ],
  },
  {
    path: "/contact-us",
    name: "ContactUsPage",
    component: ContactUsPage,
    children: [
        { path: '', component: ContactUsPage },
      ],
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;