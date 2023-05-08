<template>
    <SectionContainer class="lg:gap-16 md:gap-3 sm:gap-4 xs:gap-10"> 
        <div class="flex flex-row justify-around xs:flex-col xs:px-2 xxs:flex-col xxs:px-2 max-w-8xl">
            <div class="flex flex-row justify-between ">
                <div>
                    <SectionTitle class="text-white h-fit m-auto lg:text-6xl md:text-5xl sm:text-4xl xs:text-4xl xxs:text-4xl max-w-xl px-2 text-center services">
                        {{$t('homepage.services.title')}}
                    </SectionTitle>
                </div>
                <div class="servicesArrowImgWrapper">
                    <router-link to="/services">
                        <img class="sm:w-[32px] sm:h-[32px] xs:w-[30px] xs:h-[30px] xxs:w-[26px] xxs:h-[26px] xl:ml-[150px] lg:ml-[50px] md:ml-[20px] sm:ml-[40px]" src="@/assets/img/servicesArrowImg.svg">
                    </router-link>
                </div>
                
            </div>
            <div class="border-l-2 lineStyle xl:mr-[-145px] lg:mr-[-120px] md:mr-[-125px] sm:mr-[-100px] sm:block xs:hidden xxs:hidden"></div>
            <div class="flex xl:max-w-lg lg:max-w-sm md:max-w-xs sm:max-w-[250px] xs:max-w-[300px] xs:mt-4 xxs:mt-4 xxs:max-w-sm">
                
                <SectionSubTitle class="text-[#000026] h-fit lg:ml-12 md:ml-5 lg:text-xl md:text-base sm:text-sm xs:text-sm xxs:text-sm px-2 font-bold text-left">
                    {{$t('homepage.services.subtitle')}}
                </SectionSubTitle>
            </div>
        </div>
        <div>
            <Carousel :items="services" v-slot="{ data }">
                <ServiceCard >
                    <div class="services-card-content cursor-pointer flex flex-col xl:justify-between lg:justify-center md:justify-center sm:justify-center" @mouseover="data.hover=true" @mouseleave="data.hover=false"> 
                        <div class="flex flex-col gap-5 card-icon xl:py-[42px] md:py-[30px] sm:py-[30px] xs:py-[50px] xxs:py-[40px]"
                        :style="{'background-image': data.hover ? `url(`+ data.img2 +`)` : '',}">   
                            <div class="lg:mt-8 lg:mb-8 md:mt-1 md:mb-1">
                                <img :src="data?.img1" class="lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-16 sm:h-16 xs:w-20 xs:h-20 xxs:w-20 xxs:h-20 m-auto icons"/>   
                            </div>
                        </div>
                        <div class="lg:text-2xl md:text-xl xs:text-xl xxs:text-xl font-bold lg:mt-4 md:mt-2 card-text">
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
.services-card-content{
    width: 100%;
    transition: .4s;
    height: 100%;
}

.services-card-content:hover {
    color: #00007E;
}

.card-icon {
    border-top: 2px solid rgb(255, 255, 255);
    border-bottom: 2px solid rgb(255, 255, 255);

    background-repeat: no-repeat;
    background-size: cover;
    
}

.card-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* border-right: 1px solid rgb(255, 255, 255); */
    /* border-left: 1px solid rgb(255, 255, 255); */
    height: 60px;
    padding: auto;
    position: relative;
}
.card-text::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: -2.8%;
    height: 100%;
    border-right: 2px solid rgb(255, 255, 255);
}

.lineStyle {
    width: 100px;
    height: 100px;
}

.services::after {
    content: url("@/assets/img/servicesImg.svg");
    background-repeat: no-repeat;
    margin-left: 18px;
    transform: translateY(-40px);
    width: 18px;
    height: 18px;   
    display: inline-block;
}

@media (min-width: 1800px) {
    .card-text::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: -2.2%;
        height: 100%;
        border-right: 2px solid rgb(255, 255, 255);
    }
}

@media (min-width: 1700px) and (max-width: 1799.5px) {
    .card-text::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: -2.5%;
        height: 100%;
        border-right: 2px solid rgb(255, 255, 255);
    }
}

@media (min-width: 1440px) and (max-width: 1500px) {
    .card-text::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: -3%;
        height: 100%;
        border-right: 2px solid rgb(255, 255, 255);
    }
}

@media (min-width: 1375px) and (max-width: 1439.5px) {
    .card-text::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: -3%;
        height: 100%;
        border-right: 2px solid rgb(255, 255, 255);
    }
}

@media (min-width: 1280px) and (max-width: 1374.5px) {
    .card-text::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: -3.5%;
        height: 100%;
        border-right: 2px solid rgb(255, 255, 255);
    }
}

@media (min-width: 1170px) and (max-width: 1279.5px) {
    .card-text::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: -3.5%;
        height: 100%;
        border-right: 2px solid rgb(255, 255, 255);
    }
}

@media (min-width: 1024px) and (max-width: 1169.5px) {
    .card-text::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: -4%;
        height: 100%;
        border-right: 2px solid rgb(255, 255, 255);
    }
}

@media (min-width: 970px) and (max-width: 1023.5px) {
    .card-text::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: -4%;
        height: 80%;
        border-right: 2px solid rgb(255, 255, 255);
    }
}

@media (min-width: 864px) and (max-width: 969.5px) {
    .card-text::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: -4.5%;
        height: 80%;
        border-right: 2px solid rgb(255, 255, 255);
    }
}

@media (min-width: 768px) and (max-width: 863.5px) {
    .card-text::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: -5%;
        height: 80%;
        border-right: 2px solid rgb(255, 255, 255);
    }
}

@media (min-width: 645px) and (max-width: 767.5px) {
    .services::after {
        margin-left: 10px;
        transform: translateY(-15px);
        display: inline-block;
    }
    .card-text::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: -5%;
        height: 70%;
        border-right: 2px solid rgb(255, 255, 255);
    }
}

@media (min-width: 576px) and (max-width: 645.5px) {
    .services::after {
        margin-left: 10px;
        transform: translateY(-15px);
        display: inline-block;
    }
    .card-text::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: -6%;
        height: 70%;
        border-right: 2px solid rgb(255, 255, 255);
    }
}

@media (min-width: 520px) and (max-width: 575.5px) {
    .services::after {
        content: "";
        background-image: url("@/assets/img/servicesImg.svg");
        transform: translateY(-10px);
        background-size: 22px 22px;
        margin-left: 10px;
        width: 24px;
        height: 24px;
        display: inline-block;
    }
    .servicesArrowImg {
        width: 22px;
        height: 22px;
    }
    .card-text::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: -3.3%;
        height: 70%;
        border-right: 2px solid rgb(255, 255, 255);
    }
}

@media (min-width: 425px) and (max-width: 519.5px) {
    .services::after {
        content: "";
        background-image: url("@/assets/img/servicesImg.svg");
        transform: translateY(-10px);
        background-size: 22px 22px;
        margin-left: 10px;
        width: 24px;
        height: 24px;
        display: inline-block;
    }
    .servicesArrowImg {
        width: 22px;
        height: 22px;
    }
    .card-text::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: -4%;
        height: 70%;
        border-right: 2px solid rgb(255, 255, 255);
    }
}

@media (min-width: 320px) and (max-width:  424.5px) {
    .services::after {
        content: "";
        background-image: url("@/assets/img/servicesImg.svg");
        transform: translateY(-10px);
        background-size: 12px 12px;
        margin-left: 10px;
        width: 12px;
        height: 12px;
        display: inline-block;
    }
    .servicesArrowImg {
        width: 22px;
        height: 22px;
    }
    .card-text::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: -5%;
        height: 70%;
        border-right: 2px solid rgb(255, 255, 255);
    }
}

.servicesArrowImg {
    width: 32px;
    height: 32px;
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
