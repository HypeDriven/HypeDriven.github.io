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
        transition: all 1s ease-in-out;
    }
    .slide-in-enter-from {
        transform: translateY(-100%);
    }
    .slide-in-leave-to {
        transform: translateY(100%);
    }
    .slide-out-enter-from {
        transform: translateY(100%);
    }
    .slide-out-leave-to {
        transform: translateY(-100%);
    }
 </style>