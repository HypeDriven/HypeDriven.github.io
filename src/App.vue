<template>
  <Header />
  <main>
     <router-view />
    <Footer />
  </main>
</template>

<script>
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";


export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};


</script>

