<template>
    <div class="form-wrapper">
        <div class="flex justify-end cursor-pointer" @click="$emit('hide-form')"><img :src="closeBtn" class="pr-5 pt-5"/></div>
        <div class="form-content">
            <SectionTitle class="text-[#00007E] mb-10">Apply now</SectionTitle>
            <form @submit.prevent="submit"> <!--enctype="multipart/form-data"--> <!--action="https://formspree.io/f/xknaqwja" method="POST"-->
                <div class="form-group">
                    <label for="fullName">Full Name</label>
                    <input
                        id="fullName"
                        type="text"
                        v-model.trim="fullName"    
                        required
                        class="focusedElement py-[5px] pl-[5px]"
                    > <!--:class="{'is-invalid': errors.fullName}"-->
                    <div v-if="errors.fullName" class="invalid-feedback"><img class="mr-1" :src="worningImg"/>{{ errors.fullName }}</div>
                </div>
                <div class="form-group">
                    <label for="email">Your Email</label>
                    <input
                        id="email"
                        type="email"
                        v-model="email"    
                        required
                        class="focusedElement py-[5px] pl-[5px]"
                    >
                    <div v-if="errors.email" class="invalid-feedback"><img class="mr-1" :src="worningImg"/>{{ errors.email }}</div>
                </div>
                <div class="form-group">
                    <label for="phone-country">Phone Number</label>
                    <div class="flex border-[1px] border-[#808080] py-[5px]" :class="{'phone-element': isFocused}"> <!--tabindex="0"-->
                        <select id="phone-country" v-model="phone.country" required v-on:focus="isFocused = true" v-on:blur="isFocused = false">
                            <option value="" disabled>Select country</option>
                            <option v-for="(country, i) in countries" :value="country.code" :key="i">{{ country.name }}</option>
                        </select>
                        <label class="flex flex-col justify-center mr-[5px] text-[#00007E]" >{{ phone.country }} </label>
                        <input type="tel" v-model="phone.number" class="text-[#00007E] w-full" placeholder="00-000-00-00" required
                        v-on:focus="isFocused = true"
                        v-on:blur="isFocused = false">
                    </div>
                    <div v-if="errors.phone" class="invalid-feedback"><img class="mr-1" :src="worningImg"/>{{ errors.phone }}</div>
                </div>
                <div class="form-group">
                    <label for="englishLvl">English level</label>
                    <select id="englishLvl" class="focusedElement py-[5px] pl-[5px] text-[#00007E]" v-model="englishLvl" required>
                        <option disabled value="">Your English Proficiency Level</option>
                        <option v-for="(level, i) in englishLvls" :value="level" :key="i">{{level}}</option>
                    </select>
                    <div v-if="errors.englishLvl" class="invalid-feedback"><img class="mr-1" :src="worningImg"/>{{ errors.englishLvl }}</div>
                </div>
                <div class="form-group">
                    <label for="resume">Resume</label>
                    <label for="resume" class="focusedElement py-[5px] pl-[5px] flex text-[#808080]" tabindex="0">
                        <img :src="uploadIcon" class="mr-2 cursor-pointer"/> <span>{{ resume ? 'Your resume is uploaded' : 'Upload your Resume'}}</span>
                    </label>
                    <input type="file" class="hidden" name="Resume" id="resume" @change="handleFileChange" accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" required/>
                    <div v-if="errors.resume" class="invalid-feedback"><img class="mr-1" :src="worningImg"/>{{ errors.resume }}</div>
                </div>
                <div class="form-group">
                    <label for="linkToProfile">Profile</label>
                    <input
                        id="linkToProfile"
                        type="url"
                        placeholder="Link to profile, such as LinkedIn"
                        v-model="linkToProfile"    
                        class="focusedElement py-[5px] pl-[5px]"
                        required
                    >
                    <div v-if="errors.linkToProfile" class="invalid-feedback"><img class="mr-1" :src="worningImg"/>{{ errors.linkToProfile }}</div>
                </div>
                <div class="form-group">
                    <label for="coverLetter">Cover Letter(Optional)</label>
                    <textarea 
                        id="coverLetter" 
                        v-model="coverLetter"
                        class="focusedElement py-[5px] pl-[5px]"
                    ></textarea>
                    <!-- <div v-if=" errors.coverLetter" class="invalid-feedback"><img class="mr-1" :src="worningImg"/>{{  errors.coverLetter }}</div> -->
                </div>
                <div class="form-group mt-5">
                    <div class="flex">
                        <input type="checkbox" id="checkbox" v-model="privacyPolicy" required/>
                        <label>I have read the <router-link :to="'/careers/vacancies/details/' + vacancyId + '/private-policy'" ><span class="text-[#150DCE]">Private Policy</span></router-link>, and confirm that Hypedriven store my personal details to be able to process my job application</label>
                    </div>
                    <div v-if="errors.privacyPolicy" class="invalid-feedback"><img class="mr-1" :src="worningImg"/>{{ errors.privacyPolicy }}</div>
                </div>
                <Button type="submit" @click="validate"  class="w-full rounded-3xl mt-5">Send</Button>
            </form>
        </div>
    </div>
</template>

<script>
import SectionTitle from "../title";
import Button from "../../buttons";
import router from "@/router";
export default {
    name: "VacancyApplyFormComponent",
    components: {
        SectionTitle,
        Button
    }, 
    props: {
        vacancyId: {
            type: Number
        }
    },
    data: () => {
        return {
            isFocused: false,
            fullName: "",
            email: "",
            phone: {country:"", number:""},
            countries: [
                {code: "+1", name: "United States"},
                {code: "+380", name: "Ukraine"},
                {code: "+52", name: "Mexico"},
                {code: "+1", name: "Canada"},
                {code: "+44", name: "United Kingdom"},
                {code: "+33", name: "France"}
            ],
            englishLvls: ["Beginner", "Intermediate", "Advanced", "Fluent"],
            englishLvl: "",
            linkToProfile: "",
            coverLetter: "",
            resume: null,
            privacyPolicy: false,
            endpoint: 'https://formspree.io/f/xknaqwja',
            errors: {},
            closeBtn: require('@/assets/img/images/apply-vacancy-form-close-btn.svg'),
            worningImg: require('@/assets/img/images/invalid-feedback-warning-img.svg'),
            uploadIcon: require('@/assets/img/images/upload.svg')
        }
    },
    methods: {
        async submit() {
                const data = {
                    fullName: this.fullName,
                    email :this.email,
                    phone: {
                        country: this.phone.country,
                        number: this.phone.number
                    },
                    englishLevel: this.englishLvl,
                    linkToProfile: this.linkToProfile,
                    coverLetter: this.coverLetter,
                    resume: this.resume,
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
                    router.push('/careers/vacancies/applied');
                })
                .catch(error => {
                    console.error(error);
                });
            
        },
        handleFileChange(event) {
            this.resume = event.target.files[0];
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

            if (!this.phone.country || !this.phone.number) {
                this.errors.phone = 'Phone number is required';
            } else if (this.phone.number.length > 9 || this.phone.number.length < 9) {
                this.errors.phone = 'Phone number consist of 9 numbers';
            } 

            if (!this.englishLvl) {
                this.errors.englishLvl = 'English level is required';
            }

            if (!this.resume) {
                this.errors.resume = 'Resume is required';
            }

            if (!this.linkToProfile) {
                this.errors.linkToProfile = 'Profile link is required';
            } else if (!/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(this.linkToProfile)) {
                this.errors.linkToProfile = 'Profile link is invalid' ;
            }

            if (!this.privacyPolicy) {
                this.errors.privacyPolicy = 'Privacy policy agreement is required';
            }

            console.log(this.vacancyId);

            return Object.keys(this.errors).length === 0;
        }
    }
}

</script>

<style>
.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}
.form-wrapper {
    background-color: white;
    margin-top: -400px;
}
.form-content {
    padding: 20px 300px 100px 300px;
}

.focusedElement {
    border: 1px solid #808080;
}

.focusedElement:focus {
    border: 2px solid #150DCE;
}

.phone-element {
    border: 2px solid #150DCE;
}

.invalid-feedback {
    color: red;
    display: flex;
    margin-top: 5px;
}

.form-group input[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  margin-right: 10px;
  vertical-align: middle;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.form-group input[type="checkbox"]::before {
  content: "";
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 10px;
  background-color: #fff;
  border: 2px solid #00007E;
  border-radius: 2px;
}

.form-group input[type="checkbox"]:checked::before {
  content: "\2713"; 
  font-size: 16px;
  font-weight: 700;
  color: #00007E; 
  text-align: center;
  line-height: 16px;
  background-color: #fff;
  border: 2px solid #00007E;
  border-radius: 2px;
}
</style>