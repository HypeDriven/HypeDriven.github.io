<template>
    <div class="mx-auto w-full xl:h-[450px] lg:h-auto md:h-auto sm:h-auto xs:h-auto xxs:h-auto service_card text-white flex justify-center items-center">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "ServiceCardProdEngComponent",
};
</script>

<style>
.service_card {
    backdrop-filter: blur(20px);
}
</style>
