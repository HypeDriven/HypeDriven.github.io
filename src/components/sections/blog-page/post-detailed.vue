<template>
    <SectionContainer
        class="bg-secondary-bg xxs:px-4 xxs:pt-[20px] xs:px-4 xs:pt-[20px] sm:px-4 sm:pt-[20px] md:pt-[0px] lg:pt-[0px]">
        <div v-if="isLoading" class="loading-animation"></div>
        <div v-else-if="!isLoading" class="flex flex-col">
            <div>
                <img :src="postDetailedBanner" :style="{ width: '100%', height: '100%' }" /> <!--loading="lazy"-->
            </div>
            <div class="flex" :style="{ borderBottom: '2px solid #00007E' }">
                <div :style="{ width: '75%' }" class="py-4">
                    <span class="post-detailed-date">{{ post.date }}</span>
                </div>
                <div :style="{ width: '25%', borderLeft: '2px solid #00007E' }" class="text-center py-4">
                    <span class="post-detailed-read-time">{{ post.readTime }}</span>
                </div>
            </div>
            <div class="my-10 flex flex-wrap gap-1">
                <span v-for="tag in post.tags" :key="tag"
                    class="xxs:p-1 p-2 text-lg bg-[#66C3CD] text-white rounded-lg xxs:mr-1 mr-2">
                    <!--cursor-pointer-->
                    {{ tag }}
                </span>
            </div>
            <div v-if="user" class="flex justify-end">
                <Button v-if="!articleEditing" @click="startArticleEditing">Edit article</Button>
                <Button v-if="articleEditing" @click="saveArticle">Save article changes</Button>
            </div>
            <div v-if="!isSaving" class="article-wrapper">
                <span class="post-detailed-title">{{ post.title }}</span>
                <img :src="post.img" class="mt-10" :style="{ width: '100%', height: '100%' }" />
                <div v-if="!articleEditing" class="my-10 article-wrapper-article" v-html="post.article"></div>
                <div v-else-if="user" class="my-10 flex">
                    <div v-if="!articleEditing" class="mt-10 article-wrapper-article" v-html="post.article"></div>
                    <ckeditor v-else-if="articleEditing" :editor="editor" v-model="editorData" :config="editorConfig">
                    </ckeditor>
                </div>
                <span class="post-detailed-by-author">By: <span class="post-detailed-author">{{ post.author }}</span></span>
            </div>
            <div v-else-if="isSaving" class="loading-animation"></div>
        </div>
    </SectionContainer>
</template>

<script>
import SectionContainer from "../container";
import { fetchPostByIdFromFirestore, updatePostOnFirestore } from "@/api/blog-our-posts-api";
import { getAuth } from 'firebase/auth';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from "../../buttons";

export default {
    name: "PostDetailedPageComponent",
    props: {
        postId: {
            type: String
        }
    },
    components: {
        SectionContainer,
        Button
    },
    data: function () {
        return {
            post: {},
            localPostId: this.postId,
            user: null,
            editor: ClassicEditor,
            editorData: '',
            editorConfig: {
                // plugins: [Essentials, Bold, Italic],
                // toolbar: ['bold', 'italic'],
            },
            articleEditing: false,
            isLoading: false,
            isSaving: false,
            postDetailedBanner: require('@/assets/img/images/post-detailed-page-banner.png')
        };
    },
    created() {
        this.fetchPostById(this.localPostId);
    },
    mounted() {
        const auth = getAuth();
        auth.onAuthStateChanged(user => {
            this.user = user;
        });
    },
    watch: {
        $route: 'fetchPostDetails',
    },
    methods: {
        async fetchPostDetails() {
            const postId = this.$route.params.postId;

            if (postId !== this.localPostId) {
                this.localPostId = postId;
                this.fetchPostById(postId);
            }
        },
        async fetchPostById(postId) {
            try {
                if (postId) {
                    this.isLoading = true;
                    this.post = await fetchPostByIdFromFirestore(postId);
                    this.editorData = this.post.article;
                } else {
                    // Очищення даних посту або інша логіка, коли postId не визначений
                    this.post = {};
                    this.editorData = '';
                }
            } catch (error) {
                console.error('Error fetching post by id', error);
            } finally {
                this.isLoading = false;
            }
        },
        async saveArticle() {
            try {
                this.isSaving = true;
                if (this.user) {
                    const postUpdate = {
                        article: this.editorData
                    };
                    await updatePostOnFirestore(this.postId, postUpdate);
                    this.endArticleEditing();
                    this.fetchPostById(this.postId)
                } else {
                    console.error("User is not authenticated.");
                }
            } catch (error) {
                console.error('Error saving article:', error);
            } finally {
                this.isSaving = false;
            }
        },
        startArticleEditing() {
            this.articleEditing = true;
        },
        endArticleEditing() {
            this.articleEditing = false;
        },
    }
}
</script>

<style>
h2,
h3,
h4 {
    /* margin: 0.1rem 0; */
    font-weight: bold;
    /* padding-bottom: 20px; */
}

h2 {
    font-size: 1.6rem;
}

h3 {
    font-size: 1.4rem;
}

h4 {
    font-size: 1.2rem;
}

ul li {
    list-style-type: disc;
    margin-left: 30px;
}

ol li {
    list-style-type: decimal;
    margin-left: 30px;
}

blockquote {
    margin: 0;
}

blockquote p {
    padding: 15px;
    background: #eee;
    border-radius: 5px;
}

blockquote p::before {
    content: '\201C';
}

blockquote p::after {
    content: '\201D';
}

.article-wrapper-article {
    font-size: 18px;
}

.post-detailed-date {
    font-size: 20px;
    font-weight: 700;
}

.post-detailed-read-time {
    font-size: 20px;
    font-weight: 700;
    color: #00007E;
}

.post-detailed-title {
    font-size: 66px;
    font-weight: 700;
    color: #00007E;
    line-height: 1.2;
}

.post-detailed-content {
    font-size: 18px;
}

.article-wrapper {
    width: 75%;
}

.loading-animation {
    width: 80px;
    height: 80px;
    border: 6px solid #e4e4e4;
    border-top: 6px solid #150DCE;
    border-radius: 50%;
    animation: spin 1s infinite linear;
    margin: 0 auto;
}

.post-detailed-by-author {
    font-size: 18px;
}

.post-detailed-author {
    color: #00007E;
    font-weight: 600;
}

@media (min-width: 1024px) and (max-width: 1279.5px) {
    .post-detailed-title {
        font-size: 60px;
    }

    .article-wrapper {
        width: 100%;
    }

    ul li {
        font-size: 18px;
    }

    ol li {
        font-size: 18px;
    }

    p {
        font-size: 18px;
    }

    .post-detailed-by-author {
        font-size: 18px;
    }
}

@media (min-width: 768px) and (max-width: 1023.5px) {

    .post-detailed-title {
        font-size: 50px;
    }

    .article-wrapper {
        width: 100%;
    }

    ul li {
        font-size: 18px;
    }

    ol li {
        font-size: 18px;
    }

    p {
        font-size: 18px;
    }

    .post-detailed-by-author {
        font-size: 18px;
    }
}

@media (min-width: 576px) and (max-width: 767.5px) {
    .post-detailed-date {
        font-size: 18px;
    }

    .post-detailed-read-time {
        font-size: 18px;
    }

    .post-detailed-title {
        font-size: 40px;
    }

    .article-wrapper {
        width: 100%;
    }

    ul li {
        font-size: 18px;
    }

    ol li {
        font-size: 18px;
    }

    p {
        font-size: 18px;
    }

    .post-detailed-by-author {
        font-size: 18px;
    }
}

@media (min-width: 425px) and (max-width: 575.5px) {
    .post-detailed-date {
        font-size: 16px;
    }

    .post-detailed-read-time {
        font-size: 16px;
    }

    .post-detailed-title {
        font-size: 30px;
    }

    .article-wrapper {
        width: 100%;
    }

    ul li {
        font-size: 16px;
    }

    ol li {
        font-size: 16px;
    }

    p {
        font-size: 16px;
    }

    .post-detailed-by-author {
        font-size: 16px;
    }
}

@media (min-width: 320px) and (max-width: 424.5px) {
    .post-detailed-date {
        font-size: 14px;
    }

    .post-detailed-read-time {
        font-size: 14px;
    }

    .post-detailed-title {
        font-size: 26px;
        line-height: 1.2;
    }

    .article-wrapper {
        width: 100%;
    }

    ul li {
        font-size: 14px;
    }

    ol li {
        font-size: 14px;
    }

    p {
        font-size: 14px;
    }

    .post-detailed-by-author {
        font-size: 14px;
    }
}
</style>