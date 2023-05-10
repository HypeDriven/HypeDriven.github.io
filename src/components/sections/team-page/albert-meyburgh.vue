<template>
    <SectionContainer class="albert-component-bg">
        <div class="flex justify-around relative">
            <div class="max-w-[50%]" > <!--@mousemove="moveDiamond" ref="diamondContainer"-->
                <img :src="albertAvatar"/>
                <div class="absolute w-[300px] h-[150px]" :style="{ left: 550 + diamondLeft + 'px', top: 220 + diamondTop + 'px' }" @mousemove="moveDiamond" ref="diamondContainer" :class="{'bg-white rounded-3xl': showContactUs}">
                    <img :src="diamond" class="relative z-10 cursor-pointer" :style="{ left: -70 + diamondLeft + 'px', top: diamondTop + 'px' }" @mouseenter="showContactUs=true" @mouseleave="showContactUs=false"/>
                    <img :src="diamondStart" class="absolute diamond-star z-20" :style="{ left: diamondLeft + 'px', top: -35 + diamondTop + 'px' }"/>
                    <Button v-if="showContactUs" class="absolute top-[50px] right-[40px] z-10 rounded-3xl text-[#00007E] bg-[#66C3CD]">Contact Albert</Button>
                </div>
                 
            </div>
            <div class="max-w-[50%] p-20">
                <SectionTitle class="text-white h-fit mb-4">{{ $t('teamPage.albertMeyburgh.title') }}</SectionTitle>
                <span class="text-[#00007E]">{{ $t('teamPage.albertMeyburgh.position') }}</span>
                <SectionSubTitle class="mt-8 text-white h-fit text-2xl">{{ $t('teamPage.albertMeyburgh.subtitle') }}</SectionSubTitle>
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
</style>