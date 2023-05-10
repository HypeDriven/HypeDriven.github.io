<template>
    <v-card elevation="4"
        class="w-full h-auto md:h-80 flex justify-center text-black flex-col gap-10 px-44 py-60">
       <slot></slot>
    </v-card>
</template>

<script>
export default {
    name: "WhyUsCardComponent",
    data: function () {
        return {
           
        }
    }
};

</script>

<style>
</style>
