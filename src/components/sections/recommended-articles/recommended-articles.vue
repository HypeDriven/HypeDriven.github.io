<template>
    <SectionContainer class="bg-secondary-bg xxs:px-4 xxs:py-16 xs:px-4 xs:py-16 sm:px-4 sm:py-20 md:py-16 lg:py-16">
        <SectionTitle
            class="text-[#00007E] font-thin h-fit text-6xl xxs:text-5xl xxs:text-left xs:text-left sm:text-left md:text-left lg:text-center">
            {{ $t('recommendedArticles.title') }}<span class="font-black">Articles</span>
        </SectionTitle>
        <div v-if="isLoading" class="loading-animation"></div>
        <div v-else-if="!isLoading"
            class="flex xxs:flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-row justify-between">
            <div v-for="post in posts" :key="post.id" class="flex post-container flex-col xxs:my-2 xs:my-2 sm:my-2 md:my-2 lg:my-0"
                @click="navigateToPostDetail(post.id)">
                <div>
                    <img :src="post.img" />
                </div>
                <div class="flex justify-between py-2 px-2">
                    <span class="post-date">{{ post.date }}</span>
                    <span class="post-read-time">{{ post.readTime }}</span>
                </div>
                <div class="flex flex-col py-2 px-2">
                    <span class="post-title">{{ post.title }}</span>
                    <span class="post-text">{{ post.content.length > 120 ? post.content.substring(0, 120) + '...' :
                        post.content }}</span>
                </div>
                <div class="pl-2 pt-5 mt-auto flex justify-between items-end">
                    <div class="xxs:pb-0 xs:pb-0 sm:pb-0 md:pb-0 lg:pb-[20px]">
                        <span class="post-by-author">By: <span class="post-author">{{ post.author }}</span></span>
                    </div>
                    <div class="read-more-btn">
                        <img src="@/assets/img/images/servicespage-arrow.svg" class="read-more-btn-img">
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center">
            <Button class="text-[#00007E]" :style="{ backgroundColor: 'white', border: '2px solid #00007E' }"
                @click="goToBlog">Go to BLOG</Button>
        </div>
    </SectionContainer>
</template>

<script>
import SectionContainer from "../container";
import SectionTitle from "../title";
import Button from "../../buttons";
import { fetchLastThreePostsFromFirestore } from "@/api/blog-our-posts-api";
// import Carousel from "../../carousel";

export default {
    name: "PostDetailedPageComponent",
    props: {
        postId: {
            type: String
        }
    },
    components: {
        SectionContainer,
        SectionTitle,
        Button,
        // Carousel
    },
    data: function () {
        return {
            posts: [],
            isLoading: false,
        };
    },
    created() {
        this.fetchLastThreePosts();
    },
    methods: {
        async fetchLastThreePosts() {
            try {
                this.isLoading = true;
                this.posts = await fetchLastThreePostsFromFirestore();
            } catch (error) {
                console.error('Error fetching last three posts', error);
            } finally {
                this.isLoading = false;
            }
        },
        navigateToPostDetail(postId) {
            this.$router.push({ name: 'DetaildPostPage', params: { postId } });
        },
        goToBlog() {
            this.$router.push({ name: 'BlogPage' });
        }
    }
}
</script>

<style scoped>
.loading-animation {
    width: 80px;
    height: 80px;
    border: 6px solid #e4e4e4;
    border-top: 6px solid #150DCE;
    border-radius: 50%;
    animation: spin 1s infinite linear;
    margin: 0 auto;
}

.post-container {
    /* max-height: 400px; */
    max-width: 33%;
    cursor: pointer;
    border: 3px solid white;
}

.post-container:hover {
    border: 3px solid #150DCE;
}

.read-more-btn {
    display: none;
}

.read-more-btn-img {
    width: 60%;
    margin: 0 auto;
}

.post-container:hover .read-more-btn {
    display: inline-block;
    background-color: #00007E;
    padding: 10px 1px 10px 1px;
}

.post-title {
    color: #00007E;
    font-weight: 700;
    font-size: 28px;
    line-height: normal;
    padding-bottom: 10px;
}

.post-text {
    font-size: 18px;
}

.post-date {
    font-size: 14px;
    font-weight: 600;
}

.post-read-time {
    color: #00007E;
    font-weight: 600;
    font-size: 14px;
}

.post-by-author {
    font-size: 18px;
}

.post-author {
    color: #00007E;
    font-weight: 600;
}

@media (min-width: 1024px) and (max-width: 1279.5px) {
    .post-title {
        font-size: 24px;
    }

    .post-text {
        font-size: 16px;
    }

    .post-date {
        font-size: 14px;
    }

    .post-read-time {
        font-size: 14px;
    }

    .post-by-author {
        font-size: 16px;
    }

}

@media (min-width: 768px) and (max-width: 1023.5px) {
    .post-container {
        max-width: 100%;
    }

    .post-container:hover {
        border: none;
    }

    .read-more-btn {
        display: inline-block;
        background-color: #00007E;
        padding: 10px 1px 10px 1px;
    }

    .post-container:hover .read-more-btn {
        display: none;
    }

    .post-title {
        font-size: 34px;
    }

    .post-text {
        font-size: 22px;
    }

    .post-date {
        font-size: 18px;
    }

    .post-read-time {
        font-size: 18px;
    }

    .post-by-author {
        font-size: 22px;
    }
}

@media (min-width: 576px) and (max-width: 767.5px) {
    .post-container {
        max-width: 100%;
    }

    .post-container:hover {
        border: none;
    }

    .read-more-btn {
        display: inline-block;
        background-color: #00007E;
        padding: 10px 1px 10px 1px;
    }

    .post-container:hover .read-more-btn {
        display: none;
    }
}


@media (min-width: 425px) and (max-width: 575.5px) {
    .post-container {
        max-width: 100%;
    }

    .post-container:hover {
        border: none;
    }

    .read-more-btn {
        display: inline-block;
        background-color: #00007E;
        padding: 10px 1px 10px 1px;
    }

    .post-container:hover .read-more-btn {
        display: none;
    }
}

@media (min-width: 320px) and (max-width: 424.5px) {
    .post-container {
        max-width: 100%;
    }

    .post-container:hover {
        border: none;
    }

    .read-more-btn {
        display: inline-block;
        background-color: #00007E;
        padding: 10px 1px 10px 1px;
    }

    .post-container:hover .read-more-btn {
        display: none;
    }
}
</style>