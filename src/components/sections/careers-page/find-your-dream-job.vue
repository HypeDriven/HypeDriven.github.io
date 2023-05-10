<template>
    <SectionContainer class="gap-0 bg-primary-bg">
        <SectionTitle class="text-white h-fit text-center mb-10">
            {{ $t('careersPage.findYourDreamJob.title') }}
        </SectionTitle>
        <div class="max-w-[500px] text-base text-center m-auto mb-20">
            <span class="text-white text-2xl">You can use search and filter below to find the job you want faster</span>
        </div>
        <div class="flex mb-20"> <!--justify-between-->
            <div class="flex justify-between rounded-3xl w-[100%] bg-white py-2">   <!---->
                <div class="relative w-full border-r-2 mr-2"> <!--py-1 rounded-l-3xl-->
                    <img :src="searchBarIcon" class=" absolute left-[10px] translate-y-[20%]"/>
                    <input  class="p-2 px-12 rounded-3xl w-[100%]" 
                    placeholder="Write title of job"
                    type="text"
                    v-model="searchQuery"
                    maxlength="30"/> <!--border-r-2-->
                    <img :src="crossSearchBarIcon" class=" absolute right-[10px] top-[50%] translate-y-[-50%] cursor-pointer"
                    @click="searchQuery=''"/> 
                </div>
              
                <select v-model="filter" class="text-[#00007E] rounded-r-3xl ">
                    <option class="bg-[white]" v-for="(option, index) in options" :key="index" :value="option.value">
                        {{ option.label }}
                    </option>
                </select>
            </div>
            
            <!-- <Button class="rounded-3xl">{{ $t('button.findTheJob') }}</Button> -->
        </div>
        <div v-if="filteredVacancies.length == 0" class="text-lg text-center mb-20">
            <span class="text-white text-2xl">Unfortunately, we couldn't find any results to match your query.</span>
        </div>
        <FindYourDreamJobItem v-for="(item, index) in filteredVacancies" :key="index" @mouseover="item.isHoverd=true" @mouseout="item.isHoverd=false">
            <router-link to="/careers/vacancies">
            <div class="flex border-y-2 border-[#ffffff] cursor-pointer" v-bind:class="item.isHoverd ? 'bg-[#66C3CD] border-x-2' : 'bg-[#00007E]'">
                <div class="flex p-4 w-full flex-col justify-center">
                    <SectionSubTitle class="h-fit text-3xl font-bold text-left ml-6"
                    v-bind:class="item.isHoverd ? 'text-[#00007E]' : 'text-[#66C3CD]'"
                    >{{ item.title }}</SectionSubTitle>
                </div>
                <div class="p-4 cursor-pointer">
                    <img v-if="!item.isHoverd" :src="contentButtonArrow1">
                    <img v-if="item.isHoverd" class="w-[56px]" :src="contentButtonArrow2">
                </div>
            </div>
            </router-link>
        </FindYourDreamJobItem>

        <router-link to="/careers/vacancies">
            <Button class="rounded-3xl mt-20 w-full">{{ $t('button.seeAll') }}</Button>
        </router-link>
        
        <div class="bg-main-bg flex mt-20 hover:border-[2px]">
            <div class="p-14 pt-20">
                <SectionTitle class="text-[#00007E]">{{ $t('careersPage.findYourDreamJob.canNotFound.title') }}</SectionTitle>
                <SectionSubTitle class="text-white text-[16px] mt-10">{{ $t('careersPage.findYourDreamJob.canNotFound.subtitle') }}<a href="mailto:career@ukrainiansoftware.com" class="text-[#00007E]"> mailto:career@ukrainiansoftware.com</a></SectionSubTitle>
            </div>
            <img :src="findYourJobImg"/>
        </div>

    </SectionContainer>
</template>

<script> 
import SectionContainer from "../container";
import SectionTitle from "../title";
import SectionSubTitle from "../sub-title.vue";
import Button from "../../buttons";
import FindYourDreamJobItem from "./find-your-job-item.vue";
import vacancies from "./vacancy-storage.js";
export default {
    name: "CareersPageFindYourDreamJobComponent",
    components: {
        SectionContainer,
        SectionTitle,
        SectionSubTitle,
        Button,
        FindYourDreamJobItem
    },
    data: function () {
        return {
            vacancies,
            searchQuery: '',
            filter: "",
            notFound: false,
            enterText: false,
            findYourJobImg: require('@/assets/img/images/careerspage-findyourjob-searchbar-img.png'),
            searchBarIcon: require('@/assets/img/images/industriespage-hero-searchbar-icon.svg'),
            crossSearchBarIcon: require('@/assets/img/images/industriespage-hero-searchbar-cross-icon.svg'),
            contentButtonArrow1:  require('@/assets/img/images/aboutpageArrowImg.svg'), 
            contentButtonArrow2: require('@/assets/img/servicesArrowImg.svg'),
            options: [
                { label: "All jobs", value: "" },
                { label: "Full-time", value: "Full-time" },
                { label: "Part-time", value: "Part-time" },
            ],
            /*vacancies: [
                {title: "Xamarin Developer", type: 'part-time', isHoverd: false},
                {title: "C# and Solidity Software Engineer", type: 'full-time', isHoverd: false},
                {title: "DevOps Engineer", type: 'full-time', isHoverd: false},
                {title: "Frontend Engineer", type: 'part-time',isHoverd: false},
                {title: "Project manager",  type: 'part-time', isHoverd: false}
            ]*/
        }
    }, 
    computed: {
        filteredVacancies() {
            let filteredVacancies = this.vacancies;

            if(this.searchQuery) {
                filteredVacancies = filteredVacancies.filter((item) => {
                    return item.title.toLowerCase().includes(this.searchQuery.toLowerCase().trim());
                })
            }

            if(this.filter) {
                filteredVacancies = filteredVacancies.filter((item) => {
                    return item.type === this.filter;
                });
            }

            return filteredVacancies
        }
    }
}
</script>

<style>
</style>