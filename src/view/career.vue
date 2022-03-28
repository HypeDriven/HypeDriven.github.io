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

    <section class="guide">
      <div class="container">
        <h2
          class="guide__heading like-h2 wow fadeInLeft"
          data-wow-duration="1.2s"
        >
          From Candidate to Employee: How-to Guide
        </h2>
        <div class="row display-flex">
          <div class="guide-item guide-item_1 wow" data-wow-delay="1s">
            <p class="guide-item__index">1</p>
            <p class="guide-item__condition">Send your CV</p>
          </div>
          <div class="guide-item guide-item_2 wow" data-wow-delay="2s">
            <p class="guide-item__index">2</p>
            <p class="guide-item__condition">
              Have interview with USS recruiter and tech specialists
            </p>
          </div>
          <div class="guide-item guide-item_3 wow" data-wow-delay="3s">
            <p class="guide-item__index">3</p>
            <p class="guide-item__condition">
              Impress our client with your experience and expertise on the next
              interview
            </p>
          </div>
          <div class="guide-item guide-item_4 wow" data-wow-delay="4s">
            <p class="guide-item__index">4</p>
            <p class="guide-item__condition">Get job offer from USS</p>
          </div>
          <div class="guide-item guide-item_5 wow" data-wow-delay="5s">
            <p class="guide-item__index">5</p>
            <p class="guide-item__condition">Welcome on board!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- GUIDE section end -->

    <!-- CONTACT US section start -->

    <section class="contact-us contact-us-career">
      <div class="container display-flex wrap">
        <div class="text-block">
          <h2 class="text-block__heading like-h2">Can’t find your job here?</h2>
          <p class="subheading">
            If you want to be part of our team - please send your resume and a
            detailed description of your experience, skills, contact details and
            suggestions the salary by email
            <a class="link link_dark" href="mailto:career@ukrainiansoftware.com"
              >career@ukrainiansoftware.com</a
            >
          </p>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>

<script>
import Header from "../components/layout/header/header";
import Footer from "../components/layout/footer/footer";
export default {
  name: "HomePage",
  components: {
    Header,
    Footer,
  },
};
</script>
