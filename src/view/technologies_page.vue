<template>
    <div>
        <div class="flex flex-col"> 
            <Header />
            <Hero class="flex-1" />
        </div>
        <main class="">
            <Technologies/>
            <TechnoloficalAdvancement/>
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero/technologies.vue";
import Technologies from "../components/sections/technologies-page/technologies.vue";
import TechnoloficalAdvancement from "../components/sections/technologies-page/technological-advancement.vue";
export default {
    name: "TechnologiesPage",
    components: {
        Header,
        Footer,
        Hero,
        Technologies,
        TechnoloficalAdvancement
    }
}
</script>