<template>
    <v-card elevation="4"
        class="card flex gap-10 md:gap-6 lg:gap-16 p-6 sm:p-16 lg:p-16  md:flex-nowrap"
        :class="reverse ? 'flex-row-reverse' : ''">
        <div class="w-[50%] md:w-1/2 hiringImgWrapper">   
            <img class="hiringImg hiring-cloud" :src="url5" data-speed="3"/>
            <img class="hiringImg" :src="url1" data-speed="-2"/> 
            <img class="hiringImg hiring-persons" :src="url2" data-speed="-1"/>
            <img class="hiringImg hiring-fly-elements" :src="url3" data-speed="-3"/>
            <img class="hiringImg hiring-arrow" :src="url4" data-speed="2"/>
            
        </div>
        <div class="w-[50%] md:w-1/2 flex">
            <slot></slot>
        </div>
    </v-card>
</template>
<script>
document.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll('.hiringImg').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/50
        const y = (window.innerHeight - e.pageY*speed)/50

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}
export default {
    name: "HiringCardComponent",
    props: ["reverse", "url1", "url2", "url3", "url4", "url5","url6"],
    data: function () {
        return {
           hoverClass: ''
        }
    },
    methods: {
        parallax: () => {
            
        }
    }
    
};
</script>

<style>
    .hiringImgWrapper {
       
        position: relative;
    }
    .hiringImg {
        position: absolute;
        object-fit: cover;
    }
    .hiring-persons {
        max-width: 80%;
        max-height: 100%;
        bottom: 75px;
        right: 80px;
        z-index: 2;
    }
    .hiring-fly-elements {
        bottom: 100px;
        right: 90px;
        z-index: 1;
    }
    .hiring-arrow {
        max-width: 95%;
        bottom: 250px;
    }
    .hiring-cloud {
        max-width: 100%;
        top: 0;
        left: -80%;
    }
</style>