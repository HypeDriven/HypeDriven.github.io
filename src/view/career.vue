<template>
  <Header />
  <main>
    <section class="intro-career">
      <div class="container">
        <h1
          class="intro__heading intro-career__heading like-h1 wow fadeInLeft"
          data-wow-duration="1.2s"
        >
          Find your <br />dream job!
        </h1>
        <div class="wrapper">
          <p class="intro-career__subheading subheading">
            Ukrainian Software Services is a great place to work at. We always
            look forward to meeting passionate and talented professionals.
          </p>
        </div>
      </div>
    </section>

    <!-- INTRO section end-->

    <div class="breadcrumbs container" id="breadcrumbs">
      <ul>
        <li><a href="/" class="link">Home</a><span class="divider">/</span></li>
        <li><a class="link">Careers</a></li>
      </ul>
    </div>

    <!-- VACANCY section start -->

    <VacancyList />

    <!-- VACANCY section end -->

    <!-- GUIDE section start -->

    <GuideSection />

    <!-- GUIDE section end -->

    <!-- CONTACT US section start -->
    <ContactUsSection />
    <!-- CONTACT US section end -->
  </main>
  <Footer />
</template>

<script>
import Header from "../components/layout/header/header";
import Footer from "../components/layout/footer/footer";
import VacancyList from "../components/careers/vacancies-list";
import GuideSection from "../components/sections/guide";
import ContactUsSection from "../components/contact-us/contact-us";
export default {
  name: "HomePage",
  components: {
    Header,
    VacancyList,
    GuideSection,
    ContactUsSection,
    Footer,
  },
};
</script>
