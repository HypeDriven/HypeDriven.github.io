<template>
    <v-card elevation="4" class="mx-auto w-72 h-72 service_card text-white flex justify-center items-center">
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
    background: rgba(232, 232, 255, 0.1);
    border: 1px solid rgba(232, 232, 255, 0.1);
    /* BG */

    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 30px;

}
</style>
