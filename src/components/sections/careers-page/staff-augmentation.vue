<template>
    <SectionContainer class="bg-secondary-bg">
        <SectionTitle class="text-[#66C3CD] tracking-wider">{{ $t('careersPage.staffAugmentation.title') }}</SectionTitle>
        <div class="flex justify-between mt-[-200px]">
            <SectionSubTitle class="text-[#00007E] text-6xl font-bold flex flex-col justify-end w-[50%]">{{ $t('careersPage.staffAugmentation.subtitle') }}</SectionSubTitle>
            <div class="w-[50%] border-b-2 border-[#00007E] flex justify-end">
                <img :src="careersPageStaffAugImg"/>
            </div>
        </div>
        <div class="grid grid-rows-3 grid-cols-6">
            <div v-for="(tech, i) in technologies" :key="i" 
            class="cursor-pointer flex flex-col justify-center relative" 
            @mouseover="tech.hover=true" @mouseleave="tech.hover=false"
            :class="{'border-[3px] border-[#00007E]': tech.hover}">
                <img :src="crissСross" class="absolute left-[-21px] top-[-21px]" />  
                <img v-if="tech.crissСrossLeftBottom" :src="crissСross" class="absolute left-[-21px] bottom-[-21px]" />  
                <img v-if="tech.crissСrossTopRight" :src="crissСross" class="absolute right-[-21px] top-[-21px]" />  
                <img v-if="tech.crissСrossRightBottom" :src="crissСross" class="absolute right-[-21px] bottom-[-21px]" />  
                <div class="flex justify-center p-4 py-10">     
                    <img v-if="!tech.hover" :src="tech?.img" class="" />   
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