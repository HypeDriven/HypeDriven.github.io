<template>
    <div>
        <div class="flex flex-col ">
            <Header />
            <Hero class="flex-1" />
        </div>
        <main class="bg-primary-bg">
            <Services/>
            <SoftwareTesting/>
            <ProductEngineering/>
            <itSupport/>
            <itConsultingAdvisory/>
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero/services.vue";
import Services from "../components/sections/services-page/services";
import SoftwareTesting from "../components/sections/services-page/software-testing.vue";
import ProductEngineering from "../components/sections/services-page/product-engineering.vue";
import itSupport from "../components/sections/services-page/it-support.vue";
import itConsultingAdvisory from "../components/sections/services-page/it-consulting-advisory.vue";
export default {
    name: "ServicesPage",
    components: {
        Header,
        Footer,
        Hero,
        Services,
        SoftwareTesting,
        ProductEngineering,
        itSupport,
        itConsultingAdvisory
    }
}
</script>