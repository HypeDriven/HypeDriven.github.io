<template>
    <SectionContainer class="bg-main-bg" >
            <div class="flex justify-between"> 
                <div class="industries-hero-card-content">
                    <div class="">
                        <SectionTitle class="text-white h-fit m-auto text-6xl leading-[70px] max-w-full px-2 uppercase">
                            {{ $t('industriesPage.hero.title') }}<span class="text-[#00007E] uppercase">many industries</span>
                        </SectionTitle>
                            <div class="flex justify-between mt-16">
                                <div class="relative">   
                                    <img :src="searchBarIcon" class=" absolute left-[10px] translate-y-[50%]"/>
                                    <input  class="w-[450px] p-3 px-12 rounded-3xl" 
                                    placeholder="Write title of job"
                                    type="text"
                                    v-model="searchQuery"
                                    maxlength="30"/> 
                                
                                    <img :src="crossSearchBarIcon" class=" absolute right-[10px] top-[50%] translate-y-[-50%] cursor-pointer"
                                    @click="searchQuery=''"/>
                                </div>
                            
                                
                                <Button class="w-[150px] rounded-3xl"
                                @click="scrollToElement"
                                >{{ $t('button.find') }}</Button>
                            </div>
                            <div v-if="notFound" class="mt-4 industries-hero-card-notFound"
                            :class="{ closeWarning: isAnimating}">
                                <span class="bg-white border-2 border-[red] p-3 px-12 rounded-3xl text-[red] relative">{{enterText ? 'Enter title of job text )' :  'Not found such a job'}} 
                                    <img :src="crossSearchBarIcon" class=" absolute right-[20px] top-[50%] translate-y-[-50%] cursor-pointer"
                                    @click="startAnimation"/>
                                </span>
                            </div>
                        </div>           
                    </div>
                    <div class="industries-hero-card-content">  
                        <img :src="img" class="industries-hero-card-content-img"/>    
                    </div>
            </div>
    </SectionContainer>
    <Industry :industryItems="industryItems"/>
</template>

<script>
import SectionContainer from "../sections/container.vue";
import SectionTitle from "../sections/title";
import Industry from "../../components/sections/industries-page/industry.vue"
import Button from "../buttons";
export default {
    name: "IndustriesPageHeroComponent",
    components: {
        SectionContainer,
        SectionTitle,
        Button,
        Industry
    },
    data: function () {
        return {
            searchQuery: '',
            notFound: false,
            enterText: false,
            isAnimating: false,
            img: require('../../assets/img/images/industriespage-hero-img.png'),
            searchBarIcon: require('../../assets/img/images/industriespage-hero-searchbar-icon.svg'),
            crossSearchBarIcon: require('../../assets/img/images/industriespage-hero-searchbar-cross-icon.svg'),
            industryItems: [
                {
                    id: 1,
                    title: "Travel",
                    subtittle: "Lorem ipsum dolor sit amet consectetur. Et pellentesque enim sed feugiat accumsan enim ac ipsum purus. Massa ac sollicitudin pharetra consectetur. Sit in congue lacus phasellus.",
                    technologies: ["Android", "AWS", "IOS", "Telecom", "Mobile development", "Kotlin"],
                    img: require('@/assets/img/images/industriespage-industry-img1.png'),
                    showContent: false
                },
                {
                    id: 2,
                    title: "Logistic",
                    subtittle: "Lorem ipsum dolor sit amet consectetur. Mi sit arcu arcu vulputate. Viverra commodo montes tempor erat pellentesque lobortis. Tristique sed sed malesuada nec urna molestie tortor. Pellentesque vitae tortor adipiscing pharetra morbi sit id euismod maecenas.",
                    technologies: ["Android", "AWS", "IOS", "Telecom", "Mobile development"],
                    img: require('@/assets/img/images/industriespage-industry-img2.png'),
                    showContent: false
                },
                {
                    id: 3,
                    title: "Telecom",
                    subtittle: "Lorem ipsum dolor sit amet consectetur. Egestas senectus feugiat amet libero arcu a felis viverra diam. Dictum erat at volutpat etiam. Dignissim egestas tortor quis fermentum.",
                    technologies: ["Android", "AWS", "IOS", "Telecom", "Mobile development", "Kotlin"],
                    img: require('@/assets/img/images/industriespage-industry-img3.png'),
                    showContent: false
                },
                {
                    id: 4,
                    title: "Automotive",
                    subtittle: "Lorem ipsum dolor sit amet consectetur. Nunc eros sed tempor urna justo mauris. Metus enim nulla amet non aliquet fringilla lacus commodo. Commodo varius sed tincidunt sed risus dolor non. Nam duis auctor tortor in ac. Malesuada fermentum vitae habitasse mattis id a integer.",
                    technologies: ["Android", "AWS", "IOS", "Telecom", "Mobile development", "Kotlin"],
                    img: require('@/assets/img/images/industriespage-industry-img4.png'),
                    showContent: false
                },
                {
                    id: 5,
                    title: "Banking Capital Markets",
                    subtittle: "Lorem ipsum dolor sit amet consectetur. Egestas senectus feugiat amet libero arcu a felis viverra diam. Dictum erat at volutpat etiam. Dignissim egestas tortor quis fermentum.",
                    technologies: ["Android", "AWS", "IOS", "Telecom", "Mobile development"],
                    img: require('@/assets/img/images/industriespage-industry-img5.png'),
                    showContent: false
                },
                {
                    id: 6,
                    title: "Gaming",
                    subtittle: "Lorem ipsum dolor sit amet consectetur. Egestas senectus feugiat amet libero arcu a felis viverra diam. Dictum erat at volutpat etiam. Dignissim egestas tortor quis fermentum.",
                    technologies: ["Android", "AWS", "IOS", "Telecom", "Mobile development", "Kotlin"],
                    img: require('@/assets/img/images/industriespage-industry-img6.png'),
                    showContent: false
                },
                {
                    id: 7,
                    title: "eCommerce",
                    subtittle: "Lorem ipsum dolor sit amet consectetur. Egestas senectus feugiat amet libero arcu a felis viverra diam. Dictum erat at volutpat etiam. Dignissim egestas tortor quis fermentum.",
                    technologies: ["Android", "AWS", "IOS", "Telecom"],
                    img: require('@/assets/img/images/industriespage-industry-img7.png'),
                    showContent: false
                },
                {
                    id: 8,
                    title: "Manufacturing",
                    subtittle: "Lorem ipsum dolor sit amet consectetur. Egestas senectus feugiat amet libero arcu a felis viverra diam. Dictum erat at volutpat etiam. Dignissim egestas tortor quis fermentum.",
                    technologies: ["Android", "AWS", "IOS", "Telecom", "Mobile development", "Kotlin"],
                    img: require('@/assets/img/images/industriespage-industry-img8.png'),
                    showContent: false
                },
                {
                    id: 9,
                    title: "RealEstate",
                    subtittle: "Lorem ipsum dolor sit amet consectetur. Egestas senectus feugiat amet libero arcu a felis viverra diam. Dictum erat at volutpat etiam. Dignissim egestas tortor quis fermentum.",
                    technologies: ["Android", "AWS", "IOS", "Telecom", "Mobile development", "Kotlin", "Mobile development", "Kotlin"],
                    img: require('@/assets/img/images/industriespage-industry-img9.png'),
                    showContent: false
                },
                {
                    id: 10,
                    title: "Enterprise",
                    subtittle: "Lorem ipsum dolor sit amet consectetur. Egestas senectus feugiat amet libero arcu a felis viverra diam. Dictum erat at volutpat etiam. Dignissim egestas tortor quis fermentum.",
                    technologies: ["Android", "AWS", "IOS", "Telecom", "Mobile development", "Kotlin"],
                    img: require('@/assets/img/images/industriespage-industry-img10.png'),
                    showContent: false
                },
                {
                    id: 11,
                    title: "Healthcare",
                    subtittle: "Lorem ipsum dolor sit amet consectetur. Egestas senectus feugiat amet libero arcu a felis viverra diam. Dictum erat at volutpat etiam. Dignissim egestas tortor quis fermentum.",
                    technologies: ["Android", "AWS", "IOS", "Telecom", "Mobile development", "Kotlin", "Mobile development", "Kotlin"],
                    img: require('@/assets/img/images/industriespage-industry-img11.png'),
                    showContent: false
                },
                {
                    id: 12,
                    title: "Hospitality",
                    subtittle: "Lorem ipsum dolor sit amet consectetur. Egestas senectus feugiat amet libero arcu a felis viverra diam. Dictum erat at volutpat etiam. Dignissim egestas tortor quis fermentum.",
                    technologies: ["Android", "AWS", "IOS", "Telecom", "Mobile development", "Kotlin"],
                    img: require('@/assets/img/images/industriespage-industry-img12.png'),
                    showContent: false
                }
            ]
        };
    },
    methods: {
        scrollToElement() {
            const query = this.searchQuery.toLowerCase().trim();
            if(document.getElementById(query)) {
                document.getElementById(query).scrollIntoView({
                    behavior: 'smooth'
                })
                this.notFound = false
                this.updateElem(query)
                this.searchQuery=''
            } else if(query === '') {
                this.enterText = true
                this.notFound = true
            } else {
                this.notFound = true
                this.enterText = false
            }   
            
        },
        updateElem(query) {
            const elem = this.industryItems.find(obj => obj.title.toLowerCase() === query)
            elem.showContent = true
        },
        startAnimation() {
            this.isAnimating = true;
            setTimeout(() => {
                this.isAnimating = false;
                this.enterText = false;
                this.notFound = false;
            }, 1000)
        }
    }
};
</script>

<style>
.industries-hero-card-content {
    max-width: 50%;
    text-align: left;
}
.industries-hero-card-content-img {
    width: 100%;
    height: 100%;
}
.industries-hero-card-notFound {
    animation: notFoundAnimation 1s 1 ease-in-out;
} 
@keyframes notFoundAnimation {
    0%{
        transform: translateX(-25%)
    }
    50%{
        transform: translateX(25%)
    }
    100% {
        transform: translateX(0%)
    }
}
.closeWarning {
    animation: closeWarning 1.1s 1 ease-in-out;
}
@keyframes closeWarning {
    0%{
        transform: translateX(0%)
    }
    50%{
        transform: translateX(25%)
    }
    100% {
        transform: translateX(-75%)
    }
}
</style>
