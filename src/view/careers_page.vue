<template>
    <div>
        <div class="flex flex-col ">
            <Header />
            <Hero class="flex-1 bg-main-bg" />
        </div>
        <main> <!--class="bg-primary-bg"-->
            <OurBenefits/>
            <HowWeHire/>
            <FindYourDreamJob/>
            <StaffAugmentation/>
            <DedicatedTeam/>
            <ContactUs/>
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero/careers.vue";
import OurBenefits from "../components/sections/careers-page/our-benefits.vue";
import HowWeHire from "../components/sections/careers-page/how-we-hire.vue";
import FindYourDreamJob from "../components/sections/careers-page/find-your-dream-job.vue";
import StaffAugmentation from "../components/sections/careers-page/staff-augmentation.vue";
import DedicatedTeam from "../components/sections/careers-page/dedicated-team.vue";
import ContactUs from "../components/sections/careers-page/contact-us.vue";
export default {
    name: "CareersPage",
    components: {
        Header,
        Footer,
        Hero,
        OurBenefits,
        HowWeHire,
        FindYourDreamJob,
        StaffAugmentation,
        DedicatedTeam,
        ContactUs
    }
}
</script>