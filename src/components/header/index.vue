<template>
    <div>
        <nav class="z-20 flex items-center justify-between flex-wrap bg-primary-bg p-4 md:px-16 lg:px-28 xl:px-28 fixed w-full">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class="font-semibold text-xl tracking-tight">
                    <img :src="logo" alt="Logo"/>
                </span>
            </div>
            <div class="block md:hidden">
                <button @click="toggleMenu()" class="flex items-center px-3 py-2 border rounded text-primary-button border-primary-button hover:text-secondary-button hover:border-secondary-button">
                <svg class="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="w-full block flex-grow md:flex md:items-center md:w-auto">
                <div class="hidden md:flex-grow md:flex justify-end gap-6">
                    <template v-for="(menu, menuIndex) in menus" :key="menuIndex">
                        <a :class="`text-white uppercase ${menuIndex == 0 ? 'text-secondary-button' :''}`">
                            {{menu?.name}}
                        </a>
                    </template>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import logo from "../../assets/img/logo.svg";
export default {
  name: "HeaderComponent",
    data: function() {
        return {
        logo: logo,
        hideMenu: true,
        menus:[
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
        toggleMenu: function () {
            this.hideMenu = !this.hideMenu;
        }
    }
};
</script>
