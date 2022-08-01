import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../view/home_page";
import AboutUsPage from "../view/about_us_page";
import ContactUsPage from "../view/contact_us_page";
import NotFound from "../view/404";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    children: [{ path: "", component: HomePage }],
  },
  {
    path: "/about-us",
    name: "AboutUsPage",
    component: AboutUsPage,
    children: [{ path: "", component: AboutUsPage }],
  },
  {
    path: "/contact-us",
    name: "ContactUsPage",
    component: ContactUsPage,
    children: [{ path: "", component: ContactUsPage }],
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   } else if (to.hash) {
  //     console.log(to.hash);
  //     return {
  //       el: to.hash,
  //       behavior: "smooth",
  //     };
  //     // const options = {
  //     //   top: document.querySelector(to.hash).offsetTop,
  //     //   behavior: "smooth",
  //     // };
  //     // window.scrollTo(options);
  //   }
  //   return { x: 0, y: 0 };
  // },
});

export default router;
