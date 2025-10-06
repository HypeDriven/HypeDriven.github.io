<template>
    <div
        class="shadow-lg w-full h-auto md:h-80 rounded-[200px] sm:rounded-[100px] xs:rounded-[70px] xxs:rounded-[50px] testimony_card flex justify-center text-black items-center flex-col 1xl:gap-10 xl:gap-6 lg:gap-4 md:gap-5 sm:gap-5 xs:gap-5 xxs:gap-7 lg:px-44 md:px-28 lg:py-48 md:py-48 sm:px-12 sm:py-16 sm:mr-12 xs:px-10 xs:py-14 xs:mr-14 xxs:px-8 xxs:py-10 xxs:mr-14 relative">
        <img :src="quoteImg" class="absolute top-0 left-24 lg:w-[77px] sm:w-[60px] sm:left-3 xs:w-[40px] xs:left-8 xxs:w-[35px] xxs:left-8"/>
        <div class="xl:text-2xl lg:text-lg sm:text-lg xs:text-base xxs:text-base text-center">
            {{ message }}
        </div>
        <img :src="stars" class="lg:w-[160px] md:w-[100px] sm:w-[120px] xs:w-[100px] xxs:w-[80px]"/>
        <div class="flex flex-col gap-2">
            <div class="1xl:text-2xl xl:text-xl lg:text-lg sm:text-lg xs:text-base xxs:text-sm text-primary-button font-extrabold text-center">
                {{ fullName }}
            </div>
            <div class="1xl:text-2xl xl:text-xl lg:text-lg sm:text-lg xs:text-base xxs:text-sm text-primary-button text-center">
                {{ position }}
            </div>
        </div>
        <img :src="quoteImg" class="absolute bottom-0 right-24 rotate-180  lg:w-[77px] sm:w-[60px] sm:right-3 xs:w-[40px] xs:right-8 xxs:w-[35px] xxs:right-8"/>
    </div>
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
}
</style>
