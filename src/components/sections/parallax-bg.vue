<template>
    <div class="parallax-bg" :style="{backgroundImage: 'url('+ bgImage +')'}"></div>
</template>

<script>
export default {
    name: "ContactUsParallaxComponent",
    props: {
        bgImage: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.parallax-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    z-index: -1;
    background-position: bottom;
}
@media (min-width: 576px) and (max-width: 767.5px) {
    .parallax-bg {
        background-position: 70% 100%;
    }
}
@media (min-width: 425px) and (max-width: 575.5px) {
    .parallax-bg {
        background-position: 70% 100%;
    }
}
@media (min-width: 320px) and (max-width: 424.5px) {
    .parallax-bg {
        background-position: 70% 100%;
    }
}
</style>