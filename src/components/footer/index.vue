<template>
    <footer
        class="py-16 flex flex-col items-center justify-between flex-wrap bg-primary-bg p-4 md:px-16 lg:px-28 xl:px-28 gap-20">
        <div class="flex justify-between w-full">
            <div class="flex flex-col gap-10">
                <div class="text-white">
                    <img :src="logo" alt="Logo"/>
                </div>
                <div class="text-white">
                    Software development company
                </div>
            </div>
            <div class="m-auto">
                <div class="w-full block flex-grow md:flex md:items-center md:w-auto">
                    <div class="hidden md:flex-grow md:flex justify-end gap-6">
                        <template v-for="(menu, menuIndex) in menus" :key="menuIndex">
                            <a :class="`text-white capitalize`">
                                {{ menu?.name }}
                            </a>
                        </template>
                    </div>
                </div>
            </div>
            <div class="flex gap-4">
                <Socials />
            </div>
        </div>
        <div class="text-white">
            @2022 Hypedriven. All rights reserved.
        </div>
    </footer>
</template>

<script>
import logo from "../../assets/img/logo.svg";
import Socials from "../socials/index.vue";
export default {
    name: "FooterComponent",
    components: {
        Socials
    },
    data: function () {
        return {
            logo:logo,
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
                    name: "Industries",
                    link: "/industries"
                },
                {
                    name: "Careers",
                    link: "/careers"
                },
                {
                    name: "Contact Us",
                    link: "/contact-us"
                }
            ]
        };
    },
    methods: {

    }
};
</script>
