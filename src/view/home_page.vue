<template>
  <div>
    <div class="flex flex-col h-screen">
      <Header />
      <Hero class="flex-1" />
    </div>
    <main class="flex flex-col px-6 sm:px-0 bg-primary-bg">
      <ServicesSection />
      <IndustriesSection />
      <ClientsSection/>
      <AboutUsSection/>
      <TestimonialSection/>
      <HiringSection/>
      <ContactUsSection/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import ServicesSection from "../components/sections/services";
import IndustriesSection from "../components/sections/industries";
import ClientsSection from "../components/sections/clients";
import AboutUsSection from "../components/sections/about-us";
import TestimonialSection from "../components/sections/testimonial";
import HiringSection from "../components/sections/hiring";
import ContactUsSection from "../components/sections/contact-us.vue";
export default {
  name: "HomePage",
  components: {
    Header,
    Footer,
    Hero,
    ServicesSection,
    IndustriesSection,
    ClientsSection,
    AboutUsSection,
    TestimonialSection,
    HiringSection,
    ContactUsSection
  },
};
</script>
