<template>
    <SectionContainer class="contact-us-wrapper"> <!--min-h-[100vh]-->
        <div class="flex">
            <div class="w-[50%]">
                <Header1 class="text-[#00007E] font-bold uppercase max-w-sm leading-tight">Let’s talk business</Header1>
                <BodyText class="max-w-sm mt-12">The First Step to Your Business Success! Start work with Us! Your software vision is about to be realized.</BodyText>
                <div class="flex gap-6 mt-12">
                    <Socials/>
                </div>  
            </div>
            <div class="w-[50%]">
                <ContactUsForm/>
            </div>
        </div>
    </SectionContainer>
</template>

<script>
import Header1 from "../text/header/header_1.vue";
import BodyText from "../text/body/body.vue";
import SectionContainer from "../sections/container.vue";
import Socials from "../socials/index.vue";
import ContactUsForm from "../sections/contact-us-form/contact-us-from.vue";
export default {
    name: "ContactUsPageCoponent",
    components: {
        Header1,
        BodyText,
        SectionContainer,
        Socials,
        ContactUsForm
    },  
    data: () => {
        return {

        }
    }
}
</script>

<style>
.contact-us-wrapper {
    background-image: url('@/assets/img/images/contact-us-page-img.png');
    background-size: auto;
    background-position: 10% 100%;
    background-repeat: no-repeat;
    background-color: #9DD3E1;
}
</style>
