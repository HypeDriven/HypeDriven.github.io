<template>
    <div>
        <div class="flex flex-col ">
            <Header />
            <Hero class="flex-1" />
        </div>
        <main class="">
            <AlbertMeynburgh/>
            <OurTeam/>
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero/team.vue";
import AlbertMeynburgh from "@/components/sections/team-page/albert-meyburgh.vue";
import OurTeam from "@/components/sections/team-page/our-team.vue";
export default {
    name: "DiversityPage",
    components: {
        Header,
        Footer,
        Hero,
        AlbertMeynburgh,
        OurTeam
    }
}
</script>