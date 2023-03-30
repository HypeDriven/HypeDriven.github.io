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
import VacancyDetails from "../components/sections/careers-page/careers_vacancy_details.vue";
import PrivatePolicy from "../components/private-policy/private-policy.vue";
import Applied from "../components/sections/careers-page/thanks-for-application.vue";
import ContactUsPage from "../view/contact_us_page";
import NotFound from "../view/404";
// import vacancies from "@/components/sections/careers-page/vacancy-storage";

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
    path: "/careers/vacancies/details/:id",
    name: "VacancyDetails",
    component: VacancyDetails,
    children: [{ path: "", component: VacancyDetails }],
    // props: (route) => ({ vacancy: vacancies[route.params.id] })
  },
  {
    path: "/private-policy",
    alias: ["/careers/vacancies/details/:id/private-policy", "/contact-us/private-policy"],
    // props: (route) => ({agree: route.agree}),
    name: "PrivatePolicy",
    component: PrivatePolicy,
    children: [{ path: "", component: PrivatePolicy }],
  },
  {
    path: "/careers/vacancies/applied",
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
