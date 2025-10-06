<template>
    <SectionContainer
        class="log-in-wrapper xxs:px-4 xxs:pt-[40px] xxs:pb-72 xs:px-4 xs:pt-[40px] xs:pb-72 sm:px-4 sm:pt-[40px] sm:pb-80 md:pt-[50px] h-[100%] 6xl:py-32 7xl:py-40">
        <div class="log-in-form text-center">
            <span class="text-[#00007E] font-bold uppercase max-w-sm leading-tight" :style="{ fontSize: '40px' }">Log In to
                an account</span>
            <div class="log-in-form-elem">
                <input name="email" type="email" v-model="email" required class="log-in-element py-[5px] pl-[5px]"
                    placeholder="Your email">
            </div>
            <div class="log-in-form-elem">
                <input name="password" type="password" v-model="password" required class="log-in-element py-[5px] pl-[5px]"
                    placeholder="Your password">
            </div>
            <div v-if="errMsg" class="mt-4 log-in-err-message">
                {{ errMsg }}
            </div>
            <div class="mt-6">
                <Button v-if="!loading" type="submit" class="xxs:w-full xs:w-full sm:w-full" @click="login">Log In <i
                        class="fas fa-sign-in-alt"></i></Button>
                <div v-else class="loading-animation"></div>
            </div>
        </div>
    </SectionContainer>
</template>

<script>
// import Header1 from "../text/header/header_1.vue";
import SectionContainer from "../sections/container.vue";
import Button from "../buttons"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
    name: "LoginPageComponent",
    components: {
        // Header1,
        Button,
        SectionContainer,
    },
    data: () => {
        return {
            email: '',
            password: '',
            errMsg: '',
            loading: false
        }
    },
    methods: {
        async login() {
            this.loading = true;
            const auth = getAuth();
            try {
                await signInWithEmailAndPassword(auth, this.email, this.password);
                console.log('Logged in successfully');
                // Перенаправлення на іншу сторінку
                this.$router.push('/');
            } catch (error) {
                console.error('Error logging in', error);
                this.errMsg = 'Invalid email or password';
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>

<style scooped>
.log-in-wrapper {
    background-color: #9DD3E1;
    padding-top: 120px;
    padding-bottom: 120px;
}

.log-in-form {
    width: 60%;
    margin: 0 auto;
}

.log-in-form-elem {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 50%;
}

.log-in-element {
    background-color: transparent;
    border: 1px solid #fff;
    color: #00007E;
    margin-top: 20px;
}

.log-in-element::placeholder {
    color: white;
}

.log-in-err-message {
    color: red;
}

.loading-animation {
    /* Додайте стилі для анімації завантаження */
    width: 40px;
    height: 40px;
    border: 4px solid #ffffff;
    border-top: 4px solid #150DCE;
    border-radius: 50%;
    animation: spin 1s infinite linear;
    margin: 0 auto;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@media (min-width: 2001px) {
    .log-in-wrapper {
        padding-top: 350px;
        padding-bottom: 350px;
    }

    .log-in-form-elem {
        padding: 10px 0px 10px 0px;
    }
}

@media (min-width: 1580px) and (max-width: 2000px) {
    .log-in-wrapper {
        padding-top: 200px;
        padding-bottom: 200px;
    }
}

@media (min-width: 1024px) and (max-width: 1279.5px) {
    .log-in-form {
        width: 60%;
    }

    .log-in-form-elem {
        width: 60%;
    }
}

@media (min-width: 768px) and (max-width: 1023.5px) {
    .log-in-form {
        width: 80%;
    }

    .log-in-form-elem {
        width: 60%;
    }
}

@media (min-width: 576px) and (max-width: 767.5px) {
    .log-in-form {
        width: 80%;
    }

    .log-in-form-elem {
        width: 60%;
    }
}

@media (min-width: 425px) and (max-width: 575.5px) {
    .log-in-form {
        width: 90%;
    }

    .log-in-form-elem {
        width: 80%;
    }
}

@media (min-width: 320px) and (max-width: 424.5px) {
    .log-in-form {
        width: 90%;
    }

    .log-in-form-elem {
        width: 80%;
    }
}
</style>