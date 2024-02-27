<template>
    <SectionContainer
        class="blog-hero-wrapper xxs:px-4 xxs:py-40 xs:px-4 xs:py-44 sm:px-4 sm:py-40 md:py-36 lg:py-28 h-[100%] 6xl:py-32 7xl:py-40">
        <div class="blog-hero-card-content max-w-xl">
            <SectionTitle
                class="text-white font-thin h-fit text-6xl xxs:text-5xl max-w-[80%] tracking-[10px] xxs:tracking-[2px] xs:tracking-[2px] sm:tracking-[7px] text-left lg:my-14">
                {{ $t('blogPage.hero.title') }}<span> the <span class="font-black">Blog!</span></span>
            </SectionTitle>
        </div>
    </SectionContainer>
</template>

<script>
import SectionContainer from "../sections/container.vue";
import SectionTitle from "../sections/title";
// import SectionSubTitle from "../sections/sub-title.vue"
// import Button from "../buttons";

export default {
    name: "BlogPageComponent",
    components: {
        SectionContainer,
        SectionTitle,
        // SectionSubTitle,
        // Button
    },
    data: () => {
        return {

        }
    },
}
</script>

<style>
.blog-hero-wrapper {
    background-image: url('../../assets/img/images/blogpage-hero-img.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 100% 10%;
}

.blog-hero-card-content {
    max-width: 50%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.blog-hero-card-content-img {
    width: 100%;
    height: 100%;
}

@media (min-width: 1024px) and (max-width: 1279.5px) {
    .blog-hero-wrapper {
        background-position: 70% 10%;
    }

    .blog-hero-card-content {
        max-width: 100%;
    }
}

@media (min-width: 768px) and (max-width: 1023.5px) {
    .blog-hero-wrapper {
        background-position: 60% 10%;
    }

    .blog-hero-card-content {
        max-width: 100%;
    }
}

@media (min-width: 576px) and (max-width: 767.5px) {
    .blog-hero-wrapper {
        background-position: 60% 10%;
    }

    .blog-hero-card-content {
        max-width: 100%;
    }
}

@media (min-width: 425px) and (max-width: 575.5px) {
    .blog-hero-wrapper {
        background-position: 50% 10%;
    }

    .blog-hero-card-content {
        max-width: 100%;
    }
}

@media (min-width: 320px) and (max-width: 424.5px) {
    .blog-hero-wrapper {
        background-position: 50% 10%;
    }

    .blog-hero-card-content {
        max-width: 100%;
    }
}
</style>