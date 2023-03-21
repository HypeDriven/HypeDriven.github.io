<template>
    <div>
        <div class="flex flex-col ">
            <Header />
            <Hero class="flex-1" />
        </div>
        <main class="">
            <Qote/>
            <Worldwide/>
            <ContactUs/>
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero/diversity.vue";
import Qote from "../components/sections/diversity-page/qote.vue";
import Worldwide from "../components/sections/diversity-page/worldwide.vue";
import ContactUs from "../components/sections/diversity-page/contact-us.vue";
export default {
    name: "DiversityPage",
    components: {
        Header,
        Footer,
        Hero,
        Qote,
        Worldwide,
        ContactUs
    }
}
</script>