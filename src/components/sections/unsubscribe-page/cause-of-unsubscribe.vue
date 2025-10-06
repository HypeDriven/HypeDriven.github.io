<template>
    <SectionContainer>
        <SectionTitle class="text-[#00007E] h-fit text-3xl">
            We are sorry that you have decided to unsubscribe from our updates.
            Could you explain why, or leave us some wishes?
        </SectionTitle>
    </SectionContainer>
    <ContactUs />
</template>

<script>
import SectionContainer from "../container";
import ContactUs from "../../hero/contact-us.vue";
import SectionTitle from "../title";
// import Button from "../../buttons";

export default {
    name: "PostDetailedSubscribePageComponent",
    components: {
        SectionContainer,
        SectionTitle,
        // Button,
        ContactUs
    },
    data() {
        return {

        };
    },
    methods: {

    },
};
</script>