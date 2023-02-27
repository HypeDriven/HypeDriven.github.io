<template>
    <v-card elevation="4"
        class="card flex gap-10 md:gap-6 lg:gap-16 p-6 sm:p-16 lg:p-16  md:flex-nowrap"
        :class="reverse ? 'flex-row-reverse' : ''">
        <div class="w-[50%] md:w-1/2 imgsWrapper">   
            <img class="paralax-layer image1 border-b-2 border-white" :src="url1" /> 
            <img v-if="url2" class="paralax-layer image22" :src="url2"/>
            <img v-if="url3" class="paralax-layer image33" :src="url3"/>
        </div>
        <div class="w-[50%] md:w-1/2 flex">
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
        //    hoverClass: ''
        }
    }
};
</script>

<style>
.card {
    height: 810px;
    /*overflow-y: auto;
    overflow-x: hidden;
    transform-style: preserve-3d;*/
}

.imgsWrapper {
    /* perspective: 10px; */
    transform-style: preserve-3d;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
}

.paralax-layer {
    position: absolute;
}

.image1,
.image2 {
    max-height: 600px;
    object-fit: cover;
}

.image1 {
    z-index: 1;
    margin-top: 90px;
}

.image2 {
    cursor: pointer;
    /* max-width: 180px; */
    /* transform: translateZ(-10px)  scale(2);  Перший варік ! */
    z-index: -1;
    /* transform: translateY(200px); */
    /* scroll-behavior: smooth; */
    /* animation: bounce1 7s .2s ease-in-out infinite; */
} 


.image22 {
    cursor: pointer;
    /* max-width: 180px; */
   
    z-index: -1;
    /* transform: translateY(200px); */
    animation: bounce1 5s .2s ease-in-out infinite;
} 

.image33 {
    cursor: pointer;
    z-index: -2;
    animation: bounce1 8s .5s ease-in-out infinite;
} 

@keyframes bounce1 {
        0%{
            /* transform: translateZ(-10px) translateY(-120px) scale(2); */
            transform: translateY(0px); /*40px*/
            
        }
        50%{
            /* transform: translateZ(-10px) translateY(120px) scale(2); */
            transform: translateY(50px); /*0px*/
            /* transform:rotateZ(30deg) */
        }
        100%{
            transform: translateY(0px); /*40px*/
        }
    }
</style>
