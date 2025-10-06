<template>
    <div class="flex flex-col justify-center bg-[#150DCE] subscribe-running-line">
        <RunningLine :img="runStringImg" :content="runningLineContent" />
    </div>
    <div class="subscribe-wrapper">
        <SectionContainer> <!--class="xxs:px-4 xxs:pt-[40px] xs:px-4 xs:pt-[40px] sm:px-4 sm:pt-[40px] lg:pt-[40px]"-->
            <CustomAlert v-if="isAlertVisible" :type="alertType" :message="alertMessage" @close="closeAlert" />
            <div class="flex xxs:flex-col xxs:px-4 xs:flex-col xs:px-4 sm:flex-col sm:px-4 md:flex-col lg:flex-col xl:flex-row justify-around">
                <div class="flex flex-col justify-center xxs:mb-10 xs:mb-10 sm:mb-10 md:mb-10">
                    <SectionTitle class="text-[#00007E] h-fit xxs:text-5xl xs:text-5xl pb-0">
                        SUBSCRIBE
                    </SectionTitle>
                </div>
                <div>
                    <div>
                        <span class="subscribe-text">Stay informed and stay ahead with us!</span>
                    </div>
                    <div class="my-4 pb-2 flex justify-between">
                        <input class="subscribe-email flex-grow xxs:mr-0 xs:mr-0 mr-6"
                            :style="{ border: validationError ? '1px solid red' : '1px solid white' }" v-model="email"
                            type="email" :placeholder="validationError ? `${validationError}` : 'Enter your e-mail'" />
                        <div class="xxs:hidden xs:hidden sm:inline-block md:inline-block">
                            <div v-if="isSubscribing" class="loading-animation"></div>
                            <Button v-else-if="!isSubscribing" @click="subscribe">Subscribe</Button>
                        </div>
                    </div>
                    <div class="flex subscribe-private-policy">
                        <input type="checkbox" id="checkbox" name="Checkbox" v-model="privatePolicyContactUs" required />
                        <label class="xxs:text-sm xs:text-sm sm:text-sm md:text-sm text-xs">I have read the <router-link
                                :to="{ name: 'PrivatePolicy' }"><span class="text-[#150DCE]">Private
                                    Policy</span></router-link>, and confirm that Hypedriven
                            store my personal details</label>
                    </div>
                    <div class="xxs:inline-block xs:inline-block sm:hidden md:hidden w-full mt-10">
                        <div v-if="isSubscribing" class="loading-animation"></div>
                        <Button v-else-if="!isSubscribing" class="w-full" @click="subscribe">Subscribe</Button>
                    </div>
                </div>
            </div>
        </SectionContainer>
    </div>
</template>
  
<script>
import SectionContainer from "../container";
import SectionTitle from "../title";
import Button from "../../buttons";
import CustomAlert from "../custom-alert/custom-alert.vue";
import { saveSubscriptionToFirestore, checkIfEmailExistsInFirestore } from '../../../api/subscribe-api';
import RunningLine from "../../sections/running-line/running-line.vue";
import { mapFields } from "vuex-map-fields";
import { v4 as uuidv4 } from 'uuid';

export default {
    name: "PostDetailedSubscribePageComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Button,
        CustomAlert,
        RunningLine
    },
    data() {
        return {
            email: '',
            // privatePolicy: false,
            validationError: '',
            isAlertVisible: false,
            alertType: '',
            alertMessage: '',
            isSubscribing: false,
            runStringImg: require('../../../assets/img/images/aboutpage-whyus-star.svg'),
            runningLineContent: ['Get in touch', 'Hypedriven', 'Get in touch', 'Hypedriven'],
        };
    },
    computed: {
        ...mapFields({
            privatePolicyContactUs: 'privatePolicyContactUs'
        })
    },
    methods: {
        async subscribe() {
            try {
                this.isSubscribing = true;
                this.validationError = '';

                // Перевірка, чи поставлена галочка у privatePolicy
                if (!this.privatePolicyContactUs) {
                    this.validationError = 'Please read and accept the privacy policy.';
                    return;
                }

                // Перевірка, чи введений правильний email
                if (!this.email.includes('@')) {
                    this.validationError = 'Enter a valid email';
                    return;
                }

                const isEmailExists = await checkIfEmailExistsInFirestore(this.email);

                if (isEmailExists) {
                    this.showAlert('error', 'This email is already subscribed.');
                    return;
                }
                // Збереження підписки в Firestore
                const subscription = {
                    email: this.email,
                    uniqueId: uuidv4()
                }
                await saveSubscriptionToFirestore(subscription);

                this.showAlert('success', 'You have successfully subscribed!');

                this.email = '';
                // this.privatePolicy = false;
            } catch (error) {
                console.error('Error subscribing', error);
                this.showAlert('error', 'An error occurred while subscribing. Please try again later.');
            } finally {
                this.isSubscribing = false;
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

<style scooped>
.subscribe-wrapper {
    background-image: url('../../../assets/img/images/subscribe-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 10% 100%;
    padding-top: 60px;
    padding-bottom: 60px;
}

.subscribe-text {
    color: #00007E;
    font-size: 20px;
}

.subscribe-email {
    padding: 10px 25px 10px 25px;
    border-radius: 25px;
}

.subscribe-private-policy input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    margin-right: 10px;
    vertical-align: middle;
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.subscribe-private-policy input[type="checkbox"]::before {
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 10px;
    background-color: transparent;
    border: 2px solid #00007E;
    border-radius: 2px;
}

.subscribe-private-policy input[type="checkbox"]:checked::before {
    content: "\2713";
    font-size: 16px;
    font-weight: 700;
    color: #00007E;
    text-align: center;
    line-height: 16px;
    background-color: transparent;
    border: 2px solid #00007E;
    border-radius: 2px;
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

.subscribe-running-line {
    width: 100vw;
    height: 100px;
    z-index: 1;
}

@media (min-width: 768px) and (max-width: 1023.5px) {
    .subscribe-wrapper {
        background-position: 60% 100%;
    }

    .subscribe-text {
        font-weight: 600;
    }
}

@media (min-width: 576px) and (max-width: 767.5px) {
    .subscribe-wrapper {
        background-position: 60% 100%;
    }

    .subscribe-text {
        font-weight: 600;
    }

    .subscribe-running-line {
        height: 80px;
        width: 160vw;
    }
}

@media (min-width: 425px) and (max-width: 575.5px) {
    .subscribe-wrapper {
        background-position: 50% 100%;
    }

    .subscribe-running-line {
        width: 160vw;
        height: 70px;
    }

    .subscribe-text {
        font-size: 16px;
        font-weight: 600;
    }
}

@media (min-width: 320px) and (max-width: 424.5px) {
    .subscribe-wrapper {
        background-position: 50% 100%;
    }

    .subscribe-running-line {
        width: 160vw;
        height: 60px;
    }

    .subscribe-text {
        font-size: 16px;
        font-weight: 600;
    }
}
</style>
