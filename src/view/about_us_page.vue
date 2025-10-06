<template>
  <div>
    <div class="flex flex-col 3xl:h-[100vh]">
      <Header />
      <Hero class="flex-1" />
    </div>
    <main class="flex flex-col sm:px-0" id="main-content"> 
      <Employment/>
      <OurMission/>
      <Values/>
      <Challenges/>
      <WhyUs/>
      <OurStory/>
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
import Employment from "../components/sections/about-us/employment.vue";
import OurMission from "@/components/sections/about-us/our-mission.vue";
import Values from "../components/sections/about-us/values.vue";
import Challenges from "../components/sections/about-us/challenges.vue";
import WhyUs from "../components/sections/about-us/why-us.vue";
import Jobs from "../components/sections/about-us/jobs.vue";
import OurStory from "../components/sections/about-us/our-story.vue"
import Map from "../components/sections/about-us/map.vue";
export default {
  name: "AboutUs",
  components: {
    Header,
    Footer,
    Hero,
    Employment,
    OurMission,
    Values,
    Challenges,
    WhyUs,
    OurStory,
    Jobs,
    Map
  }
};
</script>
