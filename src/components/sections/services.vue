<template>
    <SectionContainer>
        <div class="flex flex-col gap-8 max-w-lg m-auto">
            <SectionTitle class="text-white h-fit m-auto text-4xl max-w-xl px-2 text-center">
                Services
            </SectionTitle>
            <SectionSubTitle class="text-accent-orange h-fit m-auto text-2xl max-w-3xl px-2 text-center">
                We are passionate about what we are doing
                that’s why we are striving to ensure the high quality
                of the solutions we develop
            </SectionSubTitle>
        </div>
        <div>
            <Carousel :items="services" v-slot="{ data }">
                <ServiceCard>
                    <div class="flex flex-col gap-5 card-content">
                        <img :src="data?.img" class="h-10 w-10 m-auto" />
                        <div>
                            {{ data?.title }}
                        </div>

                    </div>
                </ServiceCard>
            </Carousel>
        </div>
    </SectionContainer>
</template>

<script>
import ServiceCard from "../services/service_card";
import SectionContainer from "./container";
import SectionTitle from "./title";
import SectionSubTitle from "./sub-title";
import Carousel from "../carousel";
export default {
    name: "ServicesSectionComponent",
    components: {
        SectionContainer,
        SectionTitle,
        SectionSubTitle,
        Carousel,
        ServiceCard
    },
    data: function () {
        return {
            services: [
                {
                    title: 'Outsourced IT Services',
                    img: require("../../assets/img/icons/it.svg")
                },
                {
                    title: 'Web Dev',
                    img: require("../../assets/img/icons/optimization.svg")
                },
                {
                    title: 'UI/UX Design',
                    img: require("../../assets/img/icons/ui.svg")
                },
                {
                    title: 'IT Security Management',
                    img: require("../../assets/img/icons/management-(2).svg")
                },
                {
                    title: 'Project Management',
                    img: require("../../assets/img/icons/management-(1).svg")
                },
                {
                    title: 'Business Analysis',
                    img: require("../../assets/img/icons/analysis.svg")
                },
                {
                    title: 'Quality Assurance',
                    img: require("../../assets/img/icons/quality-assurance.svg")
                },
                {
                    title: 'Mobile Dev',
                    img: require("../../assets/img/icons/app-development.svg")
                },
                {
                    title: 'Application maintenance',
                    img: require("../../assets/img/icons/repair 1.svg")
                },
                {
                    title: 'Solution Architecture',
                    img: require("../../assets/img/icons/solution.svg")
                },
                {
                    title: ' Support Services',
                    img: require("../../assets/img/icons/technical-support.svg")
                }
            ]
        };
    }
};
</script>

<style>
.card-content{
    max-width: 120px;
}
</style>
