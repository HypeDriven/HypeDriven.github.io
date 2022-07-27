<template>
    <SectionContainer>
        <div class="flex flex-col gap-8 max-w-lg m-auto">
            <SectionTitle class="text-white h-fit m-auto text-4xl max-w-xl px-2 text-center">
                {{$t('homepage.services.title')}}
            </SectionTitle>
            <SectionSubTitle class="text-accent-orange h-fit m-auto text-2xl max-w-3xl px-2 text-center">
                {{$t('homepage.services.subtitle')}}
            </SectionSubTitle>
        </div>
        <div>
            <Carousel :items="services" v-slot="{ data }">
                <ServiceCard>
                    <div class="flex flex-col gap-5 card-content">
                        <img :src="data?.img" class="h-10 w-10 m-auto" />
                        <div>
                            {{$t(`homepage.services.${data?.title}`)}}
                        </div>
                    </div>
                </ServiceCard>
            </Carousel>
        </div>
    </SectionContainer>
</template>

<script>
import ServiceCard from "../../services/service_card";
import SectionContainer from "../container";
import SectionTitle from "../title";
import SectionSubTitle from "../sub-title";
import Carousel from "../../carousel";
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
                    title: 'outsourcedServices',
                    img: require("../../../assets/img/icons/it.svg")
                },
                {
                    title: 'webDev',
                    img: require("../../../assets/img/icons/optimization.svg")
                },
                {
                    title: 'uxDesign',
                    img: require("../../../assets/img/icons/ui.svg")
                },
                {
                    title: 'itSecurityManagement',
                    img: require("../../../assets/img/icons/management-(2).svg")
                },
                {
                    title: 'projectManagement',
                    img: require("../../../assets/img/icons/management-(1).svg")
                },
                {
                    title: 'businessAnalysis',
                    img: require("../../../assets/img/icons/analysis.svg")
                },
                {
                    title: 'qualityAssurance',
                    img: require("../../../assets/img/icons/quality-assurance.svg")
                },
                {
                    title: 'mobileDev',
                    img: require("../../../assets/img/icons/app-development.svg")
                },
                {
                    title: 'applicationMaintenance',
                    img: require("../../../assets/img/icons/repair 1.svg")
                },
                {
                    title: 'solutionArchitecture',
                    img: require("../../../assets/img/icons/solution.svg")
                },
                {
                    title: 'supportServices',
                    img: require("../../../assets/img/icons/technical-support.svg")
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
