<template>
    <SectionContainer>
        <div class="flex flex-col">
            <SectionTitle class="text-white h-fit text-[40px] max-w-3xl mb-6">
                {{$t('servicespage.productEngineering.title')}}
            </SectionTitle>
            <div class="w-[60px] border-b-4 border-white"></div>
            <div class="grid grid-rows-3 gap-[1px] grid-cols-2 mt-10 bg-white">
                <ServiceCard v-for="(itemData, index) in productEngineeringItems" :key="index" class="bg-[#00007E] w-full h-[350px]">
                    <div class="servicespage-product-engineering-item"  
                    :style="{backgroundImage: itemData.hover? `url(`+ itemData.bgImg +`)` : '',}"
                    v-bind:class="[itemData.hover ? `border-[2px]`: '']"
                    @mouseover="itemData.hover=true" 
                    @mouseout="itemData.hover=false">
                    <div class="flex flex-row justify-between" >
                        <div class="w-[25%]">
                            <img :src="itemData.icon"/>
                        </div>
                        <div class="w-[75%]">
                            <Header4 class="text-[#66C3CD] font-bold text-[40px]">
                                {{ $t(`servicespage.productEngineering.${itemData.title}`) }}
                            </Header4>
                            <BodyText class="text-white mt-6 text-[24px]">
                                {{ $t(`servicespage.productEngineering.${itemData.subtitle}`) }}
                            </BodyText>
                        </div>
                    </div>
                    <div class="servicespage-arrowImg-wrapper">
                        <img class="servicespage-arrowImg" src="@/assets/img/images/servicespage-arrow.svg" 
                        v-bind:class="[itemData.hover ? ` servicespage-arrowImg-product-engineering-hover `: '']">
                    </div>
                </div>
                </ServiceCard>
            </div>
            
            <Button class="mt-20 rounded-[30px]">{{ $t('button.requestContact') }}</Button>
        </div>
    </SectionContainer>
</template>

<script>

import SectionContainer from "../container";
import SectionTitle from "../title";
import Button from "../../buttons";
import Header4 from "../../text/header/header_4.vue";
import BodyText from "../../text/body/body.vue";
import ServiceCard from "../../services/service_card";
export default {
    name: "ServicesPageProductEngComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Button,
        Header4,
        BodyText,
        ServiceCard
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
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
}

.servicespage-arrowImg-product-engineering-hover {
    filter: brightness(0) invert(1);
    transition: .4s;
}
</style>

