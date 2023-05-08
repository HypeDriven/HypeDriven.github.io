<template>
    <SectionContainer class="sm:px-4 xs:p-5 xxs:p-5">
        <div class="flex flex-col sm:pt-[40px] sm:pb-10 xs:pt-[40px] xs:pb-10 xxs:pt-[40px] xxs:pb-10">
            <SectionTitle class="text-white h-fit text-[32px] xs:text-[26px] xxs:text-[22px] max-w-3xl mb-6">
                {{$t('servicespage.productEngineering.title')}}
            </SectionTitle>
            <div class="w-[60px] border-b-4 border-white"></div>
            <div class="grid grid-rows-3 grid-cols-2 xxs:grid-rows-6 xxs:gap-0 xxs:grid-cols-1 xs:grid-rows-6 xs:gap-0 xs:grid-cols-1 sm:grid-rows-6 sm:gap-0 sm:grid-cols-1 mt-10 mb-20"> 
                <ServiceCardProdEng v-for="(itemData, index) in productEngineeringItems" :key="index" class="w-full servicespage-product-engineering-item-border"> 
                    <div class="servicespage-product-engineering-item"  
                    :style="{backgroundImage: itemData.hover? `url(`+ itemData.bgImg +`)` : '',}"
                    v-bind:class="[itemData.hover ? `xl:border-[3px] lg:border-[2px]`: '']"
                    @mouseover="itemData.hover=true" 
                    @mouseout="itemData.hover=false"> 
                    <div class="flex flex-row justify-between" >
                        <div class="xl:w-[25%] md:w-[23%] sm:w-[24%] xs:w-[20%] xxs:w-[20%]"> 
                            <img :src="itemData.icon"/>
                        </div>
                        <div class="w-[75%]">
                            <Header4 class="text-[#66C3CD] font-bold 1xl:text-[40px] xl:text-[36px] lg:text-[30px] md:text-[26px] sm:text-[30px] xs:text-[24px] xxs:text-[18px]">
                                {{ $t(`servicespage.productEngineering.${itemData.title}`) }}
                            </Header4>
                            <BodyText class="text-white mt-6 1xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[18px] xs:text-[16px] xxs:text-[12px]">
                                {{ $t(`servicespage.productEngineering.${itemData.subtitle}`) }}
                            </BodyText>
                        </div>
                    </div>
                    <div class="servicespage-arrowImg-wrapper">
                        <img class="servicespage-arrowImg" src="@/assets/img/images/servicespage-arrow.svg" 
                        v-bind:class="[itemData.hover ? ` servicespage-arrowImg-product-engineering-hover `: '']">
                    </div>
                </div>
                </ServiceCardProdEng>
            </div>
            
            <router-link to="/contact-us">
                <Button class="w-full">{{ $t('button.requestContact') }}</Button>
            </router-link>
            
        </div>
    </SectionContainer>
</template>

<script>

import SectionContainer from "../container";
import SectionTitle from "../title";
import Button from "../../buttons";
import Header4 from "../../text/header/header_4.vue";
import BodyText from "../../text/body/body.vue";
import ServiceCardProdEng from "../../services/service_card_product_eng.vue";
export default {
    name: "ServicesPageProductEngComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Button,
        Header4,
        BodyText,
        ServiceCardProdEng
    },
    data: function () {
        return {
            productEngineeringItems: [
                {
                    title: 'item1.title',
                    subtitle: 'item1.subtitle',
                    icon: require("@/assets/img/icons/servicespage-product-engineering-icon1.svg"),
                    bgImg: require("@/assets/img/icons/servicespage-product-engineering-icon-bg1.png"),
                    hover: false
                },
                {
                    title: 'item2.title',
                    subtitle: 'item2.subtitle',
                    icon: require("@/assets/img/icons/servicespage-product-engineering-icon2.svg"),
                    bgImg: require("@/assets/img/icons/servicespage-product-engineering-icon-bg2.png"),
                    hover: false
                },
                {
                    title: 'item3.title',
                    subtitle: 'item3.subtitle',
                    icon: require("@/assets/img/icons/servicespage-product-engineering-icon3.svg"),
                    bgImg: require("@/assets/img/icons/servicespage-product-engineering-icon-bg3.png"),
                    hover: false
                },
                {
                    title: 'item4.title',
                    subtitle: 'item4.subtitle',
                    icon: require("@/assets/img/icons/servicespage-product-engineering-icon4.svg"),
                    bgImg: require("@/assets/img/icons/servicespage-product-engineering-icon-bg4.png"),
                    hover: false
                },
                {
                    title: 'item5.title',
                    subtitle: 'item5.subtitle',
                    icon: require("@/assets/img/icons/servicespage-product-engineering-icon5.svg"),
                    bgImg: require("@/assets/img/icons/servicespage-product-engineering-icon-bg5.png"),
                    hover: false
                },{
                    title: 'item6.title',
                    subtitle: 'item6.subtitle',
                    icon: require("@/assets/img/icons/servicespage-product-engineering-icon6.svg"),
                    bgImg: require("@/assets/img/icons/servicespage-product-engineering-icon-bg6.png"),
                    hover: false
                }
            ]
        };
    }

};
</script>

<style>
.servicespage-product-engineering-item {
    background-size: cover;
    background-position: center;
    background-color: #00007E;
    padding: 40px;
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
}

.servicespage-product-engineering-item-border:nth-child(1) {
    border-right: 2px solid white;
    border-bottom: 3px solid white;
}

.servicespage-product-engineering-item-border:nth-child(2) {
    border-bottom: 3px solid white;
}

.servicespage-product-engineering-item-border:nth-child(3) {
    border-right: 2px solid white;
}

/* .servicespage-product-engineering-item-border:nth-child(4) {
    border-top: 1px solid white;
} */

.servicespage-product-engineering-item-border:nth-child(5) {
    border-top: 3px solid white;
    border-right: 2px solid white;
}

.servicespage-product-engineering-item-border:nth-child(6) {
    border-top: 3px solid white;
}

.servicespage-arrowImg-product-engineering-hover {
    filter: brightness(0) invert(1);
    transition: .4s;
}

@media (min-width: 1024px) and (max-width: 1279.5px) {
    .servicespage-product-engineering-item {
        padding: 25px;
        height: 450px;
    }
}

@media (min-width: 768px) and (max-width: 1023.5px) {
    .servicespage-product-engineering-item {
        padding: 12px;
        height: 450px;
    }
}

@media (min-width: 576px) and (max-width: 767.5px) {
    .servicespage-product-engineering-item {
        padding: 30px 22px 22px 22px;
        height: 330px;
    }
    .servicespage-product-engineering-item-border:nth-child(1) {
        border-bottom: 2px solid white;
        border-right: none;
    }

    .servicespage-product-engineering-item-border:nth-child(2) {
        border-bottom: 2px solid white;
    }

    .servicespage-product-engineering-item-border:nth-child(3) {
        border-bottom: 2px solid white;
        border-right: none;
    }

    .servicespage-product-engineering-item-border:nth-child(4) {
        border-bottom: 2px solid white;
    }

    .servicespage-product-engineering-item-border:nth-child(5) {
        border-bottom: 2px solid white;
        border-right: none;
        border-top: none;
    }

    .servicespage-product-engineering-item-border:nth-child(6) {
        border-bottom: none;
        border-top: none;
    }
}

@media (min-width: 425px) and (max-width: 575.5px) {
    .servicespage-product-engineering-item {
        padding: 10px 6px 10px 6px;
        height: 320px;
    }
    .servicespage-product-engineering-item-border:nth-child(1) {
        border-bottom: 2px solid white;
        border-right: none;
    }

    .servicespage-product-engineering-item-border:nth-child(2) {
        border-bottom: 2px solid white;
    }

    .servicespage-product-engineering-item-border:nth-child(3) {
        border-bottom: 2px solid white;
        border-right: none;
    }

    .servicespage-product-engineering-item-border:nth-child(4) {
        border-bottom: 2px solid white;
    }

    .servicespage-product-engineering-item-border:nth-child(5) {
        border-bottom: 2px solid white;
        border-right: none;
        border-top: none;
    }

    .servicespage-product-engineering-item-border:nth-child(6) {
        border-bottom: none;
        border-top: none;
    }
}

@media (min-width: 320px) and (max-width: 424.5px) {
    .servicespage-product-engineering-item {
        padding: 10px 6px 10px 6px;
        height: 270px;
    }
    
    .servicespage-product-engineering-item-border:nth-child(1) {
        border-bottom: 2px solid white;
        border-right: none;
    }

    .servicespage-product-engineering-item-border:nth-child(2) {
        border-bottom: 2px solid white;
    }

    .servicespage-product-engineering-item-border:nth-child(3) {
        border-bottom: 2px solid white;
        border-right: none;
    }

    .servicespage-product-engineering-item-border:nth-child(4) {
        border-bottom: 2px solid white;
    }

    .servicespage-product-engineering-item-border:nth-child(5) {
        border-bottom: 2px solid white;
        border-right: none;
        border-top: none;
    }

    .servicespage-product-engineering-item-border:nth-child(6) {
        border-top: none;
        border-bottom: none;
    }
}
</style>

