<template>
    <Header/>
    <SectionContainer class="gap-0 bg-main-bg">
        <div class="text-lg flex">
            <div @click="goBack" class="cursor-pointer">
                <span class="text-white">Previous page > </span>
            </div>
            <span class="text-[#00007E] ml-1">Private policy</span>
        </div>
        <div class="flex justify-center gap-16 mt-20">
            <div class="max-w-[40%]">
                <img :src="vacancyDetailsLogo"/>
            </div>
            <div class="max-w-[60%]"> <!---->
                <SectionTitle class="text-white h-fit mb-12">
                    Private Policy
                </SectionTitle>
                <div class="p-5">
                    <BodyText>
                        At Hypedriven, we understand that your privacy is important, and we are committed to protecting it. This Privacy Policy explains the types of information we collect from you, how we collect it, how we use it, and how we protect it. By using our website, you consent to the collection and use of information as outlined in this policy.
                    </BodyText>
                </div>
                <div class="p-5">
                    <div class="flex">
                        <SectionSubTitle class="text-[#00007E] text-3xl font-bold mb-5 ">Collection of Information</SectionSubTitle>
                        <div class="private-policy-subtitle"></div>
                    </div>
                    <div class="mb-5 flex">
                        <div class="private-policy-bodytext-line"></div>
                        <BodyText class="my-1 ">
                            We collect information from you when you visit our website, register for an account, subscribe to our newsletter, or fill out a form. 
                        </BodyText>
                    </div>  
                    <BodyText class="private-policy-bodytext-dot">
                        The information we collect may include your name, email address, phone number, and any other information you voluntarily provide to us.
                    </BodyText>
                </div>
                <div class="p-5">
                    <div class="flex">
                        <SectionSubTitle class="text-[#00007E] text-3xl font-bold mb-5 ">Use of Information</SectionSubTitle>
                        <div class="private-policy-subtitle"></div>
                    </div>
                    <div class="mb-5 flex">
                        <div class="private-policy-bodytext-line"></div>
                        <BodyText class="my-1 ">
                            The information we collect from you is used to improve our website and personalize your experience.
                        </BodyText>
                    </div>  
                    <BodyText class="private-policy-bodytext-dot">
                        We may use your information to communicate with you regarding your account, delivery of products or services, promotional offers, or other related topics. 
                    </BodyText>
                    <BodyText class="private-policy-bodytext-dot">
                        We may also use your information to improve our customer service, offer support, or conduct market research. 
                    </BodyText>
                </div>
                <div class="p-5">
                    <div class="flex">
                        <SectionSubTitle class="text-[#00007E] text-3xl font-bold mb-5 ">Data Security</SectionSubTitle>
                        <div class="private-policy-subtitle"></div>
                    </div>
                    <BodyText class="private-policy-bodytext-dot">
                        We use appropriate measures to protect the confidentiality, integrity, and availability of your personal data
                    </BodyText>
                    <BodyText class="private-policy-bodytext-dot">
                        We use modern technologies, industry-standard security practices, and secure communication channels to protect your data from unauthorized access, disclosure or destruction.
                    </BodyText>
                </div>
                <div class="p-5">
                    <div class="flex">
                        <SectionSubTitle class="text-[#00007E] text-3xl font-bold mb-5 ">Sharing of Information</SectionSubTitle>
                        <div class="private-policy-subtitle"></div>
                    </div>
                    <BodyText class="private-policy-bodytext-dot">
                        We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. 
                    </BodyText>
                    <BodyText class="private-policy-bodytext-dot">
                        We use modern technologies, industry-standard security practices, and secure communication channels to protect your data from unauthorized access, disclosure or destruction.
                    </BodyText>
                </div>
                <div class="p-5">
                    <div class="flex">
                        <SectionSubTitle class="text-[#00007E] text-3xl font-bold mb-5 ">Cookies</SectionSubTitle>
                        <div class="private-policy-subtitle"></div>
                    </div>
                    <div class="mb-5 flex">
                        <div class="private-policy-bodytext-line"></div>
                        <BodyText class="my-1">
                            We use cookies on our website to improve your user experience. Cookies are small text files that are automatically placed on your computer or mobile device when you visit our website. They help us understand how you use our website and enable us to personalize your experience.
                        </BodyText>
                    </div>  
                </div>
                <div class="p-5">
                    <div class="flex">
                        <SectionSubTitle class="text-[#00007E] text-3xl font-bold mb-5 ">Third Party Links</SectionSubTitle>
                        <div class="private-policy-subtitle"></div>
                    </div>
                    <div class="mb-5 flex">
                        <div class="private-policy-bodytext-line"></div>
                        <BodyText class="my-1 ">
                            Our website may contain links to third-party websites.
                        </BodyText>
                    </div>  
                    <BodyText class="private-policy-bodytext-dot">
                        We are not responsible for the privacy practices or content of those websites.
                    </BodyText>
                    <BodyText class="private-policy-bodytext-dot">
                        We encourage you to review the privacy policy of any website you visit.
                    </BodyText>
                </div>
                <div class="p-5">
                    <div class="flex">
                        <SectionSubTitle class="text-[#00007E] text-3xl font-bold mb-5 ">Changes to Our Privacy Policy</SectionSubTitle>
                        <div class="private-policy-subtitle"></div>
                    </div>
                    <div class="mb-5 flex">
                        <div class="private-policy-bodytext-line"></div>
                        <BodyText class="my-1">
                            We reserve the right to modify this Privacy Policy at any time. Any changes will be effective immediately upon posting on our website.
                        </BodyText>
                    </div>  
                </div>
                <div class="p-5">
                    <div class="flex">
                        <SectionSubTitle class="text-[#00007E] text-3xl font-bold mb-5 ">Contact Us</SectionSubTitle>
                        <div class="private-policy-subtitle"></div>
                    </div>
                    <div class="mb-5 flex">
                        <div class="private-policy-bodytext-line"></div>
                        <BodyText class="my-1">
                            If you have any questions about this Privacy Policy,
                            please <router-link to="/contact-us"><span class="text-[#150DCE]">contact us</span></router-link> at our website.
                        </BodyText>
                    </div>  
                </div>
                
                <div class="flex mt-4">
                    <Button class="rounded-3xl grow mr-[22px]" @click="agree">Agree</Button>
                    <Button class="rounded-3xl bg-transparent border-2 border-white px-12" @click="goBack">Go back</Button>
                </div>
                
            </div>
            
        </div>
        
    

        
        
    </SectionContainer>
    <Footer/>
</template>

<script>
import Header from "../header/index.vue";
import Footer from "../footer/index.vue";
import SectionContainer from "../sections/container.vue";
import SectionTitle from "../sections/title";
import BodyText from "../text/body/body.vue"
import SectionSubTitle from "../sections/sub-title";
import Button from "../buttons/index.vue";
import router from "@/router";
export default {
    name: "PrivatePolicyComponent",
    components: {
        Header,
        Footer,
        SectionContainer,
        SectionTitle,
        SectionSubTitle,
        BodyText,
        Button
    },
    data: () => {
        return {
            vacancyDetailsLogo: require('@/assets/img/images/private-policy-logo.png')
        }
    },
    methods: {
        goBack() {
            router.go(-1)
        },
        agree() {
            this.$emit('agree', true)
        }
        /*setPrivatePolicyToTrue() {
            this.$router.commit('agree', true);
        }*/
    }
    
}
</script>

<style>
.private-policy-bodytext-dot {
    position: relative;
}
.private-policy-bodytext-dot::before {
    content: "";
    position: absolute;
    left: -30px;
    top: 10px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: white;
}
.private-policy-bodytext-line {
    border-left: 2px solid white;
    margin-left: -25px;
    margin-right: 25px;
}
.private-policy-subtitle {  
    flex-grow: 1;
    border-top: 2px solid rgb(255, 255, 255);
    margin-top: 27px;
    margin-left: 15px;
}
</style>