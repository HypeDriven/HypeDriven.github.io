<template>
    <div class="w-72 h-72 industry_card text-white flex relative shadow-lg" :style="{ backgroundImage: 'url(' + img + ')' }">
        <div class="bottom-5 left-5 absolute font-bold text-lg">
            {{ title }}
        </div>
    </div>
</template>

<script>
export default {
    name: "IndustryCardComponent",
    props: ["img", "title"]
};
</script>

<style>
.industry_card {
    background: rgba(232, 232, 255, 0.1);
    border: 1px solid rgba(232, 232, 255, 0.1);
    /* BG */

    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 30px;

}
</style>
