<template>
    <Header/>
    <SectionContainer class="gap-0 bg-main-bg">
        <div class="text-lg">
            <router-link to="/careers">
                <span class="text-white">Careers > </span>
            </router-link>
            <router-link to="/careers/vacancies">
                <span class="text-white">Vacancies > </span>
            </router-link>
            <span class="text-[#00007E]">{{ vacancy.title }}</span>
        </div>
        <div class="flex justify-center gap-16 mt-20">
            <div class="max-w-[45%]">
                <img :src="vacancyDetailsLogo"/>
            </div>
            <div class="max-w-[55%]"> <!---->
                <SectionTitle class="text-white h-fit mb-12">
                    {{ vacancy.title }}
                </SectionTitle>
                <div class="p-5 mb-5">
                    <BodyText>
                        A few general words about this vacancy and cooperation with Hypedriven. Habitant imperdiet rutrum id accumsan rhoncus euismod tellus fringilla.
                    </BodyText>
                    <BodyText class="font-bold mt-5">
                        Employment:
                        <span class="bg-white max-w-[90px] rounded-lg text-center font-normal mt-2 p-1">{{ vacancy.type }}</span>
                    </BodyText>
                    <BodyText class="font-bold mt-5">
                        English: <span class="bg-[#6FC7D0] text-[#00007E] p-1 rounded-lg font-normal">{{ vacancy.details.english }}</span>
                    </BodyText> 
                </div>
                <SectionSubTitle class="text-[#00007E] text-2xl font-bold ml-[-120px] mb-[-10px] uppercase">
                    Skills
                </SectionSubTitle>
                <div class="border-line"></div>
                <div class="p-5 border-b-2 border-white">
                    <div class="flex flex-wrap gap-4 max-w-[500px] py-3 border-l-2 ml-[-50px] pl-[30px]">
                        <div v-for="(skill, index) in vacancy.details.skills" :key="index" class="skillItemHover">
                            <span class="p-2 text-lg bg-[#2892FF] text-white rounded-lg">{{ skill }}</span>
                        </div>
                    </div>
                </div>
                <div class="border-b-2 border-white pb-4">
                    <SectionSubTitle class="text-[#00007E] text-2xl font-bold text-left ml-[-250px] mt-[-20px] uppercase">
                        Responsibilities
                    </SectionSubTitle>
                    <div v-for="(item, i) in vacancy.details.responsibilities" :key="i">
                        <div class="flex my-4">
                            <div class=" inline-block rounded-full w-3 h-3 bg-white mt-[6px] ml-[-35px] mr-[25px]"></div>
                            <BodyText class="text-black">{{ item }}</BodyText>
                        </div>
                    </div>
                </div>
                <div>
                    <SectionSubTitle class="text-[#00007E] text-2xl font-bold text-left ml-[-225px] mt-[-25px] uppercase">
                        Requirements
                    </SectionSubTitle>
                    <div v-for="(item, i) in vacancy.details.requirements" :key="i">
                        <div class="flex my-4">
                            <div class=" inline-block rounded-full w-3 h-3 bg-white mt-[6px] ml-[-35px] mr-[25px]"></div>
                            <BodyText class="text-black">{{ item }}</BodyText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Button class="rounded-3xl mt-10" @click="showPopUpForm=true">{{ $t('button.clickToApply') }}</Button>
        <ApplyForm v-if="showPopUpForm" @hide-form="hideFormPopUp" class="z-10" :vacancyId="vacancy.id"/>
        <div class="bg-primary-bg flex mt-20 hover:border-[2px]">
            <div class="p-14 pt-20">
                <SectionTitle class="text-white">{{ $t('careersPage.findYourDreamJob.canNotFound.title') }}</SectionTitle>
                <SectionSubTitle class="text-white text-[16px] mt-10">{{ $t('careersPage.findYourDreamJob.canNotFound.subtitle') }}<a href="mailto:career@ukrainiansoftware.com" class="text-[#66C3CD]"> mailto:career@ukrainiansoftware.com</a></SectionSubTitle>
            </div>
            <img :src="vacancyJobImg"/>
        </div>

        
        
    </SectionContainer>
    <Footer/>
</template>

<script> 
import Header from "@/components/header";
import Footer from "@/components/footer";
import SectionContainer from "../container";
import SectionTitle from "../title";
import vacancies from "./vacancy-storage.js";
import SectionSubTitle from "../sub-title.vue";
import BodyText from "../../text/body/body.vue"
import Button from "../../buttons";
import ApplyForm from "./vacancy-apply-form.vue";
export default {
    name: "CareersPageVacancyDetailsComponent",
    components: {
    Header,
    Footer,
    SectionContainer,
    SectionTitle,
    BodyText,
    SectionSubTitle,
    Button,
    ApplyForm
},
    data: function () {
        return {
            vacancies,
            vacancy: {
                type: Object
            },
            vacancyDetailsLogo: require('@/assets/img/images/vacancy-details-logo.png'),
            borderImgLine: require('@/assets/img/images/vacancydetails-border-img-line.png'),
            vacancyJobImg: require('@/assets/img/images/careerspage-findyourjob-searchbar-img.png'),
            showPopUpForm: false
        }
    },
    methods: {
        hideFormPopUp() {
            this.showPopUpForm = false
        }
    },  
    created() {
        const vacancyId = this.$route.params.id;
        this.vacancy = this.vacancies.find((vacancy) => vacancy.id === parseInt(vacancyId));
    }
}
</script>

<style>
.border-line {
    background-image: url('@/assets/img/images/vacancydetails-border-img-line.png');
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 3px;
}
.skillItemHover:hover {
        transition: .4s;
        transform: scale(1.1);
    }
</style>