<template>
    <SectionContainer class="bg-primary-bg xxs:px-4 xxs:pt-[40px] xxs:pb-10 xs:px-4 xs:pt-[40px] xs:pb-10 sm:px-4 sm:pt-[40px] sm:pb-10">
        <SectionTitle class="text-white h-fit text-center xxs:text-5xl">
            {{ $t('careersPage.findYourDreamJob.title') }}
        </SectionTitle>
        <div class="max-w-[900px] text-base text-center m-auto">
            <span class="text-white text-2xl xxs:text-xl xs:text-xl">We offer a wide range of relevant and attractive job opportunities within our industry. To secure your ideal role, select a position and utilize this guide.</span>
        </div>
        <div class="flex m-auto h-[600px] xxs:h-[340px] xs:h-[400px] sm:h-[550px] mb-[-45px] xxs:mb-[0px] xs:mb-[0px] sm:mb-[0px]"> 
            <div class="img-margin">
                <img :src="howWeHireImg" class="imageAnimation"> 
            </div>
            <div class="flex flex-col ">
                <div v-for="(item, index) in howWeHireItems" :key="index">
                    <div class="flex">
                        <img :src="item.icon" class="xxs:w-[50px] xxs:h-[50px] xs:w-[60px] xs:h-[60px]"/> 
                        <span class="text-white text-[16px] xxs:text-[12px] xs:text-[14px] max-w-xs xxs:max-w-full xs:max-w-full flex flex-col justify-center ml-8">{{ item.title }}</span> 
                    </div>
                    <img v-if="item.id !== 4" :src="howWeHireLine" class="my-3 xxs:w-[50px] xs:w-[60px]" />
                </div>
            </div>
          
        </div>
        <router-link to="/careers/vacancies">
            <Button class="w-full">{{ $t('button.chooseTheJob') }}</Button> 
        </router-link>
       
    </SectionContainer>
</template>

<script>
import SectionContainer from "../container";
import SectionTitle from "../title";
import Button from "../../buttons";
export default {
    name: "CareersPageHowWeHireComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Button
    },
    data: function () {
        return {
            howWeHireImg: require('@/assets/img/images/careerspage-how-we-hire-illustr.png'),
            howWeHireLine: require('@/assets/img/images/careerspage-how-we-hire-line.svg'),
            howWeHireItems: [
                {
                    id: 1,
                    title: "Send your CV",
                    icon: require('@/assets/img/images/careerspage-how-we-hire-icon1.svg'),
                    isHoverd: false,
                    imgPosition: '0px'
                },
                {
                    id: 2,
                    title: "Have interview with our recruiter and tech specialists",
                    icon: require('@/assets/img/images/careerspage-how-we-hire-icon2.svg'),
                    isHoverd: false,
                    imgPosition: '140px'
                },
                {
                    id: 3,
                    title: "Impress our client with your experience and expertise on the next interview",
                    icon: require('@/assets/img/images/careerspage-how-we-hire-icon3.svg'),
                    isHoverd: false,
                    imgPosition: '280px'
                },
                {
                    id: 4,
                    title: "Get job offer from Hypedriven and welcome on board!",
                    icon: require('@/assets/img/images/careerspage-how-we-hire-icon4.svg'),
                    isHoverd: false,
                    imgPosition: '420px'
                }
            ]
        }
    }
}
</script>

<style>
.imageAnimation {
    cursor: pointer;
    animation: imageFly infinite 15s ease-in-out;
}
.img-margin {
    margin-right: 100px;
}
@keyframes imageFly {
    20% {
        transform: translateY(140px);
    } 
    35% {
        transform: translateY(280px);
    }
    55% {
        transform: translateY(420px);
    }
    70% {
        transform: translateY(280px);
    }
    85% {
        transform: translateY(140px);
    }
    100% {
        transform: translateY(0px);
    }
}
@media (min-width: 768px) and (max-width: 1023.5px) {
    .img-margin  {
        margin-right: 80px;
    }
}
@media (min-width: 605px) and (max-width: 767.5px) {
    .img-margin  {
        margin-right: 80px;
    }
    @keyframes imageFly {
        20% {
            transform: translateY(140px);
        } 
        35% {
            transform: translateY(280px);
        }
        55% {
            transform: translateY(420px);
        }
        70% {
            transform: translateY(280px);
        }
        85% {
            transform: translateY(140px);
        }
        100% {
            transform: translateY(0px);
        }
    }  
}
@media (min-width: 576px) and (max-width: 604.5px) {
    .img-margin  {
        margin-right: 50px;
    }
    @keyframes imageFly {
        20% {
            transform: translateY(140px);
        } 
        35% {
            transform: translateY(280px);
        }
        55% {
            transform: translateY(420px);
        }
        70% {
            transform: translateY(280px);
        }
        85% {
            transform: translateY(140px);
        }
        100% {
            transform: translateY(0px);
        }
    }  
}
@media (min-width: 425px) and (max-width: 575.5px) {
    .img-margin  {
        margin-right: 20px;
    }
    @keyframes imageFly {
        20% {
            transform: translateY(110px);
        } 
        35% {
            transform: translateY(210px);
        }
        55% {
            transform: translateY(320px);
        }
        70% {
            transform: translateY(210px);
        }
        85% {
            transform: translateY(110px);
        }
        100% {
            transform: translateY(0px);
        }
    }  
}
@media (min-width: 320px) and (max-width: 424.5px) {
    .img-margin  {
        margin-right: 0px; 
    }
    @keyframes imageFly {
        20% {
            transform: translateY(90px);
        } 
        35% {
            transform: translateY(180px); 
        }
        55% {
            transform: translateY(285px); 
        }
        70% {
            transform: translateY(180px);
        }
        85% {
            transform: translateY(90px);
        }
        100% {
            transform: translateY(0px);
        }
    }  
}
</style>