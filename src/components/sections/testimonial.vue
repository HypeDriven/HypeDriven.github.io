<template>
    <SectionContainer>
        <div class="flex flex-col gap-8 max-w-lg m-auto">
            <SectionTitle class="text-white h-fit m-auto text-4xl max-w-full px-2 text-center">
                Testimonial
            </SectionTitle>
        </div>
        <div>
            <Carousel :items="testimonies" v-slot="{ data }">
                <TestimonialCard class="mx-4" :message="data?.message" :fullName="data?.fullName"
                    :position="data?.position" />
            </Carousel>
        </div>
    </SectionContainer>
</template>

<script>
import TestimonialCard from "../testimonial/testimonial_card";
import SectionContainer from "./container";
import SectionTitle from "./title";
import Carousel from "../carousel/single";
export default {
    name: "ServicesSectionComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Carousel,
        TestimonialCard
    },
    data: function () {
        return {
            testimonies: [
                {
                    message: `Albert is a really smart programmer, he is a very hard working individual
                    with an very inquisitive mind that fuels his curiosity to keep up to date on any programming, math and science related knowledge. 
                    He is a great asset for any team that lucky enough to have him.`,
                    fullName: 'Daniel Barrero Graphics',
                    position: 'programmer, Relic Entertainment'

                },
                {
                    message: `Albert is a really smart programmer, he is a very hard working individual
                    with an very inquisitive mind that fuels his curiosity to keep up to date on any programming, math and science related knowledge. 
                    He is a great asset for any team that lucky enough to have him.`,
                    fullName: 'Daniel Barrero Graphics',
                    position: 'programmer, Relic Entertainment'

                },
                {
                    message: `Albert is a really smart programmer, he is a very hard working individual
                    with an very inquisitive mind that fuels his curiosity to keep up to date on any programming, math and science related knowledge. 
                    He is a great asset for any team that lucky enough to have him.`,
                    fullName: 'Daniel Barrero Graphics',
                    position: 'programmer, Relic Entertainment'

                }
            ]
        };
    }
};
</script>

<style>
.card-content {
    max-width: 120px;
}
</style>
