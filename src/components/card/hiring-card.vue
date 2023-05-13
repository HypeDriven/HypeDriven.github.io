<template>
    <div elevation="4"
        class="6xl:h-[1050px] 3xl:h-[950px] xl:h-[750px] lg:h-[700px] md:h-[540px] flex gap-10 md:gap-6 lg:gap-16 p-6 sm:p-16 xl:p-16 lg:p-2 4xl:px-52 5xl:px-64 6xl:px-80 7xl:px-96 md:flex-nowrap"
        :class="reverse ? 'flex-row-reverse' : ''">
        <div class="w-[50%] hiringImgWrapper lg:block md:hidden sm:hidden xs:hidden xxs:hidden">   
            <img class="hiringImg hiring-cloud" :src="url4" data-speed="3"/>
            <img class="hiringImg" :src="url1" data-speed="-2"/> 
            <img class="hiringImg hiring-persons" :src="url2" data-speed="-1"/>
            <img class="hiringImg hiring-fly-elements" :src="url3" data-speed="-3"/>
            
        </div>
        <div class="hidden lg:hidden md:flex md:w-[50%] md:self-center justify-center">
            <img :src="weAreHiringMobile"/>
        </div>
        <div class="md:w-[50%] sm:w-[100%] xs:w-[100%] xxs:w-[100%]  flex z-10">
            <slot></slot>
        </div>
    </div>
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
    props: ["reverse", "url1", "url2", "url3", "url4"],
    data: function () {
        return {
           hoverClass: '',
           weAreHiringMobile: require('@/assets/img/images/home-page-hiring-mobile-img.png'),
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
    .hiring-cloud {
        max-width: 100%;
        top: 0;
        left: -80%;
    }
    @media (min-width: 2560px) {
        .hiringImg {
            right: 120px;
        }
        .hiring-fly-elements {
            left: 175px;
            bottom: 325px;
        }
        .hiring-persons {
            bottom: 325px;
            right: 180px;
        }
    }
    @media (min-width: 2421px) and (max-width: 2559.5px) {
        .hiringImg {
            right: 120px;
        }
        .hiring-fly-elements {
            left: 115px;
            bottom: 325px;
        }
        .hiring-persons {
            bottom: 325px;
            right: 180px;
        }
    }
    @media (min-width: 2300px) and (max-width: 2420.5px) {
        .hiringImg {
            right: 120px;
        }
        .hiring-fly-elements {
            left: 45px;
            bottom: 325px;
        }
        .hiring-persons {
            bottom: 325px;
            right: 180px;
        }
    }
    @media (min-width: 2300px) and (max-width: 2420.5px) {
        .hiringImg {
            right: 120px;
        }
        .hiring-fly-elements {
            left: 45px;
            bottom: 325px;
        }
        .hiring-persons {
            bottom: 325px;
            right: 180px;
        }
    }
    @media (min-width: 2200px) and (max-width: 2299.5px) {
        .hiringImg {
            right: 120px;
        }
        .hiring-fly-elements {
            left: -5px;
            bottom: 325px;
        }
        .hiring-persons {
            bottom: 325px;
            right: 180px;
        }
    }
    @media (min-width: 2050px) and (max-width: 2199.5px) {
        .hiringImg {
            right: 120px;
        }
        .hiring-fly-elements {
            left: -20px;
            bottom: 325px;
        }
        .hiring-persons {
            bottom: 325px;
            right: 180px;
        }
    }
    @media (min-width: 1850px) and (max-width: 2049.7px) {
        .hiringImg {
            right: 120px;
        }
        .hiring-fly-elements {
            left: -60px;
            bottom: 225px;
        }
        .hiring-persons {
            bottom: 225px;
            right: 180px;
        }
    }
    @media (min-width: 1750px) and (max-width: 1849.5px) {
        .hiringImg {
            right: 120px;
        }
        .hiring-fly-elements {
            left: -70px;
            bottom: 225px;
        }
        .hiring-persons {
            bottom: 225px;
            right: 180px;
        }
    }
    @media (min-width: 1600px) and (max-width: 1749.5px) {
        .hiringImg {
            right: 120px;
        }
        .hiring-fly-elements {
            left: 40px;
            bottom: 225px;
        }
        .hiring-persons {
            bottom: 225px;
            right: 180px;
        }
    }
    @media (min-width: 1440px) and (max-width: 1599.5px) {
        .hiringImg {
            bottom: 75px;
            right: 40px;
        }
        .hiring-fly-elements {
            left: 20px;
            bottom: 100px;
        }
    }
    @media (min-width: 1280px) and (max-width: 1439.5px) {
        .hiringImg {
            bottom: 75px;
            right: 20px;
        }
        .hiring-fly-elements {
            left: -20px;
            bottom: 90px;
        }
    }
    @media (min-width: 1024px) and (max-width: 1279.5px) {
        .hiringImg {
            bottom: 75px;
            right: 20px;
        }
        .hiring-fly-elements {
            left: -20px;
        }
    }
    @media (min-width: 768px) and (max-width: 1023px) {
        .hiringImg {
            bottom: 45px;
            right: -15px;
        }
        .hiring-persons {
            top: 180px;
            left: 50px;
        }
        .hiring-fly-elements {
            left: 15px;
        }
    }
</style>