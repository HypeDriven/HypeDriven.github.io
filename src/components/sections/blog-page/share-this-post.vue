<template>
    <div class="share-this-post-wrapper">
        <CustomAlert v-if="isAlertVisible" :type="alertType" :message="alertMessage" @close="closeAlert" />
        <SectionContainer class="xxs:px-4 xxs:py-10 xxs:mt-8 xs:px-4 xs:py-12 xs:mt-10 sm:px-4 sm:py-14 sm:mt-10 md:py-16 lg:py-20">
            <div class="share-this-post-content">
                <div class="mb-5">
                    <span class="share-this-post-text">Share this post:</span>
                </div>
                <div class="flex justify-evenly">
                    <Socials :post-id="postId" @showAlert="showAlert" />
                </div>
            </div>
        </SectionContainer>
    </div>
</template>

<script>
import SectionContainer from "../container";
import Socials from "./share-this-post-socials.vue";
import CustomAlert from "../custom-alert/custom-alert.vue";

export default {
    name: "PostDetailedShareThisPostPageComponent",
    props: {
        postId: {
            type: String
        }
    },
    components: {
        SectionContainer,
        Socials,
        CustomAlert
    },
    data: function () {
        return {
            isAlertVisible: false,
            alertType: '',
            alertMessage: '',
        };
    },
    methods: {
        showAlert(type, message) {
            this.isAlertVisible = true;
            this.alertType = type;
            this.alertMessage = message;

            setTimeout(() => this.closeAlert(), 3000);
        },
        closeAlert() {
            this.isAlertVisible = false;
        },
    }
}
</script>

<style scoped>
.share-this-post-wrapper {
    background-image: url('../../../assets/img/images/blogpage-share-this-post.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 10% 10%;
}

.share-this-post-content {
    width: 20%;
    margin: 0 auto;
    text-align: center;
}

.share-this-post-text {
    font-size: 30px;
    color: #00007E;
    font-weight: bold;
}

@media (min-width: 1024px) and (max-width: 1279.5px) {
    .share-this-post-wrapper {
        background-size: cover;
        background-position: 75% 10%;
    }

    .share-this-post-content {
        width: 30%;
    }
}

@media (min-width: 768px) and (max-width: 1023.5px) {
    .share-this-post-wrapper {
        background-size: cover;
        background-position: 75% 10%;
    }

    .share-this-post-content {
        width: 40%;
    }
}

@media (min-width: 576px) and (max-width: 767.5px) {
    .share-this-post-wrapper {
        background-size: cover;
        background-position: 65% 10%;
    }

    .share-this-post-content {
        width: 50%;
    }
}

@media (min-width: 425px) and (max-width: 575.5px) {
    .share-this-post-wrapper {
        background-size: cover;
        background-position: 65% 10%;
    }

    .share-this-post-content {
        width: 95%;
    }

    .share-this-post-text {
        font-size: 26px;
    } 
}

@media (min-width: 320px) and (max-width: 424.5px) {
    .share-this-post-wrapper {
        background-size: cover;
        background-position: 65% 10%;
    }

    .share-this-post-content {
        width: 95%;
    }

    .share-this-post-text {
        font-size: 22px;
    }
}
</style>