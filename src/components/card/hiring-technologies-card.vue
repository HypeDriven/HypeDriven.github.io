<template>
    <v-card elevation="4" class="w-full h-52 hiring-technologies_card text-white flex justify-center items-center">
        <slot></slot>
    </v-card>
</template>

<script>
export default {
    name: "HiringTechnologiesCardComponent",
};
</script>

<style>
.hiring-technologies_card {
    /*background: rgba(232, 232, 255, 0.1);*/
    /* border-top: 1px solid rgb(255, 255, 255); */
    /* border-bottom: 1px solid rgb(255, 255, 255); */
    /* BG */

    
    /* Note: backdrop-filter has minimal browser support */
}
</style>
