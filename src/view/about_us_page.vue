<template>
  <div>
    <div class="flex flex-col bg-primary-bg">
      <Header />
      <Hero class="flex-1" />
    </div>
    <main class="flex flex-col px-6 sm:px-0 bg-primary-bg">
      <OurMission/>
      <Map/>
      <Jobs/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero/about-us";
import OurMission from "@/components/sections/about-us/our-mission.vue";
import Jobs from "../components/sections/about-us/jobs.vue";
import Map from "../components/sections/about-us/map.vue";
export default {
  name: "HomePage",
  components: {
    Header,
    Footer,
    Hero,
    OurMission,
    Jobs,
    Map
},
};
</script>
