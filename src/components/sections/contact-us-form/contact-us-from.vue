<template>
    <div class="contact-us-form-wrapper">
        <form action="https://formspree.io/f/meqwrjqn" method="POST">
            <div class="contact-us-form-group">
                <label for="fullName">Your Name</label>
                <input
                    id="fullName"
                    name="Full Name"
                    type="text"
                    v-model.trim="formData.fullName"    
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
                    v-model="formData.email"    
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
                    v-model.trim="formData.companyName"    
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
                    v-model="formData.coverLetter"
                    :class="{'form-is-invalid': errors.coverLetter}"
                    class="contact-us-element py-[5px] pl-[5px]"
                    placeholder="Enter your message"
                    
                ></textarea>
                <div v-if="errors.coverLetter" class="form-invalid-feedback"><img class="mr-1" :src="worningImg"/>{{ errors.coverLetter }}</div>
                <span>{{ $store.state.privatePolicyContactUs }}</span>
            </div>
            <span class="text-base">Please allow a couple days for us to respond</span>
            <div class="contact-us-form-group mt-5">
                <div class="flex">
                    <input type="checkbox" id="checkbox" name="Checkbox" class="" v-model="formData.privacyPolicy" required/>
                    <label>I have read the <router-link :to="{ name: 'PrivatePolicy'}"><span class="text-[#150DCE]">Private Policy</span></router-link>, and confirm that Hypedriven store my personal details to be able to process my job application</label>
                </div>
            </div>
            <Button type="submit"  @click="validate" class="rounded-3xl mt-5">Send message</Button>
        </form>
    </div>
</template>

<script>
import Button from "../../buttons";
export default {
    name: "ContactUsFormComponent",
    components: {
        Button
    },
    data: () => {
        return {
            worningImg: require('@/assets/img/images/invalid-feedback-warning-img.svg'),
            formData: {
                fullName: "",
                email: "",
                companyName: "",
                coverLetter: "",
                privacyPolicy: false
            },
            errors: {
                
            }
        }
    },
    methods: {
        submit() {
            if(this.validate) {
                console.log('Send to server');
            }
        },
        agree() {
            this.formData.privacyPolicy = true;
        },
        validate() {
            this.errors={}

            if (!this.formData.fullName) {
                this.errors.fullName = 'Full name is required';
            }

            if (!this.formData.email) {
                this.errors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(this.formData.email)) {
                this.errors.email = 'Email is invalid';
            }

            if (!this.formData.companyName) {
                this.errors.companyName = 'Company name is required';
            }

            if (!this.formData.coverLetter) {
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
    background-color: transparent; /* зробити фон прозорим */
    border: 1px solid #fff; /* встановити білу границю */
    color: #00007E;
}
.contact-us-element::placeholder {
    color: white;
}
.contact-us-form-group textarea {
    resize: vertical; /* дозволяє змінювати висоту textarea */
    min-height: 130px; /* встановити мінімальну висоту 200px */
}
.contact-us-form-group label {
    font-size: 12px;
}
.form-invalid-feedback {
    color: red;
    display: flex;
    margin-top: 5px;
}
.form-is-invalid {
    /* border: 1px solid red; */
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
</style>