<template>
    <SectionContainer class="contact-us-wrapper xxs:px-4 xxs:pt-[40px] xxs:pb-72 xs:px-4 xs:pt-[40px] xs:pb-72 sm:px-4 sm:pt-[40px] sm:pb-80 md:pt-[50px] h-[100%]  6xl:py-32 7xl:py-40">
        <div class="flex xxs:flex-col xs:flex-col sm:flex-col">
            <div class="w-[50%] xxs:w-[100%] xs:w-[100%] sm:w-[100%] xxs:flex xs:flex sm:flex justify-between">
                <div>
                    <Header1 class="text-[#00007E] font-bold uppercase max-w-sm leading-tight">Let’s talk business</Header1>
                    <BodyText class="max-w-sm mt-12 xxs:text-xl">The First Step to Your Business Success! Start work with Us! Your software vision is about to be realized.</BodyText>
                    <div class="flex gap-6 mt-12 xxs:hidden xs:hidden sm:hidden">
                        <Socials/>
                    </div>  
                </div>
                <div class="hidden xxs:flex xs:flex sm:flex flex-col gap-8">
                    <Socials/>
                </div>
            </div>
            <div class="w-[50%] xxs:w-[100%] xs:w-[100%] sm:w-[100%]">
                <div class="flex h-full items-center">
                    <div class="bg-white/90 rounded-3xl shadow-xl p-12 xxs:p-8 w-full text-center">
                        <Header1 class="text-[#00007E] font-bold uppercase tracking-wide">Email Our Team</Header1>
                        <BodyText class="mt-6">We respond within one business day. Reach out at</BodyText>
                        <a class="mt-8 inline-block text-2xl font-semibold text-[#00007E] underline" href="mailto:info@hypedriven.com">info@hypedriven.com</a>
                    </div>
                </div>
            </div>
        </div>
    </SectionContainer>
</template>

<script>
import Header1 from "../text/header/header_1.vue";
import BodyText from "../text/body/body.vue";
import SectionContainer from "../sections/container.vue";
import Socials from "../socials/index.vue";
export default {
    name: "ContactUsPageCoponent",
    components: {
        Header1,
        BodyText,
        SectionContainer,
        Socials
    },  
    data: () => {
        return {

        }
    }
}
</script>

<style>
.contact-us-wrapper {
    background-image: url('@/assets/img/images/contact-us-page-img.svg');
    background-size: auto;
    background-position: 10% 100%;
    background-repeat: no-repeat;
    background-color: #9DD3E1;
}
@media (min-width: 2200px) {
    .contact-us-wrapper {
        background-size: auto;
        background-position: 24% 100%;
    }
}
@media (min-width: 2050px) and (max-width: 2199.8px) {
    .contact-us-wrapper {
        background-size: auto;
        background-position: 22% 100%;
    }
}
@media (min-width: 1850px) and (max-width: 2049.8px) {
    .contact-us-wrapper {
        background-size: auto;
        background-position: 20% 100%;
    }
}
@media (min-width: 1750px) and (max-width: 1849.8px) {
    .contact-us-wrapper {
        background-size: auto;
        background-position: 18% 100%;
    }
}
@media (min-width: 1280px) and (max-width: 1439.5px) {
    .contact-us-wrapper {
        background-size: 45%;
        background-position: 10% 100%;
    }
}
@media (min-width: 1024px) and (max-width: 1279.5px) {
    .contact-us-wrapper {
        background-size: 45%;
        background-position: 10% 100%;
    }
}
@media (min-width: 768px) and (max-width: 1023.5px) {
    .contact-us-wrapper {
        background-size: 45%;
        background-position: 10% 100%;
    }
}
@media (min-width: 576px) and (max-width: 767.5px) {
    .contact-us-wrapper {
        background-size: 85%;
        background-position: 50% 100%;
    }
}
@media (min-width: 425px) and (max-width: 575.5px) {
    .contact-us-wrapper {
        background-size: 95%;
        background-position: 50% 100%;
    }
}
@media (min-width: 320px) and (max-width: 424.5px) {
    .contact-us-wrapper {
        background-size: 95%;
        background-position: 50% 100%;
    }
}
</style>
