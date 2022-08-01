<template>
  <div id="main">
    <div class="flex flex-col h-screen">
      <Header />
      <Hero class="flex-1" />
    </div>
    <main class="flex flex-col px-6 sm:px-0 bg-primary-bg" id="main-content">
      <ServicesSection id="services" />
      <IndustriesSection />
      <!-- <ClientsSection /> -->
      <AboutUsSection />
      <TestimonialSection />
      <HiringSection id="careers" />
      <ContactUsSection />
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
// import ClientsSection from "../components/sections/home-page/clients";
import AboutUsSection from "../components/sections/home-page/about-us";
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
    // ClientsSection,
    AboutUsSection,
    TestimonialSection,
    HiringSection,
    ContactUsSection
  },
  watch: {
    '$route.query'(query) {
      if (query.id) {
        this.scrollTo(query.id);
      } else {
        this.scrollTo('main');
      }
    },
  },
  methods: {
    scrollTo(name) {
      document.getElementById(name).scrollIntoView({
        behavior: 'smooth'
      });
    },
  },
};
</script>
