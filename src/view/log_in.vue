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
  import Hero from "../components/hero/log-in.vue";
  export default {
    name: "LogIn",
    components: {
      Header,
      Footer,
      Hero,
    },
  };
  </script>
  