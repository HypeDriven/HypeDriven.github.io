<template>
    <div class="contact-us-form-wrapper">
        <form @submit.prevent="submit"> 
            <div class="contact-us-form-group">
                <label for="fullName">Your Name</label>
                <input
                    id="fullName"
                    name="Full Name"
                    type="text"
                    v-model.trim="fullName"    
                    :class="{'form-is-invalid': errors.fullName}"
                    required
                    class="contact-us-element py-[5px] pl-[5px]"
                    placeholder="Your name"
                    >
                <div v-if="errors.fullName" class="form-invalid-feedback"><img class="mr-1" :src="worningImg"/>{{ errors.fullName }}</div>
            </div>
            <div class="contact-us-form-group">
                <label for="email">Your Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    :class="{'form-is-invalid': errors.email}"
                    v-model="email"    
                    required
                    class="contact-us-element py-[5px] pl-[5px]"
                    placeholder="Your email"
                    >
                <div v-if="errors.email" class="form-invalid-feedback"><img class="mr-1" :src="worningImg"/>{{ errors.email }}</div>
            </div>
            <div class="contact-us-form-group">
                <label for="companyName">Company Name</label>
                <input
                    id="companyName"
                    name="Company Name"
                    type="text"
                    v-model.trim="companyName"    
                    :class="{'form-is-invalid': errors.companyName}"
                    required
                    class="contact-us-element py-[5px] pl-[5px]"
                    placeholder="Company name"
                    >
                <div v-if="errors.companyName" class="form-invalid-feedback"><img class="mr-1" :src="worningImg"/>{{ errors.companyName }}</div>
            </div>
            <div class="contact-us-form-group">
                <label for="coverLetter">Message</label>
                <textarea 
                    id="coverLetter"
                    name="Cover Letter"
                    v-model="coverLetter"
                    :class="{'form-is-invalid': errors.coverLetter}"
                    class="contact-us-element py-[5px] pl-[5px]"
                    placeholder="Enter your message"
                    
                ></textarea>
                <div v-if="errors.coverLetter" class="form-invalid-feedback"><img class="mr-1" :src="worningImg"/>{{ errors.coverLetter }}</div>
                
            </div>
            <span class="text-base xxs:text-xl">Please allow a couple days for us to respond</span>
            <div class="contact-us-form-group mt-5">
                <div class="flex">
                    <input type="checkbox" id="checkbox" name="Checkbox" class="" v-model="privatePolicyContactUs" required/> <!--@change="switch1"-->
                    <label>I have read the <router-link :to="{ name: 'PrivatePolicy'}"><span class="text-[#150DCE]">Private Policy</span></router-link>, and confirm that Hypedriven store my personal details to be able to process my job application</label>
                </div>
            </div>
            <Button type="submit"  @click="validate" class="mt-5 xxs:w-full xs:w-full sm:w-full">Send message</Button>
        </form>
    </div>
</template>

<script>
import Button from "../../buttons";
import { mapFields } from "vuex-map-fields";
import router from "@/router";

export default {
    name: "ContactUsFormComponent",
    components: {
        Button
    },
    data: () => {
        return {
            endpoint: 'https://formspree.io/f/xknaqwja',
            worningImg: require('@/assets/img/images/invalid-feedback-warning-img.svg'),
            errors: {
                
            }
        }
    },
    computed: {
        ...mapFields({
            fullName: "fullName",
            email: "email",
            companyName: "companyName",
            coverLetter: "message",
            privatePolicyContactUs: 'privatePolicyContactUs'
        })
    },
    methods: {
        async submit() {
                const data = {
                    fullName: this.fullName,
                    email: this.email,
                    companyName: this.companyName,
                    coverLetter: this.coverLetter,
                    privacyPolicy: this.privacyPolicy
                }
                await fetch(this.endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    router.push('/contact-us/applied');
                })
                .catch(error => {
                    console.error(error);
                });
            
        },
        validate() {
            this.errors={}

            if (!this.fullName) {
                this.errors.fullName = 'Full name is required';
            }

            if (!this.email) {
                this.errors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(this.email)) {
                this.errors.email = 'Email is invalid';
            }

            if (!this.companyName) {
                this.errors.companyName = 'Company name is required';
            }

            if (!this.coverLetter) {
                this.errors.coverLetter = 'Your Message is required';
            }

            return Object.keys(this.errors).length === 0;
        }
    }
}
</script>

<style>
.contact-us-form-wrapper {
    padding: 15px;
}

.contact-us-form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.contact-us-element {
    background-color: transparent; 
    border: 1px solid #fff; 
    color: #00007E;
}

.contact-us-element::placeholder {
    color: white;
}

.contact-us-form-group textarea {
    resize: vertical; 
    min-height: 130px; 
}

.contact-us-form-group label {
    font-size: 12px;
}

.form-invalid-feedback {
    color: red;
    display: flex;
    margin-top: 5px;
}

.contact-us-form-group input[type="checkbox"] {
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

.contact-us-form-group input[type="checkbox"]::before {
  content: "";
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 10px;
  background-color: transparent;
  border: 2px solid #00007E;
  border-radius: 2px;
}

.contact-us-form-group input[type="checkbox"]:checked::before {
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
@media (min-width: 576px) and (max-width: 767.5px) {
    .contact-us-form-wrapper {
        padding-top: 25px;
        padding-right: 0px;
        padding-left: 0px;
    } 
}
@media (min-width: 425px) and (max-width: 575.5px) {
    .contact-us-form-wrapper {
        padding-top: 25px;
        padding-right: 0px;
        padding-left: 0px;
    } 
}
@media (min-width: 320px) and (max-width: 424.5px) {
    .contact-us-form-wrapper {
        padding-top: 25px;
        padding-right: 0px;
        padding-left: 0px;
    } 
}
</style>