<template>
    <SectionContainer>
        <div class="flex flex-col gap-8 max-w-lg m-auto">
            <SectionTitle class="text-white h-fit m-auto text-4xl max-w-xl px-2 text-center">
                Services
            </SectionTitle>
            <SectionSubTitle class="text-accent-orange h-fit m-auto text-2xl max-w-3xl px-2 text-center">
                We are passionate about what we are doing
                that’s why we are striving to ensure the high quality
                of the solutions we develop
            </SectionSubTitle>
        </div>
        <div>
            <Carousel>
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
import SectionSubTitle from "./sub-title";
import Carousel from "../carousel";
export default {
    name: "ServicesSectionComponent",
    components: {
        SectionContainer,
        SectionTitle,
        SectionSubTitle,
        Carousel
    },
    data: function () {
        return {

        };
    }
};
</script>
