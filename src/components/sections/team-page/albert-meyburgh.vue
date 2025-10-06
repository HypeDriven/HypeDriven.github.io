<template>
    <SectionContainer class="albert-component-bg sm:py-0 sm:pl-0 sm:pr-0 md:px-2 lg:px-2"> 
        <div class="flex xxs:flex-col xs:flex-col sm:flex-col justify-around relative">
            <div class="albert-block-img xxs:max-w-[100%] xxs:p-8 xs:max-w-[100%] xs:p-8 sm:max-w-[100%] sm:p-8 md:max-w-[45%] lg:max-w-[48%] xl:max-w-[50%] lg:pl-10 lg:py-0 xl:pr-10 xl:py-0 1xl:pr-20">
                <img :src="albertAvatar" class="sm:m-auto"/>
                <div class="absolute w-[300px] h-[125px] xxs:hidden xs:hidden sm:hidden md:hidden lg:hidden xl:block" :style="{ left: 520 + diamondLeft + 'px', top: 350 + diamondTop + 'px' }" @mousemove="moveDiamond" ref="diamondContainer" :class="{'bg-white rounded-3xl': showContactUs}"
                @mouseenter="showContactUs=true" @mouseleave="showContactUs=false">
                    <img :src="diamond" class="relative z-10 cursor-pointer" :style="{ left: -70 + diamondLeft + 'px', top: diamondTop + 'px' }"/> 
                    <img :src="diamondStart" class="absolute diamond-star z-20" :style="{ left: diamondLeft + 'px', top: -35 + diamondTop + 'px' }"/> 
                    <router-link to="/contact-us">
                        <Button v-if="showContactUs" class="absolute top-[40px] right-[20px] z-10 text-[#00007E] bg-[#66C3CD]">Contact Albert</Button>
                    </router-link>
                </div>
            </div>
            <div class="max-w-[50%] albert-block-text xxs:max-w-[100%] xxs:p-4 xxs:py-16 xs:max-w-[100%] xs:p-4 xs:py-16 sm:max-w-[100%] sm:p-4 sm:py-16 md:px-6 md:py-0 lg:pl-16 lg:py-0 xl:pl-24 xl:py-0 1xl:pl-24 1xl:py-20"> 
                <SectionTitle class="text-white h-fit mb-4 xxs:text-5xl md:text-5xl lg:text-6xl">{{ $t('teamPage.albertMeyburgh.title') }}</SectionTitle>
                <span class="text-[#00007E]">{{ $t('teamPage.albertMeyburgh.position') }}</span>
                <SectionSubTitle class="mt-4 text-black h-fit xxs:text-xl xs:text-2xl sm:text-2xl md:text-xl lg:text-2xl">{{ $t('teamPage.albertMeyburgh.subtitle') }}</SectionSubTitle>
            </div>
        </div>
    </SectionContainer>
</template>

<script>
import SectionContainer from "../container.vue";
import SectionTitle from "../title";
import SectionSubTitle from "../sub-title.vue";
import Button from "../../buttons";
    export default {
        name: "TeamPageAlbertComponent",
        components: {
            SectionContainer,
            SectionTitle,
            SectionSubTitle,
            Button
        },
        data: function() {
            return {
                diamondLeft: 0,
                diamondTop: 0,
                showContactUs: false,
                albertAvatar: require('@/assets/img/images/teampage-albert-avatar.png'),
                diamond: require('@/assets/img/images/team-albert-diamond.svg'),
                diamondStart: require('@/assets/img/images/team-albert-diamond-star.svg')
            }
        },
        methods: {
            moveDiamond(event) {
                const container = this.$refs.diamondContainer;
                const containerRect = container.getBoundingClientRect();
                const mouseX = event.clientX - containerRect.left;
                const mouseY = event.clientY - containerRect.top;
                const diamondX = mouseX - containerRect.width / 2;
                const diamondY = mouseY - containerRect.height / 2;
                this.diamondLeft = diamondX / 10;
                this.diamondTop = diamondY / 10;
            }
        }
    }
</script>

<style>
.albert-component-bg {
    background-image: linear-gradient(to right, #00007E 50%, #9DD3E1 50%);
    position: relative;
}
.albert-component-bg::after {
    content: "";
    display: block;
    height: 100%;
    width: 2px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
}

.diamond-star {
    animation: star 8s infinite ease-in-out;
}

@keyframes star {
    0% {
        transform: scale(1);
    }
    15% {
        transform: scale(1.1);
    }
    25% {
        transform: rotate(220deg)
    }
    50% {
        transform: scale(0.9);
    }
    75% {
        transform: rotate(-200deg);
    }
    90% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}

@media (min-width: 768px) and (max-width: 1023.5px) {
    .albert-block-img {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }   
}

@media (min-width: 576px) and (max-width: 767.5px) {
    .albert-component-bg {
        background-image: none;
    }
    .albert-block-img {
        background-color: #00007E;
    }
    .albert-block-text {
        background-color: #9DD3E1;
        border-top: 2px solid white;
    }
    .albert-component-bg::after {
        display: none;
    }
}

@media (min-width: 425px) and (max-width: 575.5px) {
    .albert-component-bg {
        background-image: none;
    }
    .albert-block-img {
        background-color: #00007E;
    }
    .albert-block-text {
        background-color: #9DD3E1;
        border-top: 2px solid white;
    }
    .albert-component-bg::after {
        display: none;
    }
}

@media (min-width: 320px) and (max-width: 424.5px) {
    .albert-component-bg {
        background-image: none;
    }
    .albert-block-img {
        background-color: #00007E;
    }
    .albert-block-text {
        background-color: #9DD3E1;
        border-top: 2px solid white;
    }
    .albert-component-bg::after {
        display: none;
    }
}
</style>