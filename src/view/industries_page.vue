<template>
    <div>
        <div class="flex flex-col ">
            <Header />
            <Hero class="flex-1" />
        </div>
        <main class="">
            <DigitalTransformation/>
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero/industries.vue";
import DigitalTransformation from "../components/sections/industries-page/digital-transformation.vue"
export default {
    name: "IndustriesPage",
    components: {
        Header,
        Footer,
        Hero,
        DigitalTransformation
    }
}
</script>