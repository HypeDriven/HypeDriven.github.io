<template>
  <div>
    <div class="flex flex-col bg-primary-bg">
      <Header />
      <Hero class="flex-1" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero/not-found";
export default {
  name: "404Page",
  components: {
    Header,
    Footer,
    Hero,
},
};
</script>
