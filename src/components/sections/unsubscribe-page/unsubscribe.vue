<template>
    <div class="unsubscribe-wrapper">
        <SectionContainer>
            <CustomAlert v-if="isAlertVisible" :type="alertType" :message="alertMessage" @close="closeAlert" />
            <div v-if="isSubscriptionExist" class="flex flex-col text-center">
                <span class="unsubscribe-text">Are you sure, that you want unsubscribe ?</span>
                <div class="mt-5">
                    <div v-if="isUnSubscribing" class="loading-animation"></div>
                    <Button v-else-if="!isUnSubscribing" @click="unsubscribe">Unsubscribe</Button>
                </div>
            </div>
            <div v-else-if="!isSubscriptionExist" class="flex flex-col">
                <span class="unsubscribe-text">You are already unsubscribed.</span>
                <span class="unsubscribe-text">However, if you change your mind, you can subscribe again below!</span>
            </div>
        </SectionContainer>
    </div>
    <div v-if="!isSubscriptionExist">
        <Subscribe/>
    </div>
</template>

<script>
import SectionContainer from "../container";
// import SectionTitle from "../title";
import Button from "../../buttons";
import CustomAlert from "../custom-alert/custom-alert.vue";
import { deleteSubscriptionFromFirestore, checkIfSubscriptionWithUniqueIdExistsInFirestore } from '../../../api/subscribe-api';
import Subscribe from "../blog-page/subscribe.vue";

export default {
    name: "PostDetailedSubscribePageComponent",
    components: {
        SectionContainer,
        // SectionTitle,
        Button,
        CustomAlert,
        Subscribe
    },
    data() {
        return {
            isAlertVisible: false,
            alertType: '',
            alertMessage: '',
            isUnSubscribing: false,
            subscriptionId: '',
            isSubscriptionExist: true
        };
    },
    async created() {
        this.subscriptionId = this.$route.params.subscriptionId;
        this.isSubscriptionExist = await checkIfSubscriptionWithUniqueIdExistsInFirestore(this.$route.params.subscriptionId);
    },
    methods: {
        async unsubscribe() {
            try {
                this.isUnSubscribing = true;
                const subscriptionId = this.subscriptionId;
                await deleteSubscriptionFromFirestore(subscriptionId);
                this.isSubscriptionExist = await checkIfSubscriptionWithUniqueIdExistsInFirestore(this.$route.params.subscriptionId);

                this.showAlert('success', 'You have successfully unsubscribed!');
            } catch (error) {
                console.error('Error unsubscribing', error);
                this.showAlert('error', 'An error occurred while unsubscribing. Please try again later.');
            } finally {
                this.isUnSubscribing = false;
            }
        },
        showAlert(type, message) {
            this.isAlertVisible = true;
            this.alertType = type;
            this.alertMessage = message;

            setTimeout(() => this.closeAlert(), 3000);
        },
        closeAlert() {
            this.isAlertVisible = false;
        },
    },
};
</script>

<style scoped>
.unsubscribe-wrapper {
    background-color: #9DD3E1;
    padding-top: 160px;
    padding-bottom: 160px;
}

.unsubscribe-text {
    font-size: xx-large;
    font-weight: 700;
    color: white;
}

.loading-animation {
    width: 40px;
    height: 40px;
    border: 6px solid #ffffff;
    border-top: 6px solid #150DCE;
    border-radius: 50%;
    animation: spin .7s infinite linear;
    margin: 0 auto;
}
</style>