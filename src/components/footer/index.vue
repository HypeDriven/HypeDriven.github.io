<template>
    <footer id="footer"
        class="py-16 flex flex-col items-center justify-between flex-wrap bg-primary-bg p-4 md:px-16 lg:px-28 xl:px-28 gap-20">
        <div class="flex justify-between w-full">
            <div class="flex flex-col gap-10">
                <div class="text-white">
                    <img :src="logo" alt="Logo" />
                </div>
                <div class="text-white">
                    Software development company
                </div>
            </div>
            <div class="mx-auto">
                <div class="w-full block flex-grow md:flex md:items-center md:w-auto">
                    <div class="hidden md:flex-grow md:flex justify-end gap-6">
                        <template v-for="(menu, menuIndex) in menus" :key="menuIndex">
                            <a class="text-white uppercase" v-if="menu?.id == 'contactus'"
                                href="mailto:careers@hypedriven.com">
                                {{ menu?.name }}
                            </a>
                            <router-link v-else :to="{ path: menu.link, query: { id: menu?.id } }"
                                :class="`text-white uppercase ${$route.path == menu.link && $route.query?.id == menu.id ? 'text-secondary-button' : ''}`">
                                {{ menu?.name }}
                            </router-link>
                        </template>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-4 flex-wrap">
                <div class="flex gap-4">
                    <Socials />
                </div>
                <div class="text-white flex gap-1">
                    <img :src="mapIcon" />
                    <span>United Arab Emirates</span>
                </div>
            </div>

        </div>
        <div class="text-white mt-6" id="footer">
            © 2022 hypedriven
        </div>
    </footer>
</template>

<script>
import logo from "../../assets/img/logo.svg";
import mapIcon from "../../assets/img/icons/map-pin.svg";
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
                    link: "/",
                    id: "services"
                },
                {
                    name: "Careers",
                    link: "/",
                    id: "careers"
                },
                {
                    name: "Contact us",
                    link: "/",
                    id: "contactus"
                }
            ]
        };
    },
    methods: {

    }
};
</script>
