<template>
    <v-card elevation="4" class="employment-wrapper m-auto">
        <div class=" m-auto employment-parallax-wrapper">
            <div class="regular-wrapper flex flex-col justify-end gap-4">
                <Header1 class="text-[#00007E] max-w-auto text-2xl font-extrabold">
                    {{ $t('aboutpage.employment.title') }}
                </Header1>
                <BodyText class="text-black max-w-auto whitespace-pre-wrap leading-10 text-3xl font-normal">
                    {{ $t('aboutpage.employment.subtitle') }}
                </BodyText>
                <router-link to="/about-us">
                    <Button class="">{{ $t('aboutpage.button.contactus') }}</Button>
                </router-link>
            </div>
        </div>
    </v-card>
        
</template>

<script>
import Button from "../../buttons";
import Header1 from "../../text/header/header_1.vue";
import BodyText from "../../text/body/body.vue";
export default {
    name: "EmploymentSectionComponent",
    components: {
        Header1,
        BodyText,
        Button
    },
    data: function () {
        return {
        };
    }
};
</script>

<style>
.employment-wrapper {
    width: 100vw;
    height: 100vh;
    transform-style: preserve-3d;
    overflow-y: auto;
    overflow-x: hidden;
    perspective: 10px;
}

.employment-parallax-wrapper {
    position: relative;
    height: 100vh;
    width: 100vw;
    transform-style: preserve-3d;
    box-sizing: border-box;
}

.regular-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url('../../../assets/img/images/employment-bg-puzzle.png');
    background-size: cover;
    object-fit: cover;
    padding: 80px;
}
.employment-parallax-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url('../../../assets/img/images/employment-bg.png');
    background-size: cover;
    z-index: -2;
    transform: translateZ(-10px) scale(2);
}
</style>