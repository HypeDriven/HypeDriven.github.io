<template>
  <div>
    <div class="flex flex-col h-screen">
      <Header />
      <Hero class="flex-1" />
    </div>
    <main class="flex flex-col">
      <ServicesSection />
      <IndustriesSection />
      <TestimonialSection/>
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
import TestimonialSection from "../components/sections/testimonial";
export default {
  name: "HomePage",
  components: {
    Header,
    Footer,
    Hero,
    ServicesSection,
    IndustriesSection,
    TestimonialSection
  },
};
</script>
