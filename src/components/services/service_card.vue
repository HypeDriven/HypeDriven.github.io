<template>
    <v-card elevation="4" class="mx-auto w-full h-80 service_card text-white flex justify-center items-center">
        <slot></slot>
    </v-card>
</template>

<script>
export default {
    name: "ServiceCardComponent",
};
</script>

<style>
.service_card {
    /*background: rgba(232, 232, 255, 0.1);*/
    /* border-top: 1px solid rgb(255, 255, 255); */
    /* border-bottom: 1px solid rgb(255, 255, 255); */
    /* BG */

    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */
}
</style>
