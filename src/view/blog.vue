<template>
    <div>
      <Header />
      <main>
        <Hero/> 
        <OurPosts/>
        <ContactUs/>
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from "../components/header";
  import Footer from "../components/footer";
  import Hero from "../components/hero/blog.vue";
  import OurPosts from "../components/sections/blog-page/our-posts.vue"
  import ContactUs from "../components/sections/blog-page/contact-us.vue";
  export default {
    name: "BlogPage",
    components: {
      Header,
      Footer,
      OurPosts,
      Hero,
      ContactUs
    },
  };
  </script>
  