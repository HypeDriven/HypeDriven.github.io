<template>
    <SectionContainer class="bg-secondary-bg">
        <SectionTitle class="text-[#00007E] text-center">
            {{ $t('teamPage.ourTeam.title') }}
        </SectionTitle>
        <SectionSubTitle class="text-black h-fit max-w-4xl m-auto text-2xl text-center">
            {{ $t('teamPage.ourTeam.subtitle') }}
        </SectionSubTitle>
        <div class="flex flex-wrap gap-x-8 gap-y-16">
            <TeamMember v-for="(teamMember, index) in ourTeamMembers" :key="index"> 
            <div class="max-w-[25%] flex flex-col cursor-pointer pb-2" :class="{'bg-[#00007E]': teamMember.isHovered}" 
            :style="{color: teamMember.isHovered ? 'white' : '#00007E'}" 
            @mouseenter="teamMember.isHovered=true" @mouseleave="teamMember.isHovered=false">
                <img :src="teamMember.avatar" class="border-[14px] border-[#00007E]" :class="{'rounded-full ': !teamMember.isHovered}"/>
                <span class="text-[20px] text-center mt-5 font-bold">{{ teamMember.name }}</span>
                <span class="text-center">{{ teamMember.position }}</span>
            </div>
            </TeamMember>
        </div>
        <SectionSubTitle class="text-black h-fit max-w-4xl m-auto text-2xl text-center">
            {{ $t('teamPage.ourTeam.text') }}
        </SectionSubTitle>
        <router-link to="/careers/vacancies" class="m-auto">
            <Button class="rounded-3xl">{{ $t('button.lookvacancies') }}</Button>
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
            ourTeamMembers: [
                {
                    name: "Sofiia K.",
                    position: "Business Development Manager",
                    avatar: require('@/assets/img/images/teampage-ourteam-avatar1.svg'),
                    isHovered: false
                },
                {
                    name: "Daria S.",
                    position: "Executive Assistant",
                    avatar: require('@/assets/img/images/teampage-ourteam-avatar2.svg'),
                    isHovered: false
                },
                {
                    name: "Тurana S.",
                    position: "Backend Programmer",
                    avatar: require('@/assets/img/images/teampage-ourteam-avatar3.svg'),
                    isHovered: false
                },
                {
                    name: "Oleg G.",
                    position: "Principal Software Engineer",
                    avatar: require('@/assets/img/images/teampage-ourteam-avatar4.svg'),
                    isHovered: false
                },
                {
                    name: "Taisiia K.",
                    position: "QA",
                    avatar: require('@/assets/img/images/teampage-ourteam-avatar5.svg'),
                    isHovered: false
                },
                {
                    name: "Furkan Y.",
                    position: "Backend Programmer",
                    avatar: require('@/assets/img/images/teampage-ourteam-avatar6.svg'),
                    isHovered: false
                },
                {
                    name: "Elias. F",
                    position: "QA",
                    avatar: require('@/assets/img/images/teampage-ourteam-avatar7.svg'),
                    isHovered: false
                }
            ]
        }
    }
}
</script>