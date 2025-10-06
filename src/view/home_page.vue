<template>
  <div id="main">
    <div class="flex flex-col">
      <Header />
      <Hero class="flex-1" />
    </div>
    <main class="flex flex-col sm:px-0 bg-main-bg" id="main-content">
      <ServicesSection id="services" />
      <IndustriesSection class="bg-secondary-bg"/>
      <OurGoals class="bg-primary-bg"/>
      <AboutUsSection />
      <RecommendedArticles />
      <TestimonialSection />
      <HiringSection id="careers" />
      <ContactUsSection class="bg-primary-bg"/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import ServicesSection from "../components/sections/home-page/services";
import IndustriesSection from "../components/sections/home-page/industries";
import OurGoals from "../components/sections/home-page/our-goals.vue"
import AboutUsSection from "../components/sections/home-page/about-us";
import RecommendedArticles from "@/components/sections/recommended-articles/recommended-articles.vue";
import TestimonialSection from "../components/sections/home-page/testimonial";
import HiringSection from "../components/sections/home-page/hiring";
import ContactUsSection from "../components/sections/home-page/contact-us.vue";
export default {
  name: "HomePage",
  components: {
    Header,
    Footer,
    Hero,
    ServicesSection,
    IndustriesSection,
    OurGoals,
    AboutUsSection,
    RecommendedArticles,
    TestimonialSection,
    HiringSection,
    ContactUsSection
  },
  // watch: {
  //   '$route.query'(query) {
  //     if (query.id) {
  //       this.scrollTo(query.id);
  //     } else {
  //       this.scrollTo('main');
  //     }
  //   },
  // },
  // methods: {
  //   scrollTo(name) {
  //     document.getElementById(name).scrollIntoView({
  //       top: 0,
  //       behavior: 'smooth'
  //     });
  //   },
  // },
};
</script>
