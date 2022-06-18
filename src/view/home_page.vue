<template>
  <div>
    <div class="flex flex-col h-screen">
      <Header />
      <Hero class="flex-1" />
    </div>
    <main class="flex flex-col">
      <ServicesSection />
      <IndustriesSection />
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
export default {
  name: "HomePage",
  components: {
    Header,
    Footer,
    Hero,
    ServicesSection,
    IndustriesSection
  },
};
</script>
