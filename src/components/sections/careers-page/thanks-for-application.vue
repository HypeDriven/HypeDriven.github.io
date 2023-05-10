<template>
    <Header/>
        <SectionContainer class="bg-main-bg">
            <div class="text-lg">
            <router-link to="/careers">
                <span class="text-white">Careers > </span>
            </router-link>
            <router-link to="/careers/vacancies">
                <span class="text-white">Vacancies > </span>
            </router-link>
            <span class="text-[#00007E]"> Applied</span>
            </div>
            <div class="applied-bg">
                <div class="m-auto text-white">
                    <SectionTitle class="mb-24">Thanks for your attention</SectionTitle>
                    <SectionSubTitle class="mb-24 text-xl text-center">We'll get back to you soon!</SectionSubTitle>
                    <div class="text-center">
                        <router-link to="/">
                            <Button class="rounded-3xl">Home page</Button>
                        </router-link>
                    </div>
                </div>
            </div>
        </SectionContainer>
    <Footer/>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
import SectionContainer from "../container";
import SectionTitle from "../title";
import SectionSubTitle from "../sub-title.vue";
import Button from "../../buttons";
export default {
    name: "ThanksForApplicationComponent",
    components: {
        Header,
        Footer,
        SectionContainer,
        SectionTitle,
        SectionSubTitle,
        Button
    },
    data: () => {
        return {
            appliedBgImg: require('@/assets/img/images/applied-bg-img.png')
        }
    }
}
</script>

<style>
    .applied-bg {
        background-image: url('@/assets/img/images/applied-bg-img.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>