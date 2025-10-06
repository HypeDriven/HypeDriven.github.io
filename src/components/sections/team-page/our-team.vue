<template>
    <SectionContainer class="bg-secondary-bg xxs:px-4 xxs:pt-[40px] xxs:pb-12 xs:px-4 xs:pt-[40px] xs:pb-12 sm:px-4 sm:pt-[40px] sm:pb-12">
        <SectionTitle class="text-[#00007E] text-center xxs:text-5xl">
            {{ $t('teamPage.ourTeam.title') }}
        </SectionTitle>
        <SectionSubTitle class="text-black h-fit max-w-4xl m-auto text-2xl xxs:text-xl text-center">
            {{ $t('teamPage.ourTeam.subtitle') }}
        </SectionSubTitle>
        <div class="grid xxs:grid-rows-6 xxs:grid-cols-2 xxs:gap-2 xs:grid-rows-6 xs:grid-cols-2 xs:gap-4 sm:grid-rows-6 sm:grid-cols-2 sm:gap-8 md:grid-rows-6 md:grid-cols-3 md:gap-8 xl:grid-rows-5 xl:grid-cols-4 xl:gap-10 1xl:gap-12 3xl:gap-20"> 
            <TeamMember v-for="(teamMember, index) in ourTeamMembers" :key="index"> 
            <div class=" max-w-[100%] flex flex-col cursor-pointer pb-2" :class="{'bg-[#00007E]': teamMember.isHovered}" 
            :style="{color: teamMember.isHovered ? 'white' : '#00007E'}" 
            @mouseenter="teamMember.isHovered=true" @mouseleave="teamMember.isHovered=false">
                <img :src="teamMember.avatar" class="border-[14px] xxs:border-[10px] bg-[#00007E] border-[#00007E]" :class="{'rounded-full ': !teamMember.isHovered}"/>
                <span class="text-[20px] text-center mt-5 font-bold">{{ teamMember.name }}</span>
                <span class="text-center xxs:text-base">{{ teamMember.position }}</span>
            </div>
            </TeamMember>
        </div>
        <SectionSubTitle class="text-black h-fit max-w-4xl m-auto text-2xl xxs:text-xl text-center">
            {{ $t('teamPage.ourTeam.text') }}
        </SectionSubTitle>
        <router-link to="/careers/vacancies" class="m-auto xxs:w-full xs:w-full sm:w-full">
            <Button class="xxs:w-full xxs:text-lg xs:w-full sm:w-full">{{ $t('button.lookvacancies') }}</Button>
        </router-link>
    </SectionContainer>
</template>

<script>
import SectionContainer from "../container.vue";
import SectionTitle from "../title";
import SectionSubTitle from "../sub-title.vue";
import Button from "../../buttons";
import TeamMember from "./team-member.vue";
export default {
    name: "TeamPageOurTeamComponent",
    components: {
        SectionContainer,
        SectionTitle,
        SectionSubTitle,
        Button,
        TeamMember
    },
    data: function() {
        return {
            ourTeamMembers: []
        }
    }
}
</script>
