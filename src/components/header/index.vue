<template>
    <div>
        <nav
            class="z-20 flex items-center justify-between flex-wrap bg-primary-bg p-4 md:px-16 lg:px-28 xl:px-28 w-full">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class="font-semibold text-xl tracking-tight">
                    <router-link to="/">
                        <img :src="logo" alt="Logo" />
                    </router-link>
                </span>
            </div>
            <div class="block md:hidden">
                <button @click="toggleMenu()"
                    class="flex items-center px-3 py-2 border rounded text-primary-button border-primary-button hover:text-secondary-button hover:border-secondary-button">
                    <svg class="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path v-if="hideMenu" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        <path v-else
                            d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                    </svg>
                </button>
            </div>
            <div class="w-full block flex-grow md:flex md:items-center md:w-auto"
                :class="!hideMenu ? 'h-screen md:h-auto' : ''">
                <div class="md:flex-grow md:flex justify-end gap-6"
                    :class="!hideMenu ? 'flex flex-col my-8 md:my-0 md:flex-grow md:flex-row md:flex md:justify-end gap-6' : 'hidden'">
                    <template v-for="(menu, menuIndex) in menus" :key="menuIndex">
                        <a class="text-white uppercase" v-if="menu.id == 'contactus'"
                            :href="`mailto:${$t('info.email')}`">
                            {{ menu?.name }}
                        </a>
                        <router-link v-else :to="{ path: menu.link, query: { id: menu.id } }"
                            :class="`text-white uppercase ${$route.path == menu.link && $route.query?.id == menu.id ? 'text-secondary-button' : ''}`">
                            {{ menu?.name }}
                        </router-link>
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
    data: function () {
        return {
            logo: logo,
            hideMenu: true,
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
        toggleMenu: function () {
            this.hideMenu = !this.hideMenu;
        }
    }
};
</script>
