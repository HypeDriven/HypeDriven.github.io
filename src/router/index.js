import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../view/home_page";
import AboutUsPage from "../view/about_us_page";
import Services from "../view/services_page";
import Industries from "../view/industries_page";
import Technologies from "../view/technologies_page";
import Diversity from "../view/diversity_page";
import Team from "../view/team_page.vue";
import Careers from "../view/careers_page.vue";
import Vacancies from "../components/sections/careers-page/careers_vacancies.vue";
import PrivatePolicy from "../components/private-policy/private-policy.vue";
import Applied from "../components/sections/careers-page/thanks-for-application.vue";
import ContactUsPage from "../view/contact_us_page";
import LogInPage from "../view/log_in.vue";
import BlogPage from "../view/blog.vue"
import DetaildPostPage from '../view/post-detailed.vue';
import UnsubscribePage from '../view/unsubscribe.vue'
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
    path: "/services",
    name: "Services",
    component: Services,
    children: [{ path: "", component: Services }],
  },
  {
    path: "/industries",
    name: "Industries",
    component: Industries,
    children: [{ path: "", component: Industries }],
  },
  {
    path: "/technologies",
    name: "Technologies",
    component: Technologies,
    children: [{ path: "", component: Technologies }],
  },
  {
    path: "/diversity",
    name: "Diversity",
    component: Diversity,
    children: [{ path: "", component: Diversity }],
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
    children: [{ path: "", component: Team }],
  },
  {
    path: "/careers",
    name: "Careers",
    component: Careers,
    children: [{ path: "", component: Careers }],
  },
  {
    path: "/careers/vacancies",
    name: "Vacancies",
    component: Vacancies,
    children: [{ path: "", component: Vacancies }],
  },
  {
    path: "/private-policy",
    name: "PrivatePolicy",
    component: PrivatePolicy,
    children: [{ path: "", component: PrivatePolicy }],
  },
  {
    path: "/contact-us/applied",
    name: "Applied",
    component: Applied,
    children: [{ path: "", component: Applied }],
  },
  {
    path: "/contact-us",
    name: "ContactUsPage",
    component: ContactUsPage,
    children: [{ path: "", component: ContactUsPage }],
  },
  {
    path: "/log-in",
    name: "LogInPage",
    component: LogInPage,
    children: [{ path: "", component: LogInPage }],
  },
  {
    path: "/blog",
    name: "BlogPage",
    component: BlogPage,
    children: [{ path: "", component: BlogPage }],
  },
  {
    path: "/detailed-post/:postId",
    name: "DetaildPostPage",
    component: DetaildPostPage,
    // children: [{ path: "", component: BlogPage }],
  },
  {
    path: "/unsubscribe/:subscriptionId", ///:toname
    name: "UnsubscribePage",
    component: UnsubscribePage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
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
