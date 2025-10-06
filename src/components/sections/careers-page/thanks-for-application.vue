<template>
    <Header/>
        <SectionContainer class="bg-main-bg applied-bg-mobile xxs:px-4 xxs:pt-[40px] xs:px-4 xs:pt-[40px] sm:px-4 sm:pt-[40px] md:pt-[50px] md:pb-16">
            <div class="text-lg">
            <router-link to="/contact-us">
                <span class="text-white">Contact-us > </span>
            </router-link>
            <span class="text-[#00007E] xxs:text-white xs:text-white sm:text-white"> Applied</span>
            </div>
            <div class="applied-bg">
                <div class="m-auto text-white">
                    <SectionTitle class="mb-24 xxs:text-5xl md:text-5xl lg:text-6xl text-center">Thanks for your attention</SectionTitle>
                    <SectionSubTitle class="mb-24 text-xl text-center">We'll get back to you soon!</SectionSubTitle>
                    <div class="text-center">
                        <router-link to="/">
                            <Button>Home page</Button>
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
    @media (min-width: 576px) and (max-width: 767.5px) {
        .applied-bg {
            background-image: none;
        }
        .applied-bg-mobile {
            background-image: url('@/assets/img/images/applied-bg-img.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            height: 650px;
        }
    }
    @media (min-width: 425px) and (max-width: 575.5px) {
        .applied-bg {
            background-image: none;
        }
        .applied-bg-mobile {
            background-image: url('@/assets/img/images/applied-bg-img.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            height: 600px;
        }
    }
    @media (min-width: 320px) and (max-width: 424.5px) {
        .applied-bg {
            background-image: none;
        }
        .applied-bg-mobile {
            background-image: url('@/assets/img/images/applied-bg-img.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            height: 550px;
        }
    }
</style>