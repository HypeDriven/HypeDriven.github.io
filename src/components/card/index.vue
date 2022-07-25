<template>
    <v-card elevation="4"
        class="card flex gap-10 md:gap-6 lg:gap-16 p-6 sm:p-16 lg:p-16 flex-wrap md:flex-nowrap justify-between"
        :class="reverse ? 'flex-row-reverse' : ''">
        <img class="w-full md:w-1/2 image" :src="url" />
        <div class="w-full md:w-1/2 flex">
            <slot></slot>
        </div>
    </v-card>
</template>

<script>
export default {
    name: "CardComponent",
    props: ["reverse", "url"],
    data: function () {
        return {
            
        }
    }
};
</script>

<style>
.card {
    background: rgba(232, 232, 255, 0.1);
    border: 1px solid rgba(232, 232, 255, 0.1);
    /* BG */

    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 60px;

}

.image {
    max-height: 600px;
    border-radius: 60px;
}
</style>
