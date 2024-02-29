<template>
    <SectionContainer
        class="bg-secondary-bg xxs:px-4 xxs:pt-[40px] xs:px-4 xs:pt-[40px] sm:px-4 sm:pt-[40px] md:pt-[40px] lg:pt-[40px] pb-[20px]">
        <div class="flex flex-col">
            <div class="flex justify-between xxs:mb-4 xs:mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                <div>
                    <SectionTitle class="text-[#00007E] h-fit xxs:text-5xl">
                        {{ $t('blogPage.ourPosts.title') }}
                    </SectionTitle>
                </div>
                <div class="flex flex-col justify-between">
                    <div class="xxs:hidden xs:hidden sm:hidden md:hidden lg:flex flex-grow"></div>
                    <Button v-if="user" @click="showAddPostForm" :style="{ backgroundColor: 'green' }">Add Post <i
                            class="fas fa-plus"></i></Button>
                </div>
            </div>

            <AddPostForm :add-post-form="addPostForm" :is-sending="isSending" @closeModal="closeModal"
                @updateAddPostForm="updateAddPostForm" @updateIsSending="updateIsSending" @updatePosts="updatePosts" />

            <EditPostForm :edit-post-form="editPostForm" :is-updating="isUpdating" :post-to-edit="postToEdit"
                @closeModal="closeModal" @updateEditPostForm="updateEditPostForm" @updateIsUpdating="updateIsUpdating"
                @updatePosts="updatePosts" />

            <div v-if="isLoading" class="loading-animation"></div>

            <div v-for="post in visiblePosts" :key="post.id"
                class="flex xxs:flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row my-5 post-container"
                @click="navigateToPostDetail(post.id)">
                <div class="post-img">
                    <img :src="post.img" :style="{ width: '100%', height: '100%' }" loading="lazy" />
                </div>
                <div class="post-content flex flex-col justify-between">
                    <div class="px-[10px] py-[10px] flex justify-between">
                        <span class="post-date">{{ post.date }}</span>
                        <span class="post-read-time">{{ post.readTime }}</span>
                    </div>
                    <div class="px-[10px] flex flex-col flex-grow">
                        <span class="post-title">{{ post.title }}</span>
                        <span class="post-text">{{ post.content.length > 120 ? post.content.substring(0, 120) + '...' :
                            post.content }}</span>
                    </div>
                    <div class="pl-[10px] mt-auto flex justify-between items-end">
                        <div class="xxs:pb-0 xs:pb-0 sm:pb-0 md:pb-0 lg:pb-[10px]">
                            <span class="post-by-author">By: <span class="post-author">{{ post.author }}</span></span>
                        </div>
                        <div v-if="!user" class="read-more-btn">
                            <img src="@/assets/img/images/servicespage-arrow.svg"
                                class="xxs:w-[22px] xs:w-[26px] sm:w-[30px]">
                        </div>
                    </div>
                    <div v-if="user" class="flex justify-end pb-1 pr-1">
                        <div class="xxs:hidden xs:hidden sm:hidden md:hidden lg:block">
                            <Button @click.stop="editPost(post)" class="mr-2">
                                Edit Post <i class="fas fa-pencil-alt"></i>
                            </Button>
                            <Button :disabled="isDeleting" @click.stop="tryToDeletePost(post.id, post.img)"
                                :style="{ backgroundColor: 'red' }">Delete Post <i class="fas fa-minus"></i></Button>
                        </div>
                        <div class="xxs:block xs:block sm:block md:block lg:hidden">
                            <i @click.stop="editPost(post)" class="mr-6 fas fa-pencil-alt"
                                :style="{ color: '#150DCE' }"></i>
                            <i @click.stop="tryToDeletePost(post.id, post.img)" class="fas fa-minus"
                                :style="{ color: 'red' }"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="areYouSureYouWantToDeletePost" class="modal">
                <div class="modal-content" @click.stop>
                    <div class="mb-10">
                        <span class="modal-content-title ">Are you sure, you want to delete this post ?</span>
                    </div>
                    <div class="flex">
                        <div class="flex-grow"></div>
                        <Button @click.stop="closeModalForPostDeleting"
                            :style="{ backgroundColor: 'blue' }">Close</Button>
                        <Button v-if="!isDeleting" @click.stop="deletePost(this.postIdToDelete, this.postImgToDelete)"
                            :style="{ backgroundColor: 'red' }" class="ml-2">Delete Post</Button>
                        <div v-else-if="isDeleting" class="loading-animation-small ml-5"></div>
                    </div>
                </div>

            </div>
            <Button v-if="showLoadMoreButton && !isLoading" @click="loadMorePosts" class="xxs:mb-5 xs:mb-5 md:mt-10">See
                more</Button>
        </div>
    </SectionContainer>
    <div class="flex flex-col justify-center bg-[#150DCE] blog-running-line">
        <RunningLine :img="runStringImg" :content="runningLineContent" />
    </div>
</template>

<script>
import SectionContainer from "../container";
import SectionTitle from "../title";
import Button from "../../buttons"
import { fetchPostsFromFirestore } from "@/api/blog-our-posts-api"; // Імпорт функції
import { getAuth } from 'firebase/auth';
import { getStorage, ref, deleteObject } from 'firebase/storage';
import { getFirestore, collection, doc, deleteDoc } from 'firebase/firestore';
import RunningLine from "../../sections/running-line/running-line.vue";
import AddPostForm from "./addPostForm.vue";
import EditPostForm from "./editPostForm.vue";
// import mitt from 'mitt';
// const emitter = mitt();

export default {
    name: "BlogPageOurPostsComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Button,
        RunningLine,
        AddPostForm,
        EditPostForm
    },
    data: function () {
        return {
            user: null,
            posts: [],
            visiblePosts: [],
            pageSize: 5,
            showLoadMoreButton: true,
            lastVisiblePost: null,
            addPostForm: false,
            editPostForm: false,
            postToEdit: null,
            isLoading: false,
            isSending: false,
            isDeleting: false,
            isUpdating: false,
            runStringImg: require('../../../assets/img/images/aboutpage-whyus-star.svg'),
            runningLineContent: ['Get in touch', 'Let`s cooperate', 'Get in touch', 'Let`s cooperate'],
            areYouSureYouWantToDeletePost: false,
            postIdToDelete: null,
            postImgToDelete: null
        };
    },
    mounted() {
        this.fetchPosts();
        const auth = getAuth();
        auth.onAuthStateChanged(user => {
            this.user = user;
        });
    },
    methods: {
        async fetchPosts() {
            try {
                this.isLoading = true;
                this.posts = await fetchPostsFromFirestore(this.pageSize, null);
                this.loadVisiblePosts();
                this.showLoadMoreButton = true;
            } catch (error) {
                console.error('Error fetching posts', error);
            } finally {
                this.isLoading = false;
            }
        },
        async loadMorePosts() {
            try {
                this.isLoading = true;
                const morePosts = await fetchPostsFromFirestore(this.pageSize, this.lastVisiblePost);
                this.posts = this.posts.concat(morePosts);
                this.loadVisiblePosts();

                if (morePosts.length > 0) {
                    this.lastVisiblePost = morePosts[morePosts.length - 1];
                }

                this.showLoadMoreButton = morePosts.length === this.pageSize;
            } catch (error) {
                console.error('Error loading more posts', error);
            } finally {
                this.isLoading = false;
            }
        },
        loadVisiblePosts() {
            this.visiblePosts = this.reversedPosts().slice(0, this.visiblePosts.length + this.pageSize);
            this.lastVisiblePost = this.visiblePosts[this.visiblePosts.length - 1];
        },
        reversedPosts() {
            return this.posts.slice().sort((a, b) => b.timestamp - a.timestamp);
        },
        showAddPostForm() {
            this.addPostForm = true;
        },
        closeModal() {
            this.addPostForm = false;
            this.editPostForm = false;
        },
        tryToDeletePost(postId, imageURL) {
            this.areYouSureYouWantToDeletePost = true;
            this.postIdToDelete = postId;
            this.postImgToDelete = imageURL;
        },
        closeModalForPostDeleting() {
            this.areYouSureYouWantToDeletePost = false;
            this.postIdToDelete = null;
            this.postImgToDelete = null;
        },
        async deletePost(postId, imageURL) {
            const db = getFirestore();
            const storage = getStorage();
            const postsCollection = collection(db, 'posts');

            try {
                this.isDeleting = true;
                await deleteDoc(doc(postsCollection, postId));
                console.log('Document successfully deleted!');

                const imageRef = ref(storage, imageURL);
                await deleteObject(imageRef);
                console.log('Image successfully deleted!');

                this.areYouSureYouWantToDeletePost = false;
                this.postIdToDelete = null;
                this.postImgToDelete = null;

                await this.fetchPosts();
            } catch (e) {
                console.error('Error deleting document: ', e);
            } finally {
                this.isDeleting = false;
            }
        },
        editPost(post) {
            this.postToEdit = { ...post };
            this.editPostForm = true;
        },
        updateAddPostForm(value) {
            this.addPostForm = value;
        },
        updateIsSending(value) {
            this.isSending = value;
        },
        updateEditPostForm(value) {
            this.editPostForm = value;
        },
        updateIsUpdating(value) {
            this.isUpdating = value;
        },
        async updatePosts() {
            await this.fetchPosts();
        },
        navigateToPostDetail(postId) {
            this.$router.push({ name: 'DetaildPostPage', params: { postId } });
        }
    },
};
</script>

<style scoped>
.modal {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background-color: white;
    padding: 40px;
    border-radius: 8px;
    max-width: 600px;
    width: 100%;
}

.modal-content-title {
    font-size: 22px;
    font-weight: 700;
}

.post-img {
    width: 55%;
}

.post-content {
    width: 45%;
    /* padding: 10px 20px 10px 20px; */
}

.post-title {
    color: #00007E;
    font-size: 35px;
    font-weight: 600;
}

.post-text {
    color: black;
    font-size: 25px;
}

.post-date {
    font-size: 16px;
    font-weight: 600;
}

.post-read-time {
    color: #00007E;
    font-weight: 600;
}

.post-by-author {
    font-size: 25px;
}

.post-author {
    color: #00007E;
    font-weight: 600;
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

.loading-animation-small {
    width: 40px;
    height: 40px;
    border: 4px solid #e4e4e4;
    border-top: 4px solid #150DCE;
    border-radius: 50%;
    animation: spin 1s infinite linear;
    margin: 0 auto;
}

.error-message {
    color: red;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin-top: 20px;
}

.post-container {
    max-height: 400px;
    cursor: pointer;
    border: 3px solid white;
}

.post-container:hover {
    border: 3px solid #150DCE;
}

.read-more-btn {
    display: none;
}

.post-container:hover .read-more-btn {
    display: inline-block;
    background-color: #00007E;
    padding: 20px;
}

.blog-running-line {
    width: 100vw;
    height: 100px;
    z-index: 1;
}

@media (min-width: 1280px) and (max-width: 1439.5px) {
    .post-img {
        width: 60%;
    }

    .post-content {
        width: 40%;
        /* padding: 10px 20px 10px 20px; */
    }

    .post-title {
        font-size: 30px;
    }

    .post-text {
        font-size: 22px;
    }

    .post-date {
        font-size: 14px;
    }

    .post-read-time {
        font-size: 14px;
    }

    .post-by-author {
        font-size: 22px;
    }

    .post-container:hover .read-more-btn {
        display: inline-block;
        background-color: #00007E;
        padding: 15px;
    }
}

@media (min-width: 1024px) and (max-width: 1279.5px) {
    .post-container {
        max-height: 980px;
    }

    .post-img {
        width: 100%;
    }

    .post-content {
        width: 100%;
    }

    .post-container:hover .read-more-btn {
        display: inline-block;
        background-color: #00007E;
        padding: 15px;
    }
}

@media (min-width: 768px) and (max-width: 1023.5px) {
    .post-container {
        max-height: 880px;
    }

    .post-img {
        width: 100%;
    }

    .post-content {
        width: 100%;
    }

    .post-container:hover {
        border: none;
    }

    .read-more-btn {
        display: inline-block;
        background-color: #00007E;
        padding: 12px;
    }

    .post-container:hover .read-more-btn {
        display: none;
    }
}

@media (min-width: 576px) and (max-width: 767.5px) {
    .post-container {
        max-height: 680px;
    }

    .post-img {
        width: 100%;
    }

    .post-content {
        width: 100%;
    }

    .post-title {
        font-size: 26px;
    }

    .post-text {
        font-size: 18px;
    }

    .post-date {
        font-size: 14px;
    }

    .post-read-time {
        font-size: 14px;
    }

    .post-by-author {
        font-size: 18px;
    }

    .post-container:hover {
        border: none;
    }

    .read-more-btn {
        display: inline-block;
        background-color: #00007E;
        padding: 12px;
    }

    .post-container:hover .read-more-btn {
        display: none;
    }

    .blog-running-line {
        height: 80px;
        width: 160vw;
    }
}

@media (min-width: 425px) and (max-width: 575.5px) {
    .post-container {
        max-height: 520px;
    }

    .post-img {
        width: 100%;
    }

    .post-content {
        width: 100%;
    }

    .post-title {
        font-size: 20px;
    }

    .post-text {
        font-size: 14px;
    }

    .post-date {
        font-size: 12px;
    }

    .post-read-time {
        font-size: 12px;
    }

    .post-by-author {
        font-size: 14px;
    }

    .post-container:hover {
        border: none;
    }

    .read-more-btn {
        display: inline-block;
        background-color: #00007E;
        padding: 10px;
    }

    .post-container:hover .read-more-btn {
        display: none;
    }

    .blog-running-line {
        height: 70px;
        width: 160vw;
    }
}


@media (min-width: 320px) and (max-width: 424.5px) {
    .post-container {
        max-height: 520px;
    }

    .post-img {
        width: 100%;
    }

    .post-content {
        width: 100%;
    }

    .post-title {
        font-size: 20px;
    }

    .post-text {
        font-size: 14px;
    }

    .post-date {
        font-size: 12px;
    }

    .post-read-time {
        font-size: 12px;
    }

    .post-by-author {
        font-size: 14px;
    }

    .post-container:hover {
        border: none;
    }

    .read-more-btn {
        display: inline-block;
        background-color: #00007E;
        padding: 10px;
    }

    .post-container:hover .read-more-btn {
        display: none;
    }

    .blog-running-line {
        height: 60px;
        width: 160vw;
    }
}
</style>