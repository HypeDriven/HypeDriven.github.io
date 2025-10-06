<template>
    <SectionContainer>
        <div class="text-white pt-[20px] pb-[50px] md:px-0 px-[4px] xxs:px-4">
            <h1 class="text-center text-6xl mb-[60px] font-normal xxs:text-5xl xxs:mb-[45px] xs:mb-[45px] xxs:max-w-xs xs:max-w-sm xxs:m-auto xs:m-auto">Our <strong class="font-black">Achievements</strong></h1> 
            <div class="flex justify-around xxs:hidden xs:hidden sm:hidden">
                <div class="text-center">
                    <h1 class="lg:text-6xl md:text-5xl sm:text-5xl font-black mb-[15px]">20+</h1>
                    <span class="md:text-lg sm:text-xl">IT</span>
                    <span class="block md:text-lg sm:text-xl">professionals</span>
                </div>
                <div class="h-auto border-l-2 border-white"></div>
                <div class="text-center">
                    <h1 class="lg:text-6xl md:text-5xl sm:text-5xl font-black mb-[15px]">6</h1>
                    <span class="md:text-lg sm:text-xl">Countries of origin</span>
                    <span class="block md:text-lg sm:text-xl"> of our employees</span>
                </div> 
                <div class="h-auto border-l-2 border-white"></div>
                <div class="text-center">
                    <h1 class="lg:text-6xl md:text-5xl sm:text-5xl font-black mb-[15px]">100%</h1>
                    <span class="md:text-lg sm:text-xl">Recurring</span>
                    <span class="block md:text-lg sm:text-xl">customers</span>
                </div> 
                <div class="h-auto border-r-2 border-white"></div>
                <div class="text-center">
                    <h1 class="lg:text-6xl md:text-5xl sm:text-5xl font-black mb-[15px]">5+</h1>
                    <span class="md:text-lg sm:text-xl">Years</span>
                    <span class="block md:text-lg sm:text-xl">of expertise</span>
                </div>
            </div>
            <div class="hidden xxs:grid xs:grid sm:grid grid-cols-2 grid-rows-2 bg-white gap-[1px]">
                <div class="text-center bg-primary-bg p-5">
                    <h1 class="text-5xl font-black">20+</h1>
                    <span class="text-xl">IT</span>
                    <span class="block text-xl">professionals</span>
                </div>
                <div class="text-center bg-primary-bg p-5">
                    <h1 class="text-5xl font-black">6</h1>
                    <span class="text-xl">Countries of origin</span>
                    <span class="block text-xl"> of our employees</span>
                </div>
                <div class="text-center bg-primary-bg p-5">
                    <h1 class="text-5xl font-black">100%</h1>
                    <span class="text-xl">Recurring</span>
                    <span class="block text-xl">customers</span>
                </div>
                <div class="text-center bg-primary-bg p-5">
                    <h1 class="text-5xl font-black">5+</h1>
                    <span class="text-xl">Years</span>
                    <span class="block text-xl">of expertise</span>
                </div>
            </div>
        </div>
    </SectionContainer>
</template>

<script>
    import SectionContainer from "../container";
    export default {
        name: "OurGoalsComponent",
        components: {
            SectionContainer
        }
    }
</script>
