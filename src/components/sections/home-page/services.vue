<template>
    <SectionContainer>
        <div class="flex flex-row justify-around max-w-8xl  pt-56">
            <div class="flex flex-row justify-between ">
                <div>
                    <SectionTitle class="text-white h-fit m-auto text-6xl max-w-xl px-2 text-center services">
                        {{$t('homepage.services.title')}}
                    </SectionTitle>
                </div>
                <div class="servicesArrowImgWrapper">
                    <router-link to="/services">
                        <img class="servicesArrowImg" src="@/assets/img/servicesArrowImg.svg">
                    </router-link>
                </div>
                
            </div>
            <div class="border-l-2 lineStyle"></div>
            <div class="flex max-w-lg">
                
                <SectionSubTitle class="text-[#000026] h-fit ml-12 text-xl px-2 font-bold text-left">
                    {{$t('homepage.services.subtitle')}}
                </SectionSubTitle>
            </div>
        </div>
        <div>
            <Carousel :items="services" v-slot="{ data }">
                <ServiceCard>
                    <div class="card-content1 cursor-pointer" @mouseover="data.hover=true" @mouseleave="data.hover=false"> 
                        <div class="flex flex-col gap-5 card-icon"
                        :style="{'background-image': data.hover ? `url(`+ data.img2 +`)` : '',}">   
                            <div class="mt-8 mb-8">
                                <img :src="data?.img1" class="w-24 h-24 m-auto icons" v-bind:class="[data.hover ? ` iconsWhite `: '']"/>    
                            </div>
                        </div>
                        <div class="text-xl font-bold mt-4 card-text">
                            <span>{{$t(`homepage.services.${data?.title}`)}}</span>
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
                    title: 'customSoftwareDevelopment',
                    img1: require("@/assets/img/icons/custom-software-dev.svg"),
                    img2: require("@/assets/img/icons/softwareDev2.jpg"),
                    hover: false
                },
                {
                    title: 'softwareTesting',
                    img1: require("@/assets/img/icons/software-testing.svg"),
                    img2: require("@/assets/img/icons/it-specialist-check.jpg"),
                    hover: false
                },
                {
                    title: 'productEngineering',
                    img1: require("@/assets/img/icons/product-engineering.svg"),
                    img2: require("@/assets/img/icons/product-engineering.jpg"),
                    hover: false
                },
                {
                    title: 'itSupport',
                    img1: require("@/assets/img/icons/it-support.svg"),
                    img2: require("@/assets/img/icons/it-support.jpg"),
                    hover: false
                },
                {
                    title: 'itConsult',
                    img1: require("@/assets/img/icons/it-consult.svg"),
                    img2: require("@/assets/img/icons/it-consult.jpg"),
                    hover: false
                }
            ]
        };
    }
};
</script>

<style>
.card-content1{
    width: 80%;
    transition: .4s;
}

.card-content1:hover {
    color: #00007E;
}

.card-icon {
    border-top: 1px solid rgb(255, 255, 255);
    border-bottom: 1px solid rgb(255, 255, 255);
    padding-top: 20px;
    padding-bottom: 20px;
    background-repeat: no-repeat;
    background-size: cover;
}

.card-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid rgb(255, 255, 255);
    border-left: 1px solid rgb(255, 255, 255);
    height: 60px;
    padding: auto;
}

/*.card-content1::after {
    content: "";
    position: absolute;
    height: 100px;
    width: 2px;
    border-right: 1px solid rgb(255, 255, 255);
}*/

.lineStyle {
    width: 100px;
    height: 100px;
    margin-right: -150px;

}

.services::after {
    content: url("@/assets/img/servicesImg.svg");
    background-repeat: no-repeat;
    width: 18px;
    height: 18px;
    margin-left: 18px;
    transform: translateY(-40px);
    display: inline-block;
}

.servicesArrowImg {
    width: 32px;
    height: 32px;
    margin-left: 150px;
}

.servicesArrowImgWrapper {
    cursor: pointer;
}

.servicesArrowImgWrapper:hover {
    filter: brightness(0) invert(1);
    transform: scale(1.2);
    transition: .5s ease-in;
    
}

.iconsWhite,
.iconsWhite:focus {
    filter: brightness(0) invert(1);
    transition: .4s;
}

</style>
