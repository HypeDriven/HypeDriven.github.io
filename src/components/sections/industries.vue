<template>
    <SectionContainer>
        <div class="flex flex-col gap-8 max-w-lg m-auto">
            <SectionTitle class="text-white h-fit m-auto text-4xl max-w-xl px-2 text-center">
                Services
            </SectionTitle>
        </div>
        <div>
            <Carousel>
                <div class="h-44 max-w-xs bg-white">
                    <h3>dkjfhdkjfhdkjfh</h3>
                </div>
                <div class="h-44 max-w-xs bg-white">
                    <h3>dkjfhdkjfhdkjfh</h3>
                </div>
                <div class="h-44 max-w-xs bg-white">
                    <h3>dkjfhdkjfhdkjfh</h3>
                </div>
            </Carousel>
        </div>
    </SectionContainer>
</template>

<script>
import SectionContainer from "./container";
import SectionTitle from "./title";
import Carousel from "../carousel";
export default {
    name: "IndustriesSectionComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Carousel
    },
    data: function () {
        return {

        };
    }
};
</script>
