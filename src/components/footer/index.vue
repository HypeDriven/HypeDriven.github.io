<template>
    <footer id="footer"
        class="py-16 sm:py-12 xs:py-10 xxs:py-8 flex flex-col items-center justify-between flex-wrap bg-primary-bg p-4 md:px-16 lg:px-20 xl:px-28 4xl:px-52 5xl:px-64 6xl:px-80 7xl:px-96 gap-20 border-t-4 border-[#66C3CD]">
        <div class="flex xxs:flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-row justify-between w-full"> 
            <div class="flex flex-col xl:gap-10 lg:gap-8 md:gap-4">
                <div class="text-white 1xl:text-3xl lg:text-2xl md:text-4xl sm:text-4xl xs:text-4xl xxs:text-4xl">
                    Hypedriven
                </div>
                <div class="text-[#9DD3E1] lg:text-xs xl:text-sm sm:text-lg sm:mt-4 xs:text-base xs:mt-4 xxs:text-base xxs:mt-4">
                    Software development company
                </div>
            </div>
            <div class="mx-auto lg:block md:mx-0 md:mt-8 sm:mx-0 sm:mt-8 xs:mx-0 xs:mt-8 xxs:mx-0 xxs:mt-6">
                <div class="xxs:flex xxs:justify-between xs:flex xs:justify-between sm:flex sm:justify-between md:flex md:justify-between md:items-center w-full block flex-grow lg:flex lg:items-center lg:w-auto "> 
                    <div class="xxs:grid xxs:grid-rows-3 xxs:grid-cols-2 xs:grid xs:grid-rows-3 xs:grid-cols-2 sm:grid sm:grid-rows-3 sm:grid-cols-2 md:grid md:grid-rows-2 md:grid-cols-3 lg:flex-grow lg:flex justify-end gap-6"> 
                        <template v-for="(menu, menuIndex) in menus" :key="menuIndex">
                            <router-link :to="{ path: menu.link, query: { id: menu?.id } }" 
                                :class="`text-white uppercase sm:text-[18px] xs:text-[14px] xxs:text-[12px] md:text-[18px] lg:text-sm xl:text-base ${$route.path == menu.link && $route.query?.id == menu.id ? 'text-[#66C3CD]' : ''}`"> 
                                {{ menu?.name }}
                            </router-link>
                        </template>
                        <div class="lg:hidden text-white xxs:flex xs:flex sm:flex md:flex gap-2 text-xl mt-6">
                            <img :src="mapIcon" />
                            <span class="flex flex-col justify-end">Dubai, UAE</span>
                        </div>
                      
                        
                    </div>
                    <div class="lg:hidden xxs:flex xs:flex sm:flex md:flex gap-6 flex-col justify-center">
                        <Socials/>
                    </div>
                </div>
            </div>
            <div class="lg:flex flex-col gap-4 flex-wrap md:hidden sm:hidden xs:hidden xxs:hidden"> 
                <div class="flex gap-4">
                    <Socials/>
                </div>
                <div class="text-white flex gap-2 xxs:text-base">
                    <img :src="mapIcon" />
                    <span>Dubai, UAE</span>
                </div>
            </div>

        </div>
        <div class="text-white mt-6 sm:mt-0 xs:mt-0 xxs:mt-0" id="footer">
            © 2023 hypedriven
        </div>
    </footer>
</template>

<script>
import logo from "../../assets/img/logo.svg";
import mapIcon from "../../assets/img/icons/map-pin-green.svg";
import Socials from "../socials/index.vue";
export default {
    name: "FooterComponent",
    components: {
        Socials
    },
    data: function () {
        return {
            mapIcon: mapIcon,
            logo: logo,
            menus: [
                {
                    name: "Home",
                    link: "/"
                },
                {
                    name: "About Us",
                    link: "/about-us"
                },
                {
                    name: "Services",
                    link: "/services"
                },
                {
                    name: "Team",
                    link: "/team"
                },
                {
                    name: "Careers",
                    link: "/careers"
                },
                {
                    name: "Contact us",
                    link: "/contact-us"
                }
            ]
        };
    },
    methods: {

    }
};
</script>
