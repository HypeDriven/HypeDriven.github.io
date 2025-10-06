<template>
  <div>
    <Header />
    <main>
      <Hero/> 
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero/contact-us.vue";
export default {
  name: "ContactUs",
  components: {
    Header,
    Footer,
    Hero,
  },
};
</script>
