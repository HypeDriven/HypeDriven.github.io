<template>
    <SectionContainer class="bg-secondary-bg xxs:px-4 xxs:pt-[40px] xxs:pb-10 xs:px-4 xs:pt-[40px] xs:pb-10 sm:px-4 sm:pt-[40px] sm:pb-10"> 
        <SectionTitle class="text-[#66C3CD] tracking-wider uppercase xxs:text-5xl">{{ $t('careersPage.staffAugmentation.title') }}</SectionTitle>
        <div class="flex justify-between xl:mt-[-220px] xxs:mt-0 xs:mt-0 sm:mt-0 md:mt-[-80px] lg:mt-[-100px]">
            <SectionSubTitle class="text-[#00007E] text-6xl xxs:text-5xl font-bold flex flex-col justify-end w-[50%] xxs:w-[100%] xs:w-[100%] sm:w-[100%]">{{ $t('careersPage.staffAugmentation.subtitle') }}</SectionSubTitle>
            <div class="w-[50%] border-b-2 border-[#00007E] flex justify-end xxs:hidden xs:hidden sm:hidden">
                <img :src="careersPageStaffAugImg" class="md:w-[50%]"/>
            </div>
        </div>
        <div class="xl:grid grid-rows-3 grid-cols-6 xxs:hidden xs:hidden sm:hidden md:hidden lg:hidden">
            <div v-for="(tech, i) in technologies" :key="i" 
            class="cursor-pointer flex flex-col justify-center relative" 
            @mouseover="tech.hover=true" @mouseleave="tech.hover=false"
            > 
                <img :src="crissСross" class="absolute left-[-21px] top-[-20px]" />  
                <img v-if="tech.crissСrossLeftBottom" :src="crissСross" class="absolute left-[-21px] bottom-[-21px]" />  
                <img v-if="tech.crissСrossTopRight" :src="crissСross" class="absolute right-[-21px] top-[-21px]" />  
                <img v-if="tech.crissСrossRightBottom" :src="crissСross" class="absolute right-[-21px] bottom-[-20px]" />  
                <div class="flex justify-center p-4 py-10">     
                    <img v-if="!tech.hover" :src="tech?.img" class="" />   
                    <span v-if="tech.hover" class="text-2xl font-bold text-[#00007E]">{{tech?.title}}</span> 
                </div>
            </div>
        </div>
        <div class="xl:hidden xxs:grid xs:grid sm:grid md:grid lg:grid grid-rows-8 grid-cols-2 md:grid-rows-4 md:grid-cols-4"> 
            <div v-for="(tech, i) in technologies" :key="i" 
            class="cursor-pointer flex flex-col justify-center relative" 
            @mouseover="tech.hover=true" @mouseleave="tech.hover=false"
            > 
                <img :src="crissСross" class="staff-aug-crisscross absolute top-[0px] xxs:left-[-10px] xs:left-[-11px] sm:left-[-15px] md:left-[-20px] md:top-[-15px]" />  
                <img :src="crissСross" class="staff-aug-crisscross absolute top-[0px] xxs:right-[-10px] xs:right-[-11px] sm:right-[-15px] md:right-[-20px] md:top-[-15px]" />  
                <div class="flex justify-center p-4 py-10 md:px-2 md:py-10">     
                    <img v-if="!tech.hover" :src="tech?.img" class="xxs:w-[50px] xxs:h-[80px] xs:w-[70px] xs:h-[90px] sm:w-[80px] sm:h-[100px]" />   
                    <span v-if="tech.hover" class="text-2xl font-bold text-[#00007E]">{{tech?.title}}</span> 
                </div>
            </div>
        </div>
    </SectionContainer>
</template>

<script>
import SectionContainer from "../container";
import SectionTitle from "../title";
import SectionSubTitle from "../sub-title.vue";
export default {
    name: "CareersPageStaffAugmentationComponent",
    components: {
        SectionContainer,
        SectionTitle,
        SectionSubTitle
    },
    data: () => {
        return {
            careersPageStaffAugImg: require('@/assets/img/images/careerspage-staff-augmentation-illustr.png'),
            crissСross: require('@/assets/img/images/crisscross.svg'),
            technologies: [
                {
                    title: 'Java',
                    img: require("../../../assets/img/images/careerspage-technologies-img-Java.svg"),
                    hover: false
                },
                {
                    title: '.NET/C#',
                    img: require("../../../assets/img/images/careerspage-technologies-img-NET.svg"),
                    hover: false
                },
                {
                    title: 'PHP',
                    img: require("../../../assets/img/images/careerspage-technologies-img-PHP.svg"),
                    hover: false
                },
                {
                    title: 'Node.JS',
                    img: require("../../../assets/img/images/careerspage-technologies-img-NodeJS.svg"),
                    hover: false
                },
                {
                    title: 'Unity',
                    img: require("../../../assets/img/images/careerspage-technologies-img-Unity.svg"),
                    hover: false
                },
                {
                    title: 'Ruby',
                    img: require("../../../assets/img/images/careerspage-technologies-img-Ruby.svg"),
                    hover: false,
                    crissСrossTopRight: true,
                    crissСrossRightBottom: true
                },
                {
                    title: 'Go',
                    img: require("../../../assets/img/images/careerspage-technologies-img-Go.svg"),
                    hover: false
                },
                {
                    title: 'React',
                    img: require("../../../assets/img/images/careerspage-technologies-img-React.svg"),
                    hover: false
                },
                {
                    title: 'Python',
                    img: require("../../../assets/img/images/careerspage-technologies-img-Python.svg"),
                    hover: false
                },
                {
                    title: 'Vue.JS',
                    img: require("../../../assets/img/images/careerspage-technologies-img-Vue.svg"),
                    hover: false,
                    crissСrossRightBottom: true
                },
                {
                    title: 'JavaScript',
                    img: require("../../../assets/img/images/careerspage-technologies-img-JavaScript.svg"),
                    hover: false,
                    crissСrossRightBottom: true
                },
                {
                    title: 'IOS',
                    img: require("../../../assets/img/images/careerspage-technologies-img-IOS.svg"),
                    hover: false,
                    crissСrossRightBottom: true
                },
                {
                    title: 'Android',
                    img: require("../../../assets/img/images/careerspage-technologies-img-Android.svg"),
                    hover: false,
                    crissСrossRightBottom: true,
                    crissСrossLeftBottom: true
                },
                {
                    title: 'Flutter',
                    img: require("../../../assets/img/images/careerspage-technologies-img-Flutter.svg"),
                    hover: false,
                    crissСrossRightBottom: true
                },
                {
                    title: 'React Native',
                    img: require("../../../assets/img/images/careerspage-technologies-img-React-Native.svg"),
                    hover: false,
                    crissСrossRightBottom: true
                },
                {
                    title: 'Angular',
                    img: require("../../../assets/img/images/careerspage-technologies-img-Angular.svg"),
                    hover: false,
                    crissСrossRightBottom: true
                }
            ]
        }
    }
}
</script>

<style>
.border-crisscross-img {
    border: 2px solid;
    border-image: url('@/assets/img/images/crisscross.svg');
}
.staff-aug-crisscross {
    width: 40px;
    height: 40px;        
}
@media (min-width: 576px) and (max-width: 767.5px) {
    .staff-aug-crisscross {
        width: 30px;
        height: 30px; 
    }
}
@media (min-width: 425px) and (max-width: 575.5px) {
    .staff-aug-crisscross {
        width: 22px;
        height: 22px; 
    }
}
@media (min-width: 320px) and (max-width: 424.5px) {
    .staff-aug-crisscross {
        width: 20px;
        height: 20px; 
    }
}
</style>