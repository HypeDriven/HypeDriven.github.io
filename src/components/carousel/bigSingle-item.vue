<template>
    <transition :name="transitionEffect">
        <div class="big-carousel-item cursor-pointer" v-show="currentSlide == index" @mouseenter="$emit('mouseenter')" @mouseout="$emit('mouseout')">
            <img :src="itemData.img" class="industiesImg">
        </div>
    </transition>
 </template>
 
 <script>
 
 export default {
     name: "big-carousel-item",
     emits: ['mouseenter', 'mouseout'],
     props: {
        itemData: {
             default: () => {}
        }, 
        currentSlide: Number,
        index: Number,
        direction: String
     },
    computed: {
        transitionEffect() {
            return this.direction === "up" ? "slide-in" : "slide-out";
        }
    }
 }
 </script>
 
 <style>
    .big-carousel-item {
        width: 100%;
        height: 100%;
    }
    .industiesImg {
       width: 100%;
       padding-left: 0px;
    }
    .slide-in-enter-active,
    .slide-in-leave-active,
    .slide-out-enter-active,
    .slide-out-leave-active  {
        opacity: 1;
        transition: all .7s ease-in-out;
    }
    /*.slide-in-enter-from {
        transform: translateX(-0%);
    }
    .slide-in-leave-to {
        transform: translateX(100%);
    }
    .slide-out-enter-from {
        transform: translateX(100%);
    }
    .slide-out-leave-to {
        transform: translateX(-100%);
    }*/
    /*.slide-in-enter-from { 
        transform: translateY(0%); /*-100% 
     } 
    .slide-in-leave-to {
        transform: translateY(100%);
    }
    .slide-out-enter-from {
        transform: translateY(100%);
    }
    .slide-out-leave-to {
        transform: translateY(-0%);
    }*/
    /*.slide-in-enter-from {
        transform: scale(1);
    }
    .slide-in-leave-to {
        transform: scale(0.6);
    }
    .slide-out-enter-from {
        transform: scale(0.6);
    }
    .slide-out-leave-to {
        transform: scale(0.6);
    }*/

    .slide-in-enter-from { 
        opacity: .5; 
    } 
    .slide-in-leave-to {
        opacity: .5;
    }
    .slide-out-enter-from {
        opacity: .5;
    }
    .slide-out-leave-to {
        opacity: .5;
    }

 </style>