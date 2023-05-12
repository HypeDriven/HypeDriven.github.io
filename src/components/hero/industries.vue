<template>
    <SectionContainer class="bg-main-bg md:pt-16 md:pb-0 sm:px-4 sm:pt-16 sm:pb-0 xs:px-4 xs:pt-16 xxs:px-4 xxs:pt-16" >
            <div class="flex justify-between lg:flex-row md:flex-col sm:flex-col xs:flex-col xxs:flex-col"> 
                <div class="industries-hero-card-content">
                    <div class="">
                        <SectionTitle class="text-white h-fit m-auto xl:text-6xl lg:text-5xl md:text-6xl sm:text-6xl xs:text-5xl xxs:text-5xl text-left leading-[70px] max-w-full px-2 uppercase">
                            {{ $t('industriesPage.hero.title') }}<span class="text-[#00007E] uppercase">many industries</span>
                        </SectionTitle>
                            <div class="flex justify-between mt-16 sm:hidden xs:hidden xxs:hidden">
                                <div class="relative 1xl:w-[72%] xl:w-[70%] lg:w-[62%] md:w-[75%]" :class="notFound ? 'border-2 border-[red] rounded-3xl' : ''">   
                                    <img :src="searchBarIcon" class=" absolute left-[10px] translate-y-[40%] xs:translate-y-[30%] xxs:translate-y-[20%]"/>
                                    <input  class="1xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] p-3 px-12 rounded-3xl" 
                                    :placeholder="placeholder"
                                    type="text"
                                    v-model="searchQuery"
                                    maxlength="30"/> 
                                
                                    <img :src="crossSearchBarIcon" class=" absolute right-[10px] top-[50%] translate-y-[-50%] cursor-pointer"
                                    @click="searchQuery=''"/>
                                </div>
                            
                                
                                <Button class="w-[150px]"
                                @click="scrollToElement"
                                >{{ $t('button.find') }}</Button>
                            </div>
                            <div class="bg-white hidden sm:flex xs:flex xxs:flex justify-between mt-8 sm:px-0 xs:px-2 border-2 border-white rounded-[26px]" :class="notFound ? 'border-2 border-[red] rounded-3xl' : ''">
                                <div class="relative w-full">   
                                    <input  class="w-full p-3 px-12 rounded-3xl" 
                                    :placeholder="placeholder"
                                    type="text"
                                    v-model="searchQuery"
                                    maxlength="30"/> 
                                
                                    <img :src="searchBarIcon" class=" absolute right-[10px] top-[50%] translate-y-[-50%]" @click="scrollToElement"/>
                                </div>
                            </div>
                        </div>           
                    </div>
                    <div class="industries-hero-card-content md:mt-14 sm:mt-12 xs:mt-10 xxs:mt-10">  
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
            placeholder: 'Write name of Industry',
            notFound: false,
            img: require('../../assets/img/images/industriespage-hero-img.svg'),
            searchBarIcon: require('../../assets/img/images/industriespage-hero-searchbar-icon.svg'),
            crossSearchBarIcon: require('../../assets/img/images/industriespage-hero-searchbar-cross-icon.svg'),
            industryItems: [
                {
                    id: 1,
                    title: "Travel",
                    subtittle: "With technology rapidly advancing, software has become an integral part of enhancing customer experiences while traveling. Hypedriven's team members have vast experience implementing these solutions, which have helped grow and succeed within the competitive travel industry.",
                    subtittle2: "Our experienced developers provide customized travel solutions such as reservation and booking systems, itinerary management systems, online payment processing services, and CRM systems tailored to meet specific needs. The continuous evolution of technology demands that companies stay ahead of their competitors; thus Hypedriven provides cutting-edge technological support to achieve this goal in the ever-changing environment of travel requirements.",
                    technologies: ["Itinerary management systems", "iOS app", "CRM systems ", "Mobile development", "Payment processing services", "Booking systems", "Travel solutions"],
                    img: require('@/assets/img/images/industriespage-industry-img1.1.png'),
                    img2: require('@/assets/img/images/industriespage-industry-img1.2.png'),
                    img3: require('@/assets/img/images/industriespage-industry-img1.3.png'),
                    showContent: false
                },
                {
                    id: 2,
                    title: "Logistic",
                    subtittle: "Hypedriven is a software engineering company that provides custom solutions for the logistics industry. The comprehensive services include warehouse, transportation, and supply chain management systems designed to streamline operations while reducing costs and increasing overall efficiency. With years of experience implementing various logistics solutions, Hypedriven's expertise will undoubtedly help drive growth and success within the industry.",
                    subtittle2: "Additionally, we have experience of developing new features and enhancing existing functionalities on some of the world's top maritime operation software platforms. By offering tailored solutions that meet each client's unique requirements, Hypedriven can effectively position companies ahead of their competition.",
                    technologies: ["Logistic technology", "Android", "IOS", "Warehouse system", "Mobile development", "Supply chain management systems"],
                    img: require('@/assets/img/images/industriespage-industry-img2.1.png'),
                    img2: require('@/assets/img/images/industriespage-industry-img2.2.png'),
                    img3: require('@/assets/img/images/industriespage-industry-img2.3.png'),
                    showContent: false
                },
                {
                    id: 3,
                    title: "Telecom",
                    subtittle: "The telecommunications industry has experienced remarkable growth in recent years due to technological advancements and the growing demand for connectivity.",
                    subtittle2: "At Hypedriven, we recognize the significance of providing innovative solutions that cater to the dynamic requirements of telecom companies. We collaborate closely with our clients to create tailor-made software solutions that enhance operational efficiency, reduce costs, and optimize overall performance.",
                    subtittle3: "As a software development company, we offer an array of services including Custom Software Development, Network Management Software, Billing and Payment Systems, Customer Relationship Management (CRM) Systems, Internet of Things (IoT) Solutions Analytics and Business Intelligence among others.",
                    technologies: ["Android", "IOS", "Software Development", "Mobile development", "CRM Systems", "IoT", "Billing and Payment Systems"],
                    img: require('@/assets/img/images/industriespage-industry-img3.1.png'),
                    img2: require('@/assets/img/images/industriespage-industry-img3.2.png'),
                    img3: require('@/assets/img/images/industriespage-industry-img3.3.png'),
                    showContent: false
                },
                {
                    id: 4,
                    title: "Automotive",
                    subtittle: "The automotive industry is undergoing a major transformation, driven by advancements in technology and changing consumer preferences. At Hypedriven, we understand the importance of providing innovative software solutions to meet the evolving needs of this dynamic industry. Whether you need to build a new automotive application from scratch, integrate your existing systems, or optimize your vehicle's software and firmware, we have the skills and expertise to deliver results. We follow industry best practices and use the latest tools and technologies to ensure that our solutions are secure, reliable, and scalable.",
                    subtittle2: "At Hypedriven, we have experience in developing an app that facilitates the use of electric cars by providing solutions for their charging. Some of other solutions we can provide for the automotive industry include: Connected Car Solution, Automotive Cloud solutions, Autonomous Vehicle Solutions, Electric Vehicle Solutions and Infotainment Solutions.",
                    technologies: ["Automotive app", "Vehicle's software", "Automotive Cloud solutions", "Electric Vehicle"],
                    img: require('@/assets/img/images/industriespage-industry-img4.1.png'),
                    img2: require('@/assets/img/images/industriespage-industry-img4.2.png'),
                    img3: require('@/assets/img/images/industriespage-industry-img4.3.png'),
                    showContent: false
                },
                {
                    id: 5,
                    title: "Banking Capital Markets",
                    subtittle: "Hypedriven offers innovative solutions for the banking and capital markets industry to address its unique challenges and opportunities in the digital age. Our services include custom software development, banking software integration, data analytics tools, cybersecurity solutions, blockchain development, and digital transformation consultancy.",
                    subtittle2: "We develop solutions that are fully compliant with all industry regulations while also incorporating best practices from around the world. Our team members have extensive experience with both traditional payment systems and cryptocurrencies, having provided successful solutions for one of the most widely used cryptocurrency payment gateways and wallets supporting nearly 2,500 different coins.",
                    technologies: ["Banking software", "Data analytics tools", "Mobile development", "Cybersecurity solutions", "Blockchain", "Payment systems"],
                    img: require('@/assets/img/images/industriespage-industry-img5.1.png'),
                    img2: require('@/assets/img/images/industriespage-industry-img5.2.png'),
                    img3: require('@/assets/img/images/industriespage-industry-img5.3.png'),
                    showContent: false
                },
                {
                    id: 6,
                    title: "Gaming",
                    subtittle: "Hypedriven offers innovative game development solutions that enhance player experiences. With extensive expertise in game design, the company manages both independent and co-development projects while collaborating with clients to create customized games and offer supplementary operational services.",
                    subtittle2: "The team's proficiency enables us to cover all major gaming platforms while developing products that cater to customers' vision and players' preferences. Hypedriven's services include Android/IOS Game Development, MMORPG Game Development, 3D Game Development, Unity Development, Unreal Development, PC & Mobile Game Development, Gamification Services, and Blockchain/NFT/Metaverse developments. We follow best practices and leverage the latest tools and technologies to ensure highly engaging, immersive gameplay for players.",
                    technologies: ["Game development", "PC Game Development", "Android/IOS Game Development", "Blockchain", "NFT", "Metaverse", "Gamification Services"],
                    img: require('@/assets/img/images/industriespage-industry-img6.1.png'),
                    img2: require('@/assets/img/images/industriespage-industry-img6.2.png'),
                    img3: require('@/assets/img/images/industriespage-industry-img6.3.png'),
                    showContent: false
                },
                {
                    id: 7,
                    title: "eCommerce",
                    subtittle: "As online shopping grows, ecommerce businesses must prioritize user-friendly experiences. Our software development company provides comprehensive services to enhance your digital presence. Our experienced team tailors custom ecommerce solutions, incorporating features like payment gateways, order management systems, and responsive web design to boost online sales. We also streamline operations by integrating ecommerce platforms with third-party systems such as inventory management and shipping providers.",
                    subtittle2: "Our analytics and business intelligence solutions offer valuable insights into customer behavior, while our security measures protect against cyber attacks. Our commitment to high-quality, reliable service means we help ecommerce businesses thrive in the digital marketplace.",
                    technologies: ["Ecommerce solutions", "Payment gateways", "Inventory management", "Shipping providers", "Order management systems", "Security measures", "Ecommerce app"],
                    img: require('@/assets/img/images/industriespage-industry-img7.1.png'),
                    img2: require('@/assets/img/images/industriespage-industry-img7.2.png'),
                    img3: require('@/assets/img/images/industriespage-industry-img7.3.png'),
                    showContent: false
                },
                {
                    id: 8,
                    title: "Manufacturing",
                    subtittle: "Hypedriven acknowledges the significant role of manufacturing in the global economy and is committed to providing innovative solutions that ensure manufacturers maintain their competitive edge. Our range of expertise caters to both small and large multinational corporations, ensuring successful outcomes across all levels. By working closely with our clients, we identify unique manufacturing requirements, tailoring end-to-end solutions encompassing design, planning through to production and delivery.",
                    subtittle2: "Our comprehensive approach tackles numerous industry-related challenges such as inefficient processes or unplanned deviations resulting from poor data integrity or delayed releases. Our flexible software provides customized solutions aligned with specific business needs for optimal results.",
                    technologies: ["Software Development", "Security measures", "Delivery system ", "Production system"],
                    img: require('@/assets/img/images/industriespage-industry-img8.1.png'),
                    img2: require('@/assets/img/images/industriespage-industry-img8.2.png'),
                    img3: require('@/assets/img/images/industriespage-industry-img8.3.png'),
                    showContent: false
                },
                {
                    id: 9,
                    title: "RealEstate",
                    subtittle: "At Hypedriven, we strive to empower real estate professionals by providing them with a comprehensive set of solutions that streamline their operations and enhance their efficiency. Our software solutions are customizable and designed to meet the unique needs of each client. We offer solutions for property management, leasing, and sales that help real estate professionals automate key processes and reduce manual labor.",
                    subtittle2: "Our product line includes personalized real estate websites; online platforms for property management plans; RETS/IDX/MLS integrations and development; a powerful evaluation engine for real estate assessments; HOA (Homeowners Association) management tools; virtual property solutions along with several other options to choose from.",
                    technologies: ["Real estate websites", "Real estate app", "RETS/IDX/MLS development", "Property management solutions"],
                    img: require('@/assets/img/images/industriespage-industry-img9.1.png'),
                    img2: require('@/assets/img/images/industriespage-industry-img9.2.png'),
                    img3: require('@/assets/img/images/industriespage-industry-img9.3.png'),
                    showContent: false
                },
                {
                    id: 10,
                    title: "Enterprise",
                    subtittle: "At Hypedriven, we understand the unique challenges that enterprises face in today's ever-changing business landscape. Our enterprise software development services include CRM Development, Enterprise Resource Planning, Business Intelligence (BI) and Data Analytics, Third-party Software Integration, IoT Integration, Marketing Automation, Salesforce Integration Blockchain Development as well as Cloud Computing and Digital Transformation.",
                    subtittle2: "We utilize cutting-edge technologies to create customized software solutions that are scalable,easy-to-use and efficient for each client's unique requirements. We are committed to providing businesses with software solutions that enable them to operate at maximum efficiency and stay ahead of the competition.",
                    technologies: ["Enterprise software", "CRM Development", "Salesforce Integration Blockchain Development", "Third-party Software Integration", "Enterprise Resource Planning solution", "IoT Integration", "Marketing Automation"],
                    img: require('@/assets/img/images/industriespage-industry-img10.1.png'),
                    img2: require('@/assets/img/images/industriespage-industry-img10.2.png'),
                    img3: require('@/assets/img/images/industriespage-industry-img10.3.png'),
                    showContent: false
                },
                {
                    id: 11,
                    title: "Healthcare",
                    subtittle: "Hypedriven recognizes the importance of IT solutions in the healthcare industry and offers a range of cutting-edge solutions to address the unique needs of their clients. Our team of experienced professionals provides Electronic Health Record software development and integration, Telehealth and Telemedicine software solutions, Laboratory Information Management System services, and Assistive Technology software designed for visually or hearing impaired individuals, as well as those with cognitive illnesses or learning disabilities.",
                    subtittle2: "Hypedriven also ensures that our solutions meet industry regulations and use the latest tools and technologies to ensure security and scalability. We strive to enhance the quality of life for healthcare patients and professionals alike.",
                    technologies: ["Electronic Health Record software", "Telemedicine software", "Telehealth software", "Laboratory Information Management System", "Assistive Technology software"],
                    img: require('@/assets/img/images/industriespage-industry-img11.1.png'),
                    img2: require('@/assets/img/images/industriespage-industry-img11.2.png'),
                    img3: require('@/assets/img/images/industriespage-industry-img11.3.png'),
                    showContent: false
                },
                {
                    id: 12,
                    title: "Hospitality",
                    subtittle: "The hospitality industry has transformed over the years and technology has played a significant role in enhancing the guest experience. Hypedriven, a software development company, offers customized solutions that cater to the specific needs of the hospitality industry.",
                    subtittle2: "Our expertise includes building Booking and Reservation Systems, developing Restaurant and Bar Management Software, managing Vacation Rentals and Timeshares, integrating Customer Relationship Management systems with Loyalty/Rewards programs, providing Property Management System Software, and Mobile apps. Hypedriven strives to help businesses in the hospitality industry succeed by providing them with the necessary skills and expertise.",
                    technologies: ["Booking systems", "Management Software", "Mobile development", "Web development", "Loyalty/Rewards programs", "Rentals software"],
                    img: require('@/assets/img/images/industriespage-industry-img12.1.png'),
                    img2: require('@/assets/img/images/industriespage-industry-img12.2.png'),
                    img3: require('@/assets/img/images/industriespage-industry-img12.3.png'),
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
                this.placeholder = 'Write name of Industry'
            } else if (query === '') {
                this.notFound = true
                this.placeholder = 'Enter name of Industry !'
            
            } else if (!document.getElementById(query)) { 
                this.searchQuery=''
                this.notFound = true
                this.placeholder = 'Not found such an Industry...'
                
            } else {
                this.notFound = true
            }   
            
        },
        updateElem(query) {
            const elem = this.industryItems.find(obj => obj.title.toLowerCase() === query)
            elem.showContent = true
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

@media (min-width: 768px) and (max-width: 1023.5px) {
    .industries-hero-card-content {
        max-width: 100%;
    }    
    .industries-hero-card-content-img {
        width: 80%;
        height: 80%;
        margin: 0 auto;
    }   
}

@media (min-width: 576px) and (max-width: 767.5px) {
    .industries-hero-card-content {
        max-width: 100%;
    }    
    .industries-hero-card-content-img {
        width: 80%;
        height: 80%;
        margin: 0 auto;
    }   
}

@media (min-width: 425px) and (max-width: 575.5px) {
    .industries-hero-card-content {
        max-width: 100%;
    }    
    .industries-hero-card-content-img {
        width: 80%;
        height: 80%;
        margin: 0 auto;
    }   
}

@media (min-width: 320px) and (max-width: 424.5px) {
    .industries-hero-card-content {
        max-width: 100%;
    }    
    .industries-hero-card-content-img {
        width: 80%;
        height: 80%;
        margin: 0 auto;
    }      

}
</style>
