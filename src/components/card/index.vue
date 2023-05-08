<template>
    <v-card elevation="4"
        class="flex gap-10 md:gap-6 lg:gap-16 p-6 xxs:px-1 xs:px-2 sm:px-2 md:px-0 lg:py-10 lg:px-0 xl:p-16 xs:h-[360px] md:h-[420px] lg:h-[550px] xl:h-[680px] 2xl:h-[740px] 3xl:h-[900px] md:flex-nowrap"
        :class="reverse ? 'flex-row-reverse' : ''">
        <div class="w-[50%] md:w-1/2 imgsWrapper xs:hidden xxs:hidden">   
            <img class="animation-layer image1 border-b-2 border-white" :src="url1" /> 
            <img v-if="url2" class="animation-layer image2" :src="url2"/>
            <img v-if="url3" class="animation-layer image3" :src="url3"/>
        </div>
        <div class="w-[50%] md:w-1/2 flex xs:w-[100%] xxs:w-[100%]">
            <slot></slot>
        </div>
    </v-card>
</template>

<script>
export default {
    name: "CardComponent",
    props: ["reverse", "url1", "url2", "url3"],
    data: function () {
        return {
            
        }
    }
};
</script>

<style>
.imgsWrapper {
    transform-style: preserve-3d;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
}

.animation-layer {
    position: absolute;
}

.image1 {
    height: 100%;
    width: 100%;
    z-index: 1;
   
}

.image2 {
    cursor: pointer;
    z-index: -1;
    width: 100%;
    animation: bounce1 5s .2s ease-in-out infinite;
} 

.image3 {
    cursor: pointer;
    z-index: -2;
    width: 100%;
    animation: bounce1 8s .5s ease-in-out infinite;
} 

@keyframes bounce1 {
        0%{
            transform: translateY(0px); /*40px*/
            
        }
        50%{
            transform: translateY(50px); /*0px*/
        }
        100%{
            transform: translateY(0px); /*40px*/
        }
    }
</style>
