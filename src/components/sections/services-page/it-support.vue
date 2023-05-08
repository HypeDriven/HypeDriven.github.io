<template>
    <div class="bg-white">
    <SectionContainer class="p-2 sm:px-4 xs:p-5 xxs:p-5">
        <div class="flex flex-col sm:pt-[40px] sm:pb-10 xs:pt-[40px] xxs:pt-[40px] xs:pb-10 xxs:pb-10">
            <SectionTitle class="text-[#66C3CD] h-fit text-[32px] xs:text-[26px] xxs:text-[22px] max-w-3xl mb-6">
                {{$t('servicespage.itSupport.title')}}
            </SectionTitle>
            <div class="w-[60px] border-b-4 border-[#66C3CD]"></div>
            <div class="grid grid-rows-2  grid-cols-3 xxs:grid-rows-3 xxs:grid-cols-2 xs:grid-rows-3 xs:grid-cols-2 sm:grid-rows-3 sm:grid-cols-2 mt-10 mb-20"> 
                <ServiceCard v-for="(itemData, index) in itSupportItems" :key="index" class="bg-white servicespage-itsupport-item-border">
                    <div class="servicespage-itsupport-item cursor-pointer" 
                    @mouseover="itemData.hover=true" 
                    @mouseleave="itemData.hover=false"> 
                        <div class="flex flex-col gap-5 servicespage-itsupport-icon"
                        :style="{'background-image': itemData.hover ? `url(`+ itemData.bgImg +`)` : '',}">   
                            <div class="mt-8 mb-8 xxs:mb-1 xs:mb-1 sm:mb-4">
                                <img v-if="itemData?.icon" :src="itemData?.icon" class="lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-24 sm:h-24 xs:w-20 xs:h-20 xxs:w-20 xxs:h-20 m-auto"/>   
                                <img v-if="itemData?.img" :src="itemData?.img" class="w-72 h-72 xxs:w-40 xxs:h-40 xs:w-44 xs:h-44 sm:w-52 sm:h-52 md:w-48 md:h-48 m-auto">
                            </div>
                            <div v-if="itemData.title" class="lg:text-2xl md:text-xl sm:text-lg xs:text-xl xxs:text-xl text-center xs:mt-4 xss:mt-0 font-bold">
                                <span v-bind:class="itemData.hover ? 'text-white' : 'text-[#00007E]'">{{$t(`servicespage.itSupport.${itemData?.title}`)}}</span>
                            </div> 
                        </div>
                    </div>
                </ServiceCard>
            </div>
            
            <router-link to="/contact-us">
                <Button class="w-full">{{ $t('button.getSupport') }}</Button>
            </router-link>
        </div>
    </SectionContainer>
    </div>
</template>

<script>

import SectionContainer from "../container";
import SectionTitle from "../title";
import Button from "../../buttons";
import ServiceCard from "../../services/service_card";
export default {
    name: "ServicesPageItSupportComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Button,
        ServiceCard
    },
    data: function () {
        return {
            itSupportItems: [
                {
                    title: 'item1.title',
                    icon: require("@/assets/img/icons/servicespage-it-support-icon1.svg"),
                    bgImg: require("@/assets/img/icons/servicespage-it-support-icon-bg1.png"),
                    hover: false
                },
                {
                    title: 'item2.title',
                    icon: require("@/assets/img/icons/servicespage-it-support-icon2.svg"),
                    bgImg: require("@/assets/img/icons/servicespage-it-support-icon-bg2.png"),
                    hover: false
                },
                {
                    title: 'item3.title',
                    icon: require("@/assets/img/icons/servicespage-it-support-icon3.svg"),
                    bgImg: require("@/assets/img/icons/servicespage-it-support-icon-bg3.png"),
                    hover: false
                },
                {
                    title: 'item4.title',
                    icon: require("@/assets/img/icons/servicespage-it-support-icon4.svg"),
                    bgImg: require("@/assets/img/icons/servicespage-it-support-icon-bg4.png"),
                    hover: false
                },
                {
                    title: 'item5.title',
                    icon: require("@/assets/img/icons/servicespage-it-support-icon5.svg"),
                    bgImg: require("@/assets/img/icons/servicespage-it-support-icon-bg5.png"),
                    hover: false
                },
                {
                    img: require("@/assets/img/icons/servicespage-it-support-icon6.svg")
                }
            ]
        };
    }

};
</script>

<style>
.servicespage-itsupport-item {
    width: 100%;
    transition: .4s;
    height: 100%;
}

.servicespage-itsupport-icon {
    padding-top: 40px;
    padding-bottom: 40px;
    height: 320px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.servicespage-itsupport-item-border:nth-child(1) {
    border-bottom: 2px solid #00007E;
    border-right: 2px solid #00007E;
}

.servicespage-itsupport-item-border:nth-child(2) {
    border-bottom: 2px solid #00007E;
    border-right: 2px solid #00007E;
}

.servicespage-itsupport-item-border:nth-child(3) {
    border-bottom: 2px solid #00007E;
}

.servicespage-itsupport-item-border:nth-child(4) {
    border-right: 2px solid #00007E;
}

.servicespage-itsupport-item-border:nth-child(5) {
    border-right: 2px solid #00007E;
}

@media (min-width: 1024px) and (max-width: 1279.5px) {
    .servicespage-itsupport-icon {
        height: 280px;
    }
}

@media (min-width: 768px) and (max-width: 1023.5px) {
    .servicespage-itsupport-icon {
        height: 260px;
    }
}

@media (min-width: 576px) and (max-width: 767.5px) {
    .servicespage-itsupport-icon {
        height: 220px;
    }
    .servicespage-itsupport-item-border:nth-child(1) {
        border-bottom: 2px solid #00007E;
        border-right: 2px solid #00007E;
    }
    .servicespage-itsupport-item-border:nth-child(2) {
        border-bottom: 2px solid #00007E;
        border-right: none;
    }

    .servicespage-itsupport-item-border:nth-child(3) {
        border-bottom: 2px solid #00007E;
        border-right: 2px solid #00007E;
    }

    .servicespage-itsupport-item-border:nth-child(4) {
        border-right: none;
        border-bottom: 2px solid #00007E;
    }

    .servicespage-itsupport-item-border:nth-child(5) {
        border-right: 2px solid #00007E;
    }
}

@media (min-width: 425px) and (max-width: 575.5px) {
    .servicespage-itsupport-icon {
        height: 180px;
    }
    .servicespage-itsupport-item-border:nth-child(1) {
        border-bottom: 2px solid #00007E;
        border-right: 2px solid #00007E;
    }
    .servicespage-itsupport-item-border:nth-child(2) {
        border-bottom: 2px solid #00007E;
        border-right: none;
    }

    .servicespage-itsupport-item-border:nth-child(3) {
        border-bottom: 2px solid #00007E;
        border-right: 2px solid #00007E;
    }

    .servicespage-itsupport-item-border:nth-child(4) {
        border-right: none;
        border-bottom: 2px solid #00007E;
    }

    .servicespage-itsupport-item-border:nth-child(5) {
        border-right: 2px solid #00007E;
    }
}

@media (min-width: 320px) and (max-width: 424.5px) {
    .servicespage-itsupport-icon {
        height: 140px;
    } 
    .servicespage-itsupport-item-border:nth-child(1) {
        border-bottom: 2px solid #00007E;
        border-right: 2px solid #00007E;
    }
    .servicespage-itsupport-item-border:nth-child(2) {
        border-bottom: 2px solid #00007E;
        border-right: none;
    }

    .servicespage-itsupport-item-border:nth-child(3) {
        border-bottom: 2px solid #00007E;
        border-right: 2px solid #00007E;
    }

    .servicespage-itsupport-item-border:nth-child(4) {
        border-right: none;
        border-bottom: 2px solid #00007E;
    }

    .servicespage-itsupport-item-border:nth-child(5) {
        border-right: 2px solid #00007E;
    }
}
</style>

