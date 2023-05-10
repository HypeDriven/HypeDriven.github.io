<template>
    <v-card elevation="4"
        class="w-full h-auto md:h-80 testimony_card flex justify-center text-black items-center flex-col gap-10 px-44 py-48 relative">
        <img :src="quoteImg" class="absolute top-0 left-24"/>
        <v-card-text class="text-2xl ">
            {{ message }}
        </v-card-text>
        <img :src="stars"/>
        <div class="flex flex-col gap-2">
            <v-card-text class="text-2xl text-primary-button font-extrabold">
                {{ fullName }}
            </v-card-text>
            <v-card-text class="text-2xl text-primary-button">
                {{ position }}
            </v-card-text>
        </div>
        <img :src="quoteImg" class="absolute bottom-0 right-24 rotate-180"/>
    </v-card>
</template>

<script>
export default {
    name: "TestimonyCardComponent",
    props: ["message", "fullName", "position"],
    data: function () {
        return {
            quoteImg: require("../../assets/img/icons/quote.svg"),
            stars: require("../../assets/img/icons/testimonial-starts.svg")
        }
    }
};
</script>

<style>
.testimony_card {
    background: #66C3CD;
    border: 1px solid rgba(232, 232, 255, 0.1);
    /* BG */

    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 200px;

}
</style>
