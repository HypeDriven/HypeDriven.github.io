<template>
    <SectionContainer>
        <div class="flex flex-col gap-8 max-w-lg m-auto">
            <SectionTitle class="text-white h-fit m-auto text-4xl max-w-full px-2 text-center">
                {{ $t('homepage.testimonial.title') }}
            </SectionTitle>
        </div>
        <div>
            <Carousel :items="testimonies" v-slot="{ data }">
                <TestimonialCard class="mx-4" :message="$t(`homepage.testimonial.${data}.message`)" :fullName="$t(`homepage.testimonial.${data}.fullName`)"
                    :position="$t(`homepage.testimonial.${data}.position`)" />
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
    name: "TestimonialSectionComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Carousel,
        TestimonialCard
    },
    data: function () {
        return {
            testimonies: [
                'danielBarrero'
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
